import { IconNames } from "@/utils/Icon/Icon";

export enum LoadingPosition {
    START = "start",
    END = "end",
    ONLY = "only"
}

export type ButtonType = {
    children: React.ReactNode;
    variant?: "contained" | "outlined" | "text";
    href?: string;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    startIcon?: typeof IconNames[number];
    endIcon?: typeof IconNames[number];
    disabled?: boolean;
    loading?: boolean;
    loadingPosition?: LoadingPosition;
};