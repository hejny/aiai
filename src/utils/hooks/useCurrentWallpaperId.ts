import { useRouter } from 'next/router';

/**
 * A function that returns current wallpaper id based on the router query
 */
export function useCurrentWallpaperId(): string {
    const router = useRouter();

    if (router.pathname === '/[wallpaper]') {
        const wallpaperId = router.query.wallpaper as string;

        if (typeof wallpaperId !== 'string') {
            console.error('[📌]', { wallpaperId });
            throw new Error('Wallpaper id is not 1 string, [📌] see more in console.');
        }

        return wallpaperId;
    } else {
        throw new Error(`Hook useWallpaper can not be used on path "${router.pathname}"`);
    }
}
