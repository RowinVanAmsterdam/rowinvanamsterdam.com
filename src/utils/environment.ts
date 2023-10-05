export const environment = {
    isServer: typeof window === 'undefined',
    isClient: typeof window !== 'undefined',
    isDevelopment: process.env.NODE_ENV === 'development',
    isProduction: process.env.NODE_ENV === 'production',
};