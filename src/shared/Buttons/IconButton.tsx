import { Icon } from '@/utils/Icon/Icon';
import { Button } from './Button';
import { IconButtonType } from './types/IconButtonType';

export const IconButton = (props: IconButtonType) => {
    const { children, variant, href, className, icon } = props;

    return (
        <Button href={href} variant={variant} className={`${className} flex items-center justify-center gap-3`}>
            <Icon name={icon} />
            {children}
        </Button>
    );
};
