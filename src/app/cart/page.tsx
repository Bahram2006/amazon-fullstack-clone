"use client";

import Link from "next/link";
import { useCartStore } from "../../store/cartStore";
import ProtectedRoute from "../../components/auth/ProtectedRoute";

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const increaseQty = useCartStore((state) => state.increaseQty);
  const decreaseQty = useCartStore((state) => state.decreaseQty);

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <ProtectedRoute>
      <div className="bg-gray-100 min-h-screen p-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* LEFT */}
          <div className="md:col-span-2 bg-white p-4 rounded-md">
            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

            {items.length === 0 ? (
              <div className="text-center py-10">
                <p className="mb-4 text-gray-600">Your cart is empty 🛒</p>
                <Link href="/" className="text-blue-600 hover:underline">
                  Go back to shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center border-b pb-4"
                  >
                    {/* LEFT INFO */}
                    <div>
                      <p className="font-medium">{item.title}</p>

                      {/* QUANTITY */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => decreaseQty(i)}
                          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                        >
                          -
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          onClick={() => increaseQty(i)}
                          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>

                      {/* REMOVE */}
                      <button
                        onClick={() => removeFromCart(i)}
                        className="text-red-500 text-sm mt-2 hover:underline"
                      >
                        Remove
                      </button>
                    </div>

                    {/* PRICE */}
                    <p className="font-semibold">
                      ${item.price * item.quantity}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT */}
          <div className="bg-white p-4 rounded-md h-fit">
            <h2 className="text-lg font-bold mb-4">Subtotal</h2>

            <p className="mb-4">
              {totalItems} items —{" "}
              <span className="font-bold">${totalPrice}</span>
            </p>

            {items.length > 0 && (
              <Link href="/checkout">
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 py-2 rounded font-semibold">
                  Proceed to Checkout
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
