import { Header } from "@/Layout/Header/Header";
import "../assets/styles/globals.css";
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Footer } from "@/Layout/Footer";
import { Analytics } from "@/utils/Analytics";
import { environment } from "@/utils/environment";
import profile from '../assets/static/rowinvanamsterdam.json';
import { getPageTitle } from "@/utils/getPageTitle";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});
const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
});

export const metadata: Metadata = {
    title: getPageTitle("Home"),
    description: profile.subtitle
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${outfit.variable} text-rva-neutral-800 flex flex-col flex-1 relative selection:bg-rva-400 selection:text-white`}>
                {environment.isProduction && <Analytics />}
                <Header />
                <main className="flex-1 mt-12">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
