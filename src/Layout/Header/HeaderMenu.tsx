"use client";

import { usePathname } from "next/navigation";
import HeaderNavigation from "./static/HeaderNavigation.json";
import Link from "next/link";

export const HeaderMenu = () => {
    const pathname = usePathname();
    const isActive = (href: string) => pathname === href || (pathname === "/" && href === "/home");

    return (
        <nav className="text-lg lg:text-xs mt-4 flex flex-col lg:mt-0 lg:flex-row lg:space-x-8">
            {HeaderNavigation.map((item) => (
                <Link
                    href={item.href}
                    key={item.label}
                    className={`${
                        isActive(`/${item.label.toLowerCase()}`) ? "opacity-100" : "opacity-40"
                    } block uppercase font-black w-full border-b  border-gray-100 px-5 py-2 duration-150 ease-in-out hover:opacity-100  hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-primary`}>
                    {item.label}
                </Link>
            ))}
        </nav>
    );
};
