import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { ClerkProvider, SignedIn } from "@clerk/nextjs";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import SideNavbar from "@/components/SideNavbar";
import { cn } from "@/lib/utils";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS Dashboard",
  description: "Created with ShadcnUI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn('min-h-screen w-full bg-white text-black dark:bg-[#313338] dark:text-white flex', font.className)}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            storageKey="dashboard-theme"
          >
            <SideNavbar />
            <div className="p-8 w-full">{children}</div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
