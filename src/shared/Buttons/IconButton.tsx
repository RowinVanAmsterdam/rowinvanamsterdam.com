import { Icon } from '@/utils/Icon/Icon';
import { Button } from './Button';
import { IconButtonType } from './types/IconButtonType';
import { classNames } from '@/utils/classNames';

export const IconButton = (props: IconButtonType) => {
    const { children, variant, href, className, icon } = props;

    return (
        <Button href={href} variant={variant} className={classNames(className, 'flex items-center justify-center gap-3')}>
            <Icon name={icon} />
            {children}
        </Button>
    );
};
