import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Personal Blog",
  description: "Minimalist personal blog built with Next.js and MDX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          
          <footer className="mt-20 py-8 border-t border-border text-sm text-muted-foreground">
            <div className="max-w-2xl mx-auto px-6 flex justify-between items-center">
              <p>© {new Date().getFullYear()} Personal Blog.</p>
              <p>Built with Next.js</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
