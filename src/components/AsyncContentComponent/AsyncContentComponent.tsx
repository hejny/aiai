import React from 'react';
import { Promisable } from 'type-fest';
import { usePromise } from '../../utils/hooks/usePromise';

interface AsyncContentComponentProps {
    /**
     * The async content to be rendered
     */
    children: Promisable<React.ReactNode>;
}

/**
 * Utility for mounting RxJS observable content
 *
 * @collboard-modules-sdk
 */
export function AsyncContentComponent(props: AsyncContentComponentProps) {
    const { children } = props;
    const { isComplete, value: childrenLoaded } = usePromise(children);

    if (!isComplete) {
        return <></>;
    }

    return <>{childrenLoaded}</>;
}

/**
 * TODO: !! Unused
 */
