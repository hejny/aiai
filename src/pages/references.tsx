import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Vector } from 'xyzt';
import { PageProps } from '.';
import { getWallpapers } from '../../scripts/utils/wallpaper/getWallpapers';
import { DebugGrid } from '../components/DebugGrid/DebugGrid';
import { TiledBackground } from '../components/TiledBackground/TiledBackground';
import { AppHead } from '../sections/00-AppHead/AppHead';
import { ReferencesSection } from '../sections/40-References/References';
import { FooterSection } from '../sections/90-Footer/Footer';
import styles from '../styles/common.module.css';
import { WallpapersContext } from '../utils/hooks/useWallpaper';

export default function ReferencesPage({ wallpapers }: PageProps) {
    return (
        <WallpapersContext.Provider value={wallpapers} /* <- Is this the right place to be Provider in? */>
            <AppHead /*subtitle="References" /* <- TODO: !! Translate */ />

            <div className={styles.page}>
                <DebugGrid size={new Vector(5, 5)} />
                <header>
                    {/* TODO: Do some system for multiple pages */}
                    {/* <CaveSection /> */}
                </header>
                <div className={styles.background}>
                    {/* TODO: Do some system for multiple pages */}
                    <TiledBackground />
                </div>
                <main>
                    {/* <WelcomeSection variant="SIDEPAGE" /> */}
                    <ReferencesSection variant="FULL" />
                </main>
                <footer>
                    <FooterSection />
                </footer>
            </div>
        </WallpapersContext.Provider>
    );
}

export async function getStaticProps({ locale }: { locale: string }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
            wallpapers: await getWallpapers(),
        },
    };
}

/**
 * TODO: Make some menu
 * TODO: [🧈] Best way how to share page css
 *        <a href=" https://www.midjourney.com/app/jobs/fe3480c5-76af-45da-ac4e-5177062bcb6b">*MidJourney</a>
 * TODO: DRY with index.tsx
 * TODO: [🪒] Can be getStaticProps shared between all pages?
 */
