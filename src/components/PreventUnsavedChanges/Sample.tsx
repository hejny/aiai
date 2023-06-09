import { useEffect } from 'react';
import { useWallpaper } from '../../utils/hooks/useWallpaper';

/**
 * @@
 */
export function PreventUnsavedChanges() {
    const [wallpaper] = useWallpaper();

    const isSaved = wallpaper.saveStage === 'SAVED';

    useEffect(() => {
        window.onbeforeunload = () => {
            // <- Note: It is not working by window.addEventListener('beforeunload', this.beforeunloadHandler);
            if (isSaved) {
                return undefined;
            } else {
                return 'You have unsaved changes. Are you sure you want to leave?';
                //     <- Note: There is no way how to pass reliably own message in todays browsers
            }
        };

        return () => {
            window.onbeforeunload = null;
        };
    }, [isSaved]);
    return <></>;
}
