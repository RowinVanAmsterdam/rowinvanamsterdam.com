/** @type {import('tailwindcss').Config} */

import type { Config } from 'tailwindcss';
import { PluginUtils } from 'tailwindcss/types/config';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {

        extend: {
            fontFamily: {
                headings: ['var(--font-outfit)'],
                base: ['var(--font-inter)']
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
            },
            colors: {
                "rva": {
                    50: 'rgb(var(--color-rva-50) / <alpha-value>)',
                    100: 'rgb(var(--color-rva-100) / <alpha-value>)',
                    200: 'rgb(var(--color-rva-200) / <alpha-value>)',
                    300: 'rgb(var(--color-rva-300) / <alpha-value>)',
                    400: 'rgb(var(--color-rva-400) / <alpha-value>)',
                    500: 'rgb(var(--color-rva-500) / <alpha-value>)',
                    600: 'rgb(var(--color-rva-600) / <alpha-value>)',
                    700: 'rgb(var(--color-rva-700) / <alpha-value>)',
                    800: 'rgb(var(--color-rva-800) / <alpha-value>)',
                    900: 'rgb(var(--color-rva-900) / <alpha-value>)'
                },
                "rva-neutral": {
                    50: 'rgb(var(--color-rva-neutral-50) / <alpha-value>)',
                    100: 'rgb(var(--color-rva-neutral-100) / <alpha-value>)',
                    200: 'rgb(var(--color-rva-neutral-200) / <alpha-value>)',
                    300: 'rgb(var(--color-rva-neutral-300) / <alpha-value>)',
                    400: 'rgb(var(--color-rva-neutral-400) / <alpha-value>)',
                    500: 'rgb(var(--color-rva-neutral-500) / <alpha-value>)',
                    600: 'rgb(var(--color-rva-neutral-600) / <alpha-value>)',
                    700: 'rgb(var(--color-rva-neutral-700) / <alpha-value>)',
                    800: 'rgb(var(--color-rva-neutral-800) / <alpha-value>)',
                    900: 'rgb(var(--color-rva-neutral-900) / <alpha-value>)',
                    950: 'rgb(var(--color-rva-neutral-950) / <alpha-value>)'
                },
                error: {
                    50: 'rgb(var(--color-error-50) / <alpha-value>)',
                    100: 'rgb(var(--color-error-100) / <alpha-value>)',
                    150: 'rgb(var(--color-error-150) / <alpha-value>)'
                },
                success: {
                    50: 'rgb(var(--color-success-50) / <alpha-value>)',
                    100: 'rgb(var(--color-success-100) / <alpha-value>)',
                    150: 'rgb(var(--color-success-150) / <alpha-value>)'
                },
                warning: {
                    50: 'rgb(var(--color-warning-50) / <alpha-value>)',
                    100: 'rgb(var(--color-warning-100) / <alpha-value>)',
                    150: 'rgb(var(--color-warning-150) / <alpha-value>)'
                },
                info: {
                    50: 'rgb(var(--color-info-50) / <alpha-value>)',
                    100: 'rgb(var(--color-info-100) / <alpha-value>)',
                    150: 'rgb(var(--color-info-150) / <alpha-value>)'
                }
            },
            gridTemplateColumns: ({ theme }: PluginUtils) => {
                const spacing = theme('spacing');

                return Object.keys(spacing).reduce((accumulator, spacingKey) => {
                    return {
                        ...accumulator,
                        [`fit-${spacingKey}`]: `repeat(auto-fit, minmax(${spacing[spacingKey]}, 1fr))`
                    };
                }, {});
            }
        }
    },
    plugins: []
};
export default config;
