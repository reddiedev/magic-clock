import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            dropShadow: {
                glow: ["0 0px 3px rgba(255,255, 255, 0.8)", "0 0px 10px rgba(255, 255,255, 0.3)"]
            }
        }
    },
    plugins: []
};
export default config;
