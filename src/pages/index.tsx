import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Vector } from 'xyzt';
import { DebugGrid } from '../components/DebugGrid/DebugGrid';
import { TiledBackground } from '../components/TiledBackground/TiledBackground';
import { AppHead } from '../sections/00-AppHead/AppHead';
import { WelcomeSection } from '../sections/10-Welcome/Welcome';
import { FooterSection } from '../sections/90-Footer/Footer';
import styles from '../styles/common.module.css';
import { useSkin } from '../utils/hooks/useSkin';
import { useWallpaper } from '../utils/hooks/useWallpaper';

export default function IndexPage({ lang }: any) {
    const Wallpaper = useWallpaper();
    const skin = useSkin();

    return (
        <>
            <AppHead />
            <>
                {/* TODO: Util <SkinStyle/> + TODO: Allow partial ISkin*/}
                <style>{`
                    :root {
                        --normal-text-color: ${skin.normalTextColor.toHex()};
                        --highlighted-text-color: ${skin.highlightedTextColor.toHex()};
                        --footer-text-color: ${skin.footerTextColor.toHex()};
                        --main-background: ${skin.mainBackground};
                        --footer-background: ${skin.footerBackground}
                    }
                `}</style>
            </>

            <div className={styles.page}>
                <DebugGrid size={new Vector(5, 5)} />
                <header>
                    {/* TODO: Do some system for multiple pages */}
                    <Wallpaper />
                </header>
                <div className={styles.background}>
                    <TiledBackground />
                </div>
                <main>
                    <WelcomeSection variant="HOMEPAGE" />
                    {/*<ReferencesSection variant="SHORT" />*/}
                </main>
                <footer>
                    <FooterSection />
                </footer>
            </div>
        </>
    );
}

export async function getStaticProps({ locale }: { locale: string }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}

/**
 * TODO: !! Fix Shuffle without React hydration error
 * TODO: !!! All links must work
 * TODO: !!! Make this a personal page - all projects
 * TODO: Add somewhere button [Get in touch]
 * TODO: [🪒] Can be getStaticProps shared between all pages?
 * TODO: Some linting rule not to use:
 *       NOT> import { useTranslation } from 'react-i18next';
 *       BUT
 *       YES> import { useTranslation } from 'next-i18next';
 */
