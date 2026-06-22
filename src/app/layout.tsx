import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import GrainOverlay from "@/components/ui/GrainOverlay";
import PageTransition from "@/components/ui/PageTransition";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Friday Jacob — Designer & Builder",
  description:
    "I learned to design because someone needed help and I didn't know how. Eight years later I'm still solving that same problem — now with AI-powered systems and live users.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <SmoothScrollProvider>
          <GrainOverlay />
          <CustomCursor />
          <PageTransition />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
