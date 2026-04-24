"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full">
      
      {/* TOP NAV */}
      <div className="bg-[#131921] text-white">
        <div className="max-w-[1400px] mx-auto flex items-center gap-4 px-4 py-3">
          
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            Amazon
          </Link>

          {/* Search */}
          <div className="flex flex-1">
            <input
              type="text"
              placeholder="Search Amazon"
              className="w-full px-4 py-2 text-black outline-none rounded-l-md"
            />
            <button className="bg-yellow-400 px-4 text-black font-semibold rounded-r-md">
              Search
            </button>
          </div>

          {/* Right */}
          <div className="flex items-center gap-6 text-sm">
            
            <div className="cursor-pointer leading-tight">
              <p className="text-xs">Hello, sign in</p>
              <p className="font-bold">Account & Lists</p>
            </div>

            <div className="cursor-pointer leading-tight">
              <p className="text-xs">Returns</p>
              <p className="font-bold">& Orders</p>
            </div>

            <div className="flex items-center gap-1 cursor-pointer">
              <ShoppingCart size={26} />
              <span className="font-bold">0</span>
            </div>

          </div>
        </div>
      </div>

      {/* BOTTOM NAV */}
      <div className="bg-[#232f3e] text-white text-sm">
        <div className="max-w-[1400px] mx-auto flex items-center gap-6 px-4 py-2">
          
          <p className="cursor-pointer font-semibold">All</p>
          <p className="cursor-pointer">Today Deals</p>
          <p className="cursor-pointer">Customer Service</p>
          <p className="cursor-pointer">Registry</p>
          <p className="cursor-pointer">Gift Cards</p>
          <p className="cursor-pointer">Sell</p>

        </div>
      </div>

    </header>
  );
}