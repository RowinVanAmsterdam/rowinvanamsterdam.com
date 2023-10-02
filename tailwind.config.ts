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
        // container: {
        //     padding: "1rem",
        //     center: true,
        // },
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
                primary: {
                    50: 'rgb(var(--color-primary-50) / <alpha-value>)',
                    100: 'rgb(var(--color-primary-100) / <alpha-value>)',
                    150: 'rgb(var(--color-primary-150) / <alpha-value>)'
                },
                secondary: {
                    50: 'rgb(var(--color-secondary-50) / <alpha-value>)',
                    100: 'rgb(var(--color-secondary-100) / <alpha-value>)',
                    150: 'rgb(var(--color-secondary-150) / <alpha-value>)'
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
