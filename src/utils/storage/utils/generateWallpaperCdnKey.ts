import { IWallpaper } from '../../IWallpaper';
import { string_uri } from '../../typeAliases';
import { nameToSubfolderPath } from './nameToSubfolderPath';

/**
 * Generates a path for the user content.
 *
 */
export async function generateWallpaperCdnKey(wallapepr: IWallpaper): Promise<string_uri> {
    // TODO: [⛳️] Probbably prefix should be in this config not on the consumer side
    return `${nameToSubfolderPath(wallapepr.id).join('/')}/${wallapepr.id}`;
}
