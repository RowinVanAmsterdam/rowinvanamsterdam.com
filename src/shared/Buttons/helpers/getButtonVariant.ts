import { ButtonType } from '../types/ButtonType';

const defaultVariant = 'text';

export const getButtonVariant = (variant: ButtonType['variant'] = defaultVariant) => {
    switch (variant) {
        case 'contained':
            return 'btn--contained';
        case 'outlined':
            return 'btn--outlined';
        case 'text':
            return 'btn--text';
    }
};

