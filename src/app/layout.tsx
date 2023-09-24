"use client";

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
            <Script src="https://analytics.eu.umami.is/script.js" data-website-id="a53ba819-c0ea-4053-8fff-aeca8b651253" data-domains="clock.reddie.dev" />
        </html>
    );
}
