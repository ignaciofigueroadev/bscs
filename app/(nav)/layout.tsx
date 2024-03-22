import { Header } from "@/components/Header";

export default function CartLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="container mx-auto max-w-9xl">
        <Header />
        {children}
      </body>
    </html>
  );
}
