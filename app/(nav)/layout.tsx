// Components
import { Header } from "@/components/Header";

// Font
import { glory } from "@/font/glory";

export default function CartLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`container mx-auto max-w-9xl ${glory.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
