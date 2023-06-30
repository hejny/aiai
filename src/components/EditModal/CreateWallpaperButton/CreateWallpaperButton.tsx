import Link from 'next/link';
import { useMemo } from 'react';
import { computeWallpaperUriid } from '../../../utils/computeWallpaperUriid';
import { extractTitleFromMarkdown } from '../../../utils/content/extractTitleFromMarkdown';
import { serializeColorStats } from '../../../utils/image/utils/serializeColorStats';
import { IWallpaper } from '../../../utils/IWallpaper';
import { getSupabaseForBrowser } from '../../../utils/supabase/getSupabaseForBrowser';
import { string_wallpaper_id } from '../../../utils/typeAliases';
import { parseKeywordsFromWallpaper } from '../../Gallery/GalleryFilter/utils/parseKeywordsFromWallpaper';

interface SaveBoardButtonProps extends Pick<IWallpaper, 'src' | 'prompt' | 'content' | 'colorStats'> {
    parentWallpaperId: string_wallpaper_id;
    children?: React.ReactNode;
}
/**
 * @@@
 */
export function SaveBoardButton(props: SaveBoardButtonProps) {
    const { parentWallpaperId, src, prompt, content, colorStats, children } =
        props;

    const newWallpaper = useMemo(() => {
        const title = extractTitleFromMarkdown(content) || 'Untitled';
        const keywords = Array.from(parseKeywordsFromWallpaper({ prompt, content }));
        const newAnonymousWallpaper = {
            parent: parentWallpaperId,
            src,
            prompt,
            colorStats,
            content,
            title,
            keywords,
        };
        return {
            id: computeWallpaperUriid(newAnonymousWallpaper),
            ...newAnonymousWallpaper,
            colorStats: serializeColorStats(newAnonymousWallpaper.colorStats),
        };
    }, [parentWallpaperId, src, prompt, content, colorStats]);

    return (
        <Link
            href={`/prepare/showcase/${newWallpaper.id}`}
            target={'_blank'}
            rel={'opener'}
            referrerPolicy={'same-origin'}
            className={'button'}
            onClick={async () => {
                const insertResult = await getSupabaseForBrowser().from('Wallpaper').insert(newWallpaper);

                // TODO: !! Util isInsertSuccessfull (status===201)
                console.log({ newWallpaper, insertResult });

                const key = `likedStatus_${newWallpaper.id}`;
                if (!window.localStorage.getItem(key)) {
                    window.localStorage.setItem(key, 'LIKE' satisfies keyof typeof LikedStatus);
                }

                // !!! Remove> window.open(`/showcase/${newWallpaper.id}`, '_blank');
            }}
        >
            {children}
        </Link>
    );
}