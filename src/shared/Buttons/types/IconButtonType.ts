import { IconNames } from "@/utils/Icon/Icon";
import { ButtonType } from "./ButtonType";

export type IconButtonType = ButtonType & {
    icon: typeof IconNames[number];
};