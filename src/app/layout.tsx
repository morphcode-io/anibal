import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";

import "./globals.css";
import MainLayout from "@/components/layout/main";
import { Provider } from "./provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aníbal Laura - Homepage",
  description: "I'm Aníbal Laura, a software Engineer, welcome to my personal website.",
};

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
}
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Provider>
          <MainLayout>
            {children}
          </MainLayout>
        </Provider>
      </body>
    </html>
  );
}
