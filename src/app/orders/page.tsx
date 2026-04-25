"use client";

import { useOrderStore } from "../../store/orderStore";
import ProtectedRoute from "../../components/auth/ProtectedRoute";

export default function OrdersPage() {
  const orders = useOrderStore((state) => state.orders);

  return (
    <ProtectedRoute>
      <div className="bg-gray-100 min-h-screen p-6">
        <div className="max-w-[1000px] mx-auto">

          <h1 className="text-2xl font-bold mb-6">
            Your Orders
          </h1>

          {orders.length === 0 ? (
            <p>No orders yet</p>
          ) : (
            <div className="space-y-6">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="bg-white p-4 rounded-md shadow"
                >
                  <p className="text-sm text-gray-500 mb-2">
                    {order.date}
                  </p>

                  <p className="font-bold mb-2">
                    Total: ${order.total}
                  </p>

                  <div className="space-y-2">
                    {order.items.map((item, i) => (
                      <div
                        key={i}
                        className="flex justify-between text-sm"
                      >
                        <span>
                          {item.title} × {item.quantity}
                        </span>
                        <span>
                          ${item.price * item.quantity}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </ProtectedRoute>
  );
}