"use client";

import { useCartStore } from "../../store/cartStore";

export default function CartPage() {
  const items = useCartStore((state) => state.items);

  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* LEFT - ITEMS */}
        <div className="md:col-span-2 bg-white p-4 rounded-md">
          <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

          {items.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              {items.map((item, i) => (
                <div key={i} className="flex justify-between border-b pb-2">
                  <p>{item.title}</p>
                  <p className="font-semibold">${item.price}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT - SUMMARY */}
        <div className="bg-white p-4 rounded-md h-fit">
          <h2 className="text-lg font-bold mb-4">Subtotal</h2>

          <p className="mb-4">
            {items.length} items — <span className="font-bold">${total}</span>
          </p>

          <button className="w-full bg-yellow-400 py-2 rounded font-semibold">
            Proceed to Checkout
          </button>
        </div>

      </div>
    </div>
  );
}