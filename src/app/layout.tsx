import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import ThemeProvider from "@/components/shell/ThemeProvider";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import Shell from "@/components/shell/Shell";

export const metadata: Metadata = {
  title: "Friday Jacob — AI Design Engineer",
  description:
    "Friday Jacob designs and ships product experiences — from healthcare and fintech apps to AI-native builds with live users.",
};

// Set the theme before first paint so there is no flash. Default is light.
const themeInit = `(function(){try{var t=localStorage.getItem('theme');if(t!=='dark'&&t!=='light'){t='light';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>
        <ThemeProvider>
          <SmoothScrollProvider>
            <Shell>{children}</Shell>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
