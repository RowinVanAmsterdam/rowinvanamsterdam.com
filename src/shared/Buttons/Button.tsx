import Link from "next/link";
import { getButtonVariant } from "./helpers/getButtonVariant";
import { ButtonType } from "./types/ButtonType";

export const Button = (props: ButtonType) => {
    const { children, variant, href, className, onClick } = props;
    const buttonVariant = getButtonVariant(variant);
    const buttonClass = `${buttonVariant} ${className ?? ''} font-headings font-bold cursor-pointer rounded-md fill-current py-2 px-4 text-center text-sm uppercase text-white duration-150 hover:ease-in-out`;

    if (href) {
        return (
            <Link href={href} className={buttonClass}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={buttonClass}>
            {children}
        </button>
    );
};
