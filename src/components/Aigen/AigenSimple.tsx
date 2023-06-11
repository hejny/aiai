import Link from 'next/link';
import { useRouter } from 'next/router';
import { randomItem } from '../../utils/randomItem';
import styles from './AigenSimple.module.css';

/**
 * @@
 */
export function AigenSimple() {
    const router = useRouter();

    return (
        <div className={styles.AigenSimple}>
            <Link
                href={{
                    pathname: '/showcase/[wallpaper]',
                    query: {
                        wallpaper: router.query.wallpaper,
                        mode: 'explanation',
                    },
                }}
            >
                {randomItem(<div style={{ marginRight: 5 }}>Generated By AI</div>)}
            </Link>
        </div>
    );
}
