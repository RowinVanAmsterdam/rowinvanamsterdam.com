import { classNames } from '@/utils/classNames';
import { ElementType } from 'react';

type BoxProps = {
    children: React.ReactNode;
    className?: string;
    component?: ElementType;
};

export const Box = (props: BoxProps) => {
    const { children, className, component } = props;
    const Component = component ? component : 'div';

    return <Component className={classNames(className)}>{children}</Component>;
};
