import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { MotionConfig } from "framer-motion";
import { ThemeProvider } from "@/components/ThemeProvider";
import { desktopLayoutBootScript } from "@/config/desktopLayout";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const studioSans = Inter({
  variable: "--font-studio",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Samarth S Rao",
  description: "Backend Developer | Engineer | Building Systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${studioSans.variable} antialiased selection:bg-black/10 dark:selection:bg-white/10 selection:text-black dark:selection:text-white bg-[var(--background)] text-[var(--foreground)] overflow-hidden h-screen w-screen`}
      >
        <script
          id="desktop-layout-boot"
          dangerouslySetInnerHTML={{ __html: desktopLayoutBootScript() }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <MotionConfig reducedMotion="user">
            {children}
          </MotionConfig>
        </ThemeProvider>
      </body>
    </html>
  );
}
