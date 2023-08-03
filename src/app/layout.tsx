import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import ResponsiveAppBar from "@/components/Header/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Material UI built with nextjs app router and typescript",
  description: "Material UI nextjs example",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>

             <ResponsiveAppBar />

             {children}

        </ThemeRegistry>
      </body>
    </html>
  );
}
