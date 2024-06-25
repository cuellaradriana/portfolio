import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            boxShadow: {
                main: '0px 0px 30px 1px',
                second: '0px 0px 10px 0px',
            },
            colors: {
                dark: '#1C1C24',
                mainColor: '#26C99B',
                lightText: '#FAF3F0',
            },
        },
    },
    plugins: [],
};
export default config;
