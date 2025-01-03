/* eslint-disable @next/next/no-before-interactive-script-outside-document */
/* eslint-disable @next/next/inline-script-id */
import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Magic Clock",
    description: "Magic Clock created by reddiedev",
    icons: {
        icon: "/favicon.ico"
    }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
            <Script src="https://analytics.reddie.dev/script.js" data-website-id="81fea3a1-4f89-42ce-adc3-8f713367c1f1" />
        </html>
    );
}
