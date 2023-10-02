import { ButtonType } from '../types/ButtonType';

const defaultVariant = 'text';

export const getButtonVariant = (variant: ButtonType['variant'] = defaultVariant) => {
    switch (variant) {
        case 'primary':
            return 'bg-primary-100 hover:bg-secondary-100 active:bg-secondary-100/50';
        case 'secondary':
            return 'bg-secondary-100';
        case 'text':
            return 'text-primary-100 p-0 hover:text-secondary-100 active:text-secondary-100/50';
    }
};
