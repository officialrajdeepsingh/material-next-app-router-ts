import "./globals.css";
import type { Metadata } from "next";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import ResponsiveAppBar from "@/components/Header/Header";

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
      <body>
        <ThemeRegistry>

             <ResponsiveAppBar />

             {children}

        </ThemeRegistry>
      </body>
    </html>
  );
}
