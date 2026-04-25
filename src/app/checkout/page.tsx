"use client";

import { useCartStore } from "../../store/cartStore";
import ProtectedRoute from "../../components/auth/ProtectedRoute";

export default function CheckoutPage() {
  const items = useCartStore((state) => state.items);

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <ProtectedRoute>
      <div className="bg-gray-100 min-h-screen p-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* LEFT - ADDRESS */}
          <div className="md:col-span-2 bg-white p-4 rounded-md">
            <h1 className="text-xl font-bold mb-4">
              Shipping Address
            </h1>

            <input
              placeholder="Full Name"
              className="w-full mb-3 px-3 py-2 border rounded"
            />
            <input
              placeholder="Address"
              className="w-full mb-3 px-3 py-2 border rounded"
            />
            <input
              placeholder="City"
              className="w-full mb-3 px-3 py-2 border rounded"
            />
          </div>

          {/* RIGHT - SUMMARY */}
          <div className="bg-white p-4 rounded-md h-fit">
            <h2 className="text-lg font-bold mb-4">
              Order Summary
            </h2>

            <p className="mb-2">
              Items: {items.length}
            </p>

            <p className="mb-4 font-bold">
              Total: ${total}
            </p>

            <button className="w-full bg-yellow-400 py-2 rounded font-semibold">
              Place Order
            </button>
          </div>

        </div>
      </div>
    </ProtectedRoute>
  );
}