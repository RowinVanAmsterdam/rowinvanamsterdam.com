import Link from 'next/link';
import { getButtonVariant } from './helpers/getButtonVariant';
import { ButtonType, LoadingPosition } from './types/ButtonType';
import { classNames } from '@/utils/classNames';
import { Icon } from '@/utils/Icon/Icon';
import { getLoadingIconLocation } from './helpers/getLoadingIconLocation';

export const Button = (props: ButtonType) => {
    const { variant, href, className, onClick, type, disabled, loading } = props;
    const isDisabled = disabled || loading;
    const buttonClassNames = classNames('btn', getButtonVariant(variant), className, disabled ? 'btn--disabled' : '');

    if (href) {
        return (
            <a href={href} className={buttonClassNames}>
                <ButtonContent {...props} />
            </a>
        );
    }

    return (
        <button type={type} onClick={onClick} className={buttonClassNames} disabled={isDisabled}>
            <ButtonContent {...props} />
        </button>
    );
};

const ButtonContent = ({ children, startIcon, endIcon, loading, loadingPosition = LoadingPosition.ONLY }: ButtonType) => {
    const { START, END, ONLY } = LoadingPosition;
    const shouldHideAll = loading && loadingPosition === ONLY;
    const shouldHideStartIcon = (loading && loadingPosition === START) || shouldHideAll;
    const shouldHideEndIcon = (loading && loadingPosition === END) || shouldHideAll;

    const opacityClass = (shouldHide: boolean | undefined) => (shouldHide ? 'opacity-0' : 'opacity-1');

    return (
        <>
            {loading && (
                <span className={classNames(getLoadingIconLocation(loadingPosition), 'absolute top-1/2 -translate-y-1/2')}>
                    <Icon name={'spinner'} className="animate-spin" />
                </span>
            )}
            {startIcon && <Icon name={startIcon} className={opacityClass(shouldHideStartIcon)} />}
            <span className={opacityClass(shouldHideAll)}>{children}</span>
            {endIcon && <Icon name={endIcon} className={opacityClass(shouldHideEndIcon)} />}
        </>
    );
};
