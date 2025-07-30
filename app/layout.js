import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PrepPilot - AI Career Coach",
  description:
    "Advance your career with personalized guidance, interview prep, and AI-powered tools for professional success.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className=" min-h-screen">{children}</main>
            <Toaster richColors />
            <footer className="bg-muted/30 py-12 border-t">
              <div className="container mx-auto px-4 text-center space-y-2">
                <p className="text-muted-foreground">
                  © {new Date().getFullYear()} Preppilot. All rights reserved.
                </p>
                <p className="text-sm text-muted-foreground">
                  Designed and developed by Mihir · Accelerating careers with
                  intelligent guidance.
                </p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
