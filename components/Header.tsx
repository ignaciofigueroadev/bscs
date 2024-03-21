import Link from "next/link";

export function Header() {
  return (
    <header className="py-5">
      <nav className="flex items-center justify-around">
        <div className="flex flex-col gap-1">
          <div className="h-0.5 w-5 bg-gray-900"></div>
          <div className="h-0.5 w-5 bg-gray-900"></div>
          <div className="h-0.5 w-5 bg-gray-900"></div>
        </div>
        <Link href={"/"} className="font-bold text-lg">
          BSSCS
        </Link>
        <p>Cart</p>
      </nav>
    </header>
  );
}
