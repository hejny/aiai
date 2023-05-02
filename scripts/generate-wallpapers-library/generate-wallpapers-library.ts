#!/usr/bin/env ts-node

import chalk from 'chalk';
import commander from 'commander';
import { readFile, writeFile } from 'fs/promises';
import glob from 'glob-promise';
import { normalizeTo_camelCase, normalizeTo_snake_case } from 'n12';
import { capitalize } from 'n12/dist/capitalize';
import { basename, dirname, join, relative } from 'path';
import { computeImageColorStats } from '../../src/utils/image/computeImageColorStats';
import { createImageInNode } from '../../src/utils/image/createImageInNode';
import { TakeChain } from '../../src/utils/take/classes/TakeChain';
import { commit } from '../utils/autocommit/commit';
import { isWorkingTreeClean } from '../utils/autocommit/isWorkingTreeClean';
import { forPlay } from '../utils/forPlay';
import { generateImport } from '../utils/generateImport';
import { isFileExisting } from '../utils/isFileExisting';
import { prettify } from '../utils/prettify';

if (process.cwd() !== join(__dirname, '../..')) {
    console.error(chalk.red(`CWD must be root of the project`));
    process.exit(1);
}

const program = new commander.Command();
program.option('--commit', `Autocommit changes`);
program.parse(process.argv);
const { commit: isCommited } = program.opts();

generateWallpapersLibrary({ isCommited })
    .catch((error) => {
        console.error(chalk.bgRed(error.name));
        console.error(error);
        process.exit(1);
    })
    .then(() => {
        process.exit(0);
    });

async function generateWallpapersLibrary({ isCommited }: { isCommited: boolean }) {
    console.info(`🖼️  Generating wallpapers library`);

    if (isCommited && !(await isWorkingTreeClean(process.cwd()))) {
        throw new Error(`Working tree is not clean`);
    }

    const wallpapersDir = join(process.cwd(), 'assets/ai/wallpaper/gallery');
    const wallpapersPaths = await glob(
        join(wallpapersDir, '*.png' /* <- TODO: Maybe do not hardcode PNGs */).split('\\').join('/'),
    );
    const indexFilePath = join(wallpapersDir, '..', 'index.tsx');

    const wallpapers: Array<{ entityName: string; entityPath: string }> = [];

    for (const wallpaperPath of wallpapersPaths) {
        await forPlay();
        console.info(`🖼️🖼️  ${wallpaperPath.split('\\').join('/')}`);

        const metadataPath = wallpaperPath.replace(/\.png$/, '.json');

        if (!(await isFileExisting(metadataPath))) {
            throw new Error(`Metadata file does not exist "${metadataPath}"`);
        }

        const name = basename(wallpaperPath);

        const jobUuidMatch = name.match(/_(?<jobUuid>[^_]*?)(\.png)?$/);
        const jobUuid = jobUuidMatch?.groups?.jobUuid;
        const componentId = jobUuid?.split('-')[0]!;

        if (!jobUuid) {
            throw new Error(`Can not find jobUuid in "${name}"`);
        }

        const jobUrl = new URL(`https://www.midjourney.com/app/jobs/${jobUuid}`);

        const nameWithoutExtension = name.replace(/\.png$/, '');

        const type = 'Image';
        const wallpaperFilePath = `${join(wallpapersDir, nameWithoutExtension)}_${type}.tsx`;

        const wallpaperFileOldContent = await readFile(wallpaperFilePath, 'utf-8').catch(() => ``);

        if (wallpaperFileOldContent.includes(`@not-generated by generate-wallpapers-library`)) {
            console.info(`⏩ ${relative(process.cwd(), wallpaperFilePath).split('\\').join('/')}`);
            continue;
        }
        const nameWithoutBoilerplate = nameWithoutExtension.replace(/^Pavol_Hejn_/, '').replace('_' + jobUuid, '');

        const componentName = capitalize(normalizeTo_camelCase(nameWithoutBoilerplate)) + `_${componentId}_` + type;

        const entityName = normalizeTo_snake_case(nameWithoutBoilerplate) + '_' + componentId;
        const wallpaperImportPath = (
            './' + relative(dirname(wallpaperFilePath), wallpaperPath).split('\\').join('/')
        ).replace(/^\.\/\.\.\//, '../');

        const metadataImportPath = wallpaperImportPath.replace(/\.png$/, '.json');

        const title = nameWithoutBoilerplate.split('_').join(' ');

        wallpapers.push({ entityName: componentName, entityPath: wallpaperFilePath });

        const wallpaperColorStats = computeImageColorStats(await createImageInNode(wallpaperPath));

        const wallpaperFileContent = await prettify(`

            /**
             * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
             * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
             *    If you want to edit this file:
             *      - Change @generated to @not-generated
             *      - And remove this warning
             *    Then the file will not be re-generated automatically
             */
        
            import Image from 'next/image';
            import ${entityName} from '${wallpaperImportPath}';
            import metadata from '${metadataImportPath}';
            import { IWallpaperMetadata } from '../IWallpaperComponent';
            import { IImageColorStats } from '../../../../src/utils/image/computeImageColorStats';
            import { Color } from '../../../../src/utils/color/Color';

            /**
             * Image of ${title}
             * 
             * @see ${jobUrl.href}
             * @generated by generate-wallpapers-library
             */
            export function ${componentName}() {
                return (
                    <Image
                        alt="${title}"
                        src={${entityName}}
                        draggable="false"
                        placeholder="blur"
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                );
            }

            ${componentName}.metadata = metadata satisfies IWallpaperMetadata;
            ${componentName}.colorStats = ${JSON.stringify(
            wallpaperColorStats,
            (key, value) => {
                if (value instanceof TakeChain) {
                    return `>>>Color.fromHex('${value.value.toHex()}')<<<`;
                }

                return value;
            },
            4,
        )
            .split('">>>')
            .join('')
            .split('<<<"')
            .join('')} satisfies IImageColorStats;
        `);

        await writeFile(wallpaperFilePath, wallpaperFileContent, 'utf-8');
        console.info(`💾 ${relative(process.cwd(), wallpaperFilePath).split('\\').join('/')}`);
    }

    const indexFileContent = await prettify(`

            /**
             * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
             * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
             */
        
            ${wallpapers
                .map((options) => generateImport({ ...options, itselfPath: indexFilePath, isNamedImport: true }))
                .join('\n')}
            import { IWallpaperComponent } from './IWallpaperComponent';

            
            export const generated_wallpapers: Array<IWallpaperComponent> = [${wallpapers
                .map(({ entityName }) => entityName)
                .join(',')}];
        `);

    await writeFile(indexFilePath, indexFileContent, 'utf-8');

    if (isCommited) {
        await commit(dirname(wallpapersDir), `🖼️  Generate wallpapers library`);
    }

    console.info(`[ Done 🖼️  Generating wallpapers library ]`);
}

/**
 * TODO: Maybe use getMidjourneyLink from batch-froject-editor
 * TODO: Persistency and uniqueness of the names
 */
