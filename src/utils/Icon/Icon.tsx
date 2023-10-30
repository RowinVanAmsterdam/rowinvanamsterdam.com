'use client';

import React from 'react';
import loadable from '@loadable/component';
import { classNames } from '../classNames';

export const IconNames = [
    'bell',
    'clock',
    'close',
    'facebook',
    'github',
    'hamburger',
    'instagram',
    'linkedin',
    'mail',
    'moon',
    'paper-plane',
    'spinner',
    'sun',
    'twitter',
    'whatsapp'
] as const;

interface IconProps {
    name: (typeof IconNames)[number];
    className?: string;
    onClick?: () => void;
}

export const Icon: React.FC<IconProps> = React.memo(({ name, className, onClick }) => {
    const iconClass = classNames(className, `icon icon--${name} block h-4 w-4 fill-current`);

    if (!name || !IconNames.includes(name)) {
        return null;
    }

    const IconComponent = loadable(() => import(`./icons/${name}`), {
        resolveComponent: (components) => {
            const icon = React.cloneElement(components.default(), { className: iconClass, onClick: onClick });
            return () => icon;
        }
    });

    return <IconComponent />;
});
