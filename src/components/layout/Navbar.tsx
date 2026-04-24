"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-[#131921] text-white">
      <div className="max-w-[1400px] mx-auto flex items-center gap-4 px-4 py-3">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Amazon
        </Link>

        {/* Search */}
        <div className="flex flex-1">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 text-black outline-none"
          />
          <button className="bg-yellow-400 px-4 text-black font-semibold">
            Search
          </button>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-6 text-sm">
          
          <div className="cursor-pointer">
            <p className="text-xs">Hello, sign in</p>
            <p className="font-bold">Account</p>
          </div>

          <div className="cursor-pointer">
            <p className="text-xs">Returns</p>
            <p className="font-bold">& Orders</p>
          </div>

          <div className="flex items-center gap-1 cursor-pointer">
            <ShoppingCart size={24} />
            <span className="font-bold">0</span>
          </div>

        </div>
      </div>
    </header>
  );
}