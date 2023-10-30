import { classNames } from "@/utils/classNames";
import { Button } from "../Buttons/Button";
import { Typography } from "../Typography";

type FloatingCTAProps = {
    title: string;
    subtitle: string;
    buttonLabel: string;
    buttonLink: string;
    className?: string;
};

export const FloatingCTA = (props: FloatingCTAProps) => {
    const { title, subtitle, buttonLabel, buttonLink, className } = props;

    return (
        <div className={classNames(className, 'bg-rva-neutral-800 text-white flex justify-between items-center rounded-md py-4 sm:py-6 pr-3 pl-6 gap-10 shadow-lg')}>
            <div>
                <Typography variant="text-xs" className="header opacity-50">
                    {subtitle}
                </Typography>
                <Typography variant="text-sm" className="header">
                    {title}
                </Typography>
            </div>
            <Button variant="contained" href={buttonLink}>
                {buttonLabel}
            </Button>
        </div>
    );
};
