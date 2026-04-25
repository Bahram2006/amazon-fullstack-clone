"use client";

import { useCartStore } from "../../store/cartStore";
import { useOrderStore } from "../../store/orderStore";
import ProtectedRoute from "../../components/auth/ProtectedRoute";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CheckoutPage() {
  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);

  const addOrder = useOrderStore((state) => state.addOrder);
  const router = useRouter();

  // FORM STATE
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  const totalItems = items.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleOrder = () => {
    if (!items.length || !name || !address || !city) return;

    addOrder({
      id: Date.now().toString(),
      items,
      total: totalPrice,
      date: new Date().toLocaleString(),
    });

    clearCart();

    router.push("/orders");
  };

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
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mb-3 px-3 py-2 border rounded"
            />

            <input
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full mb-3 px-3 py-2 border rounded"
            />

            <input
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full mb-3 px-3 py-2 border rounded"
            />
          </div>

          {/* RIGHT - SUMMARY */}
          <div className="bg-white p-4 rounded-md h-fit">
            <h2 className="text-lg font-bold mb-4">
              Order Summary
            </h2>

            <p className="mb-2">
              Items: {totalItems}
            </p>

            <p className="mb-4 font-bold">
              Total: ${totalPrice}
            </p>

            <button
              onClick={handleOrder}
              disabled={!items.length}
              className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-300 py-2 rounded font-semibold"
            >
              Place Order
            </button>
          </div>

        </div>
      </div>
    </ProtectedRoute>
  );
}