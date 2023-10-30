import { classNames } from '@/utils/classNames';

type ContainerProps = {
    children: React.ReactNode;
    center?: boolean;
    className?: string;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | string;
};

const getTailwindUtility = (size: ContainerProps['maxWidth']) => {
    switch (size) {
        case 'xs':
            return 'max-w-xs';
        case 'sm':
            return 'max-w-sm';
        case 'md':
            return 'max-w-md';
        case 'lg':
            return 'max-w-lg';
        case 'xl':
            return 'max-w-xl';
        case '2xl':
            return 'max-w-2xl';
        case '3xl':
            return 'max-w-3xl';
        case '4xl':
            return 'max-w-4xl';
        case '5xl':
            return 'max-w-5xl';
        case '6xl':
            return 'max-w-6xl';
        case '7xl':
            return 'max-w-7xl';
        default:
            return size;
    }
};

export const Container = (props: ContainerProps) => {
    const { children, center = true, className, maxWidth = '2xl' } = props;
    const tailwindUtility = getTailwindUtility(maxWidth);

    return <div className={classNames(className, tailwindUtility, center ? 'mx-auto' : '', 'px-4')}>{children}</div>;
};
