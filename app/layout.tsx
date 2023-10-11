import "./styles/global.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
	metadataBase: new URL("https://tdb.fyi"),
	title: {
		default: "TDB - Like MacTracker, but for Tesla",
		template: "%s - Like MacTracker, but for Tesla",
	},
	description: "Like MacTracker, but for Tesla",
	openGraph: {
		title: "TDB",
		description: "Like MacTracker, but for Tesla",
		url: "https://tdb.fyi",
		siteName: "TDB",
		images: [
			{
				url: "https://tdb.fyi/og.png",
				width: 1920,
				height: 1080,
			},
		],
		locale: "en-US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "TDB",
		description: "Like MacTracker, but for Tesla",
        images: "https://tdb.fyi/og.png",
		card: "summary_large_image",
	},
	icons: {
		shortcut: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="hero">
			<head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="icon" href="/logo-square.svg" type="image/svg+xml" />
				<link rel="apple-touch-icon" href="/logo-square.png" />
			</head>
			<body className="antialiased flex flex-col justify-start items-center overflow-auto">
				{children}
				<div className="bg-blur w-screen h-screen opacity-0 md:opacity-15"></div>
				<Analytics />
			</body>
		</html>
	);
}
