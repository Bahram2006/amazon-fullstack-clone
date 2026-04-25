"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "../../store/cartStore";
import { useAuthStore } from "../../store/authStore";

export default function Navbar() {
  const items = useCartStore((state) => state.items);

  const totalItems = items.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  return (
    <header className="w-full">
      {/* TOP NAV */}
      <div className="bg-[#131921] text-white">
        <div className="max-w-[1400px] mx-auto flex items-center gap-4 px-4 py-3">

          {/* LOGO */}
          <Link href="/" className="text-2xl font-bold hover:opacity-80">
            Amazon
          </Link>

          {/* SEARCH */}
          <div className="flex flex-1">
            <input
              type="text"
              placeholder="Search Amazon"
              className="w-full px-4 py-2 text-black outline-none rounded-l-md"
            />
            <button className="bg-yellow-400 hover:bg-yellow-500 px-4 text-black font-semibold rounded-r-md">
              Search
            </button>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-6 text-sm">

            {/* AUTH */}
            {user ? (
              <div
                onClick={logout}
                className="cursor-pointer leading-tight hover:opacity-80"
              >
                <p className="text-xs">Hello, {user.email}</p>
                <p className="font-bold">Sign out</p>
              </div>
            ) : (
              <Link
                href="/auth/login"
                className="leading-tight hover:opacity-80"
              >
                <p className="text-xs">Hello, sign in</p>
                <p className="font-bold">Account & Lists</p>
              </Link>
            )}

            {/* ORDERS (FIXED) */}
            <Link
              href="/orders"
              className="leading-tight hover:opacity-80"
            >
              <p className="text-xs">Returns</p>
              <p className="font-bold">& Orders</p>
            </Link>

            {/* CART */}
            <Link
              href="/cart"
              className="flex items-center gap-1 hover:opacity-80"
            >
              <ShoppingCart size={26} />
              <span className="font-bold">{totalItems}</span>
            </Link>

          </div>
        </div>
      </div>

      {/* BOTTOM NAV */}
      <div className="bg-[#232f3e] text-white text-sm">
        <div className="max-w-[1400px] mx-auto flex items-center gap-6 px-4 py-2">
          
          <p className="cursor-pointer font-semibold hover:underline">All</p>
          <p className="cursor-pointer hover:underline">Todays Deals</p>
          <p className="cursor-pointer hover:underline">Customer Service</p>
          <p className="cursor-pointer hover:underline">Registry</p>
          <p className="cursor-pointer hover:underline">Gift Cards</p>
          <p className="cursor-pointer hover:underline">Sell</p>

        </div>
      </div>
    </header>
  );
}