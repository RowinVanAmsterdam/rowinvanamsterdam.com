"use client";

import { Socials } from "@/shared/Socials/Socials";
import { HeaderMenu } from "./HeaderMenu";
import { HeaderLogo } from "./HeaderLogo";
import { Icon } from "@/utils/Icon/Icon";
import { useEffect, useState } from "react";
import { HeaderMenuMobile } from "./HeaderMenuMobile";
import { useSizes } from "@/utils/useSize";
import tailwindConfig from "../../../tailwind.config";
import resolveConfig from "tailwindcss/resolveConfig";

export const Header = () => {
    const { theme } = resolveConfig(tailwindConfig) as any;
    const lgScreenValue = parseInt(theme.screens.lg);
    const sizes = useSizes((width) => ({ isMobile: width < lgScreenValue }));
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMobileMenuOpen]);

    if (sizes.isMobile) {
        return (
            <HeaderElement>
                <HeaderLogo />
                <span onClick={() => setIsMobileMenuOpen((prev) => !prev)} className="cursor-pointer hover:bg-gray-100 p-1 rounded">
                    <Icon name={isMobileMenuOpen ? "close" : "hamburger"} className="h-5 w-5" />
                </span>
                <HeaderMenuMobile isActive={isMobileMenuOpen} />
            </HeaderElement>
        );
    }

    return (
        <HeaderElement>
            <HeaderLogo />
            <HeaderMenu />
            <Socials />
        </HeaderElement>
    );
};

const HeaderElement = ({ children }: { children: React.ReactNode }) => {
    return (
        <header className="fixed top-0 left-0 right-0 z-70 h-12 border-b-2 border-gray-200  bg-white py-2">
            <div className="container mx-auto flex h-full max-w-[1700px] flex-wrap items-center justify-between">{children}</div>
        </header>
    );
};
