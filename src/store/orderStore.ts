import { create } from "zustand";
import { persist } from "zustand/middleware";

type OrderItem = {
  title: string;
  price: number;
  image: string;
  quantity: number;
};

type Order = {
  id: string;
  items: OrderItem[];
  total: number;
  date: string;
};

type OrderStore = {
  orders: Order[];
  addOrder: (order: Order) => void;
};

export const useOrderStore = create<OrderStore>()(
  persist(
    (set) => ({
      orders: [],

      addOrder: (order) =>
        set((state) => ({
          orders: [order, ...state.orders],
        })),
    }),
    {
      name: "order-storage",
    }
  )
);