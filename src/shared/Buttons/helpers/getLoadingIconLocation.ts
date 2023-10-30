import { LoadingPosition } from "../types/ButtonType";

export const getLoadingIconLocation = (position: LoadingPosition) => {
    switch (position) {
        case LoadingPosition.START:
            return 'left-4';
        case LoadingPosition.END:
            return 'right-4';
        default:
            return 'left-1/2 -translate-x-1/2 ';
    }
};