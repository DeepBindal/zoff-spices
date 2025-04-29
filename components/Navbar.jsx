import Link from "next/link";
import Image from "next/image";
import { User, ShoppingCartIcon, LogOut } from "lucide-react";
import QuickSearch from "./QuickSearch";
import { SignedIn, SignedOut, SignOutButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="">
      <div className="flex items-center justify-between px-10 py-5 relative border-b-[1px] border-gray-300">
        {/* Left side links */}
        <div className="flex gap-8">
          <Link
            href="/shop-all"
            className="hover:text-primary hover:underline transition"
          >
            Shop All
          </Link>
          <Link
            href="/about"
            className="hover:text-primary transition hover:underline"
          >
            About Us
          </Link>
          <Link
            href="/"
            className="hover:text-primary transition hover:underline"
          >
            Become a Partner
          </Link>
          <Link
            href="/blog"
            className="hover:text-primary transition hover:underline"
          >
            Blog
          </Link>
        </div>

        {/* Center logo */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Link href="/">
            <Image
              src="https://zofffoods.com/cdn/shop/files/image_1.png?v=1736009498&width=195"
              alt="logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Right side icons */}
        <div className="flex gap-6">
          <SignedIn>
            <Link href="/profile" className="hover:text-primary transition">
              <User size={24} />
            </Link>
          </SignedIn>
          <SignedOut>
            <Link href="/sign-in" className="hover:text-primary transition">
              <User size={24} />
            </Link>
          </SignedOut>
          <Link href="/cart" className="hover:text-primary transition">
            <ShoppingCartIcon size={24} />
          </Link>
          <SignedIn>
            <SignOutButton>
              <LogOut />
            </SignOutButton>
          </SignedIn>
        </div>
      </div>

      {/* QuickSearch below navbar */}
      <div className="px-10 pb-5">
        <QuickSearch />
      </div>
    </nav>
  );
}
