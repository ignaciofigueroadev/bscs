// Font
import { glory } from "@/font/glory";

// Styles
import "./globals.css";

// Metadata
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "BSCS",
  description: "Conocé los mejores básicos de Argentina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${glory.className} container mx-auto max-w-9xl`}>
        {children}
      </body>
    </html>
  );
}
