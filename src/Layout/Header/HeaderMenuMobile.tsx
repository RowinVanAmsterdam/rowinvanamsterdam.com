import { Socials } from "@/shared/Socials/Socials"
import { HeaderMenu } from "./HeaderMenu"

type HeaderMenuMobileProps = {
    setIsMobileMenuOpen: (value: boolean) => void;
    isActive: boolean;
}

export const HeaderMenuMobile = (props: HeaderMenuMobileProps) => {
    const { setIsMobileMenuOpen, isActive } = props;

    return (
        <div className={`${isActive ? "opacity-100 visible" : "opacity-0 invisible"} flex flex-col w-screen h-[calc(100vh-46px)] absolute top-12 left-0 z-1 bg-white transition-all duration-200`}>
            <HeaderMenu setIsMobileMenuOpen={setIsMobileMenuOpen} />
            <Socials className="mx-auto mt-auto mb-16" />
        </div>
    )
    }