"use client";

import { useEffect, useRef, useState } from "react";
import { debounce } from "./debounce";

type SizesResponse = { [key: string]: boolean };
type SizesCallback<T extends SizesResponse> = (width: number, height: number) => T;

const defaultWidth = 1280;
const defaultHeight = 900;

export const useSizes = <T extends SizesResponse>(sizesCallback: SizesCallback<T>, debounceDelay: number = 250): ReturnType<typeof sizesCallback> => {
    const firstRender = useRef(true);

    const [sizes, setSizes] = useState(sizesCallback(defaultWidth, defaultHeight));

    const setWindowSize = () => {
        if (typeof window === "undefined") {
            return;
        }

        const newSizes = sizesCallback(window.innerWidth, window.innerHeight);

        if (JSON.stringify(sizes) !== JSON.stringify(newSizes)) {
            setSizes(newSizes);
        }
    };

    const throttledHandleWindowResize = debounce(setWindowSize, debounceDelay);

    useEffect(() => {
        window.addEventListener("resize", throttledHandleWindowResize);

        if (firstRender.current) {
            setWindowSize();
            firstRender.current = false;
        }

        return function cleanup() {
            window.removeEventListener("resize", throttledHandleWindowResize);
        };
    }, [sizes]);

    return sizes;
};
