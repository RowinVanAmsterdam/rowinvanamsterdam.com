"use client";

import { motion } from "framer-motion";

type RVALogoAnimatedProps = {
    initialRgbaColor?: string;
    rgbaColor?: string;
};

export const RVALogoAnimated = (props: RVALogoAnimatedProps) => {
    const { initialRgbaColor = "rgba(0, 0, 0, 0)", rgbaColor = "rgba(0, 0, 0, 1)" } = props;

    const icon = {
        hidden: {
            opacity: 0,
            pathLength: 0,
            fill: initialRgbaColor,
            stroke: initialRgbaColor,
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            fill: rgbaColor,
            stroke: rgbaColor,
        },
    };

    return (
        <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 695.47 306.35" className=" overflow-visible ">
            <motion.path
                d="M694.35,243.76,545.26,28C534.45,12.31,519.16,0,496,0c-24.24,0-39.53,13.42-50,28l-5,7.9h0L429.91,53.68l-38.14,60.77h0l-32.14,51.19-81-120.11h0C255.75,10.17,205.12,0,162.82,0H5A5.09,5.09,0,0,0,1.17,8.34L45.83,63A7.94,7.94,0,0,0,52,65.9H169.15c26.42,0,42.43,9.84,42.43,29.54,0,17.42-18.61,28.4-42.43,28.4h-62a5.1,5.1,0,0,0-3.84,8.36l44.6,54.13L201,250.47a7.94,7.94,0,0,0,6.12,2.9h87.78a5.1,5.1,0,0,0,3.63-8.59l-37.8-40.65c-17.13-17.8-26.43-26.89-35-33.32A83.19,83.19,0,0,0,263,153.29l46,72.4c10.82,15.66,26.11,28,49.23,28,23.87,0,39.16-13.43,50-28l50-76.59.08,0,33.36-51.27.89-1.38c2.65-3.58,5.71-3.18,8.47.9L539.29,154c6.13,8.92,13.51,19.71,19.65,28.33a4.69,4.69,0,0,1-4,7.42c-10.7-.32-23.44-.32-34.69-.32H461.62a7.86,7.86,0,0,0-6.35,3.23l-38.84,53.45a4.71,4.71,0,0,0,3.81,7.47h269A6.27,6.27,0,0,0,694.35,243.76Z"
                variants={icon}
                initial="hidden"
                animate="visible"
                className="overflow-visible stroke-2"
                transition={{
                    default: { duration: 2, ease: "easeInOut" },
                    fill: { duration: 1, ease: "easeInOut", delay: 2 },
                }}
            />
            <motion.g id="animationWrapper" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 3 }}>
                <path d="M238.42,306.13l-5.76-8.1a18.51,18.51,0,0,1-2,.11h-6.77v8h-2.66v-25.2h9.43c6.41,0,10.29,3.24,10.29,8.64a7.81,7.81,0,0,1-5.75,7.92l6.15,8.64Zm-.15-16.56c0-4-2.66-6.33-7.7-6.33h-6.7v12.63h6.7C235.61,295.87,238.27,293.53,238.27,289.57Z" />
                <path d="M245,293.53c0-7.34,5.61-12.81,13.24-12.81s13.21,5.43,13.21,12.81-5.65,12.82-13.21,12.82S245,300.88,245,293.53Zm23.79,0A10.59,10.59,0,1,0,258.25,304,10.21,10.21,0,0,0,268.8,293.53Z" />
                <path d="M311.28,280.93l-8.5,25.2H300l-7.37-21.49-7.42,21.49h-2.77l-8.5-25.2h2.74l7.27,21.67,7.52-21.67h2.49l7.41,21.78,7.38-21.78Z" />
                <path d="M316.14,280.93h2.67v25.2h-2.67Z" />
                <path d="M348.07,280.93v25.2h-2.2l-16.19-20.44v20.44H327v-25.2h2.2l16.23,20.45V280.93Z" />
                <path d="M386.66,280.93l-11.16,25.2h-2.63l-11.15-25.2h2.88l9.64,21.89L384,280.93Z" />
                <path d="M405.35,299.4h-14l-3,6.73h-2.77L397,280.93h2.63l11.52,25.2h-2.81Zm-1-2.16-6-13.53-6.05,13.53Z" />
                <path d="M436.41,280.93v25.2h-2.19L418,285.69v20.44h-2.66v-25.2h2.19l16.24,20.45V280.93Z" />
                <path d="M469.86,299.4h-14l-3,6.73H450l11.52-25.2h2.63l11.52,25.2h-2.81Zm-1-2.16-6.05-13.53-6,13.53Z" />
                <path d="M506,280.93v25.2h-2.56V286l-9.9,17h-1.26l-9.9-16.85v20.05h-2.55v-25.2h2.19L493,299.61l10.83-18.68Z" />
                <path d="M511.83,303.07l1.05-2.05a12.38,12.38,0,0,0,8.31,3.06c4.72,0,6.77-2,6.77-4.47,0-6.91-15.51-2.66-15.51-12,0-3.71,2.88-6.91,9.28-6.91a14.22,14.22,0,0,1,7.81,2.23l-.9,2.12a13,13,0,0,0-6.91-2.08c-4.6,0-6.66,2.05-6.66,4.57,0,6.91,15.52,2.73,15.52,11.91,0,3.71-3,6.88-9.4,6.88C517.41,306.35,513.71,305,511.83,303.07Z" />
                <path d="M540.92,283.24h-8.85v-2.31h20.37v2.31h-8.86v22.89h-2.66Z" />
                <path d="M574.51,303.83v2.3H556.69v-25.2H574v2.31H559.35v9h13v2.27h-13v9.36Z" />
                <path d="M598,306.13l-5.76-8.1a18.51,18.51,0,0,1-2,.11h-6.76v8h-2.67v-25.2h9.43c6.41,0,10.3,3.24,10.3,8.64a7.82,7.82,0,0,1-5.76,7.92l6.15,8.64Zm-.15-16.56c0-4-2.66-6.33-7.7-6.33h-6.69v12.63h6.69C595.17,295.87,597.83,293.53,597.83,289.57Z" />
                <path d="M606.8,280.93h10.26c8.06,0,13.5,5.19,13.5,12.6s-5.44,12.6-13.5,12.6H606.8Zm10.12,22.9c6.69,0,11-4.25,11-10.3s-4.32-10.29-11-10.29h-7.45v20.59Z" />
                <path d="M652,299.4h-14l-3,6.73h-2.77l11.51-25.2h2.63l11.52,25.2H655Zm-1-2.16-6-13.53-6.05,13.53Z" />
                <path d="M688.16,280.93v25.2H685.6V286l-9.9,17h-1.26l-9.9-16.85v20.05H662v-25.2h2.19l11,18.68L686,280.93Z" />
            </motion.g>
        </motion.svg>
    );
};