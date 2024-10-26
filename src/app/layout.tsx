/* eslint-disable @next/next/no-before-interactive-script-outside-document */
/* eslint-disable @next/next/inline-script-id */
import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Magic Clock",
    description: "Magic Clock created by reddiedev"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
            <Script src="https://analytics.reddie.dev/script.js" data-website-id="2f786f73-0edb-4b7b-969c-6434cb306aa0" />
        </html>
    );
}
