// Components
import { Header } from "@/components/Header";

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
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
