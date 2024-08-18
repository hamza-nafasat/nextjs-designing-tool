import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Room } from "./Room";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "Figma Clone",
  description:
    "A minimalistic design tool using Fabric.js and Liveblocks for Realtime collaboration by Hamza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Room>
        <body className={`${workSans.className} bg-gray-800`}>{children}</body>
      </Room>
    </html>
  );
}
