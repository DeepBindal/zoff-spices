"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  User,
  ShoppingCartIcon,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import QuickSearch from "./QuickSearch";
import { SignedIn, SignedOut, SignOutButton } from "@clerk/nextjs";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b border-gray-300 bg-white z-50 relative">
      <div className="flex items-center justify-between px-4 md:px-10 py-5">
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Left Nav Links - hidden on mobile */}
        <div className="hidden md:flex gap-8 flex-1">
          <Link href="/shop-all" className="hover:text-primary hover:underline transition">
            Shop All
          </Link>
          <Link href="/about" className="hover:text-primary hover:underline transition">
            About Us
          </Link>
          <Link href="/" className="hover:text-primary hover:underline transition">
            Become a Partner
          </Link>
          <Link href="/blog" className="hover:text-primary hover:underline transition">
            Blog
          </Link>
        </div>

        {/* Center Logo */}
        <div className="flex justify-center flex-1">
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

        {/* Right Icons */}
        <div className="flex justify-end items-center gap-6 flex-1">
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

      {/* Mobile Nav Links */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white border-b border-gray-200">
          <Link href="/shop-all" className="block hover:text-primary">
            Shop All
          </Link>
          <Link href="/about" className="block hover:text-primary">
            About Us
          </Link>
          <Link href="/" className="block hover:text-primary">
            Become a Partner
          </Link>
          <Link href="/blog" className="block hover:text-primary">
            Blog
          </Link>
        </div>
      )}

      {/* QuickSearch below navbar */}
      <div className="px-4 md:px-10 pb-5">
        <QuickSearch />
      </div>
    </nav>
  );
}
