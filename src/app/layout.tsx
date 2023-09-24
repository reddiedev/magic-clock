/* eslint-disable @next/next/no-before-interactive-script-outside-document */
/* eslint-disable @next/next/inline-script-id */
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "MagicClock",
    description: "Magic Clock created by reddiedev"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
            <Script src="https://analytics.eu.umami.is/script.js" data-website-id="a53ba819-c0ea-4053-8fff-aeca8b651253" data-domains="clock.reddie.dev" />
        </html>
    );
}
