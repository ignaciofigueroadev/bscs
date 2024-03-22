// Next
import Link from "next/link";

// Icons
import { Bars3Icon, ShoppingCartIcon } from "@heroicons/react/24/outline";

export function Header() {
  return (
    <header className="py-5">
      <nav className="flex items-center justify-between">
        <Bars3Icon className="w-6 h-6" />
        <Link href={"/"} className="font-bold text-lg">
          BSCS
        </Link>
        <Link href={"/cart"}>
          <ShoppingCartIcon className="w-6 h-6" />
        </Link>
      </nav>
    </header>
  );
}
