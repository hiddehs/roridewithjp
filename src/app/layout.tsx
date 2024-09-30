import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const wild = localFont({
  src: "./fonts/Wilden.otf",
  variable: "--font-wild",
});

export const metadata: Metadata = {
  title: "Roride With JP | Rocycle",
  description: "A rocycle workout with your lovely instructor, JP! Featuring the best music!",
  openGraph: {
    title: "Roride With JP | Rocycle",
    description: "A rocycle workout with your lovely instructor, JP! Featuring the best music!",
    type: "website",
    url: "https://roridewithjp.rocycle.co/",
    images: [
      {
        url: "/assets/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Roride With JP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roride With JP | Rocycle",
    description: "A Killer Workout with your lovely instructor, JP! Featuring the best music!",
    images: ["/assets/thumbnail.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${wild.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}