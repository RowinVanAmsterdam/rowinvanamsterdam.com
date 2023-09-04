import { RVALogo } from "@/shared/Logo/RVALogo";
import Link from "next/link";

export const HeaderLogo = () => (
    <div className="flex lg:flex-1">
        <Link href="/" className="w-20" title="RVA Logo">
            <RVALogo />
        </Link>
    </div>
);

