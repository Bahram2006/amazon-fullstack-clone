import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartItem = {
  title: string;
  price: number;
  image: string;
  quantity: number;
};

type CartStore = {
  items: CartItem[];

  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (index: number) => void;
  increaseQty: (index: number) => void;
  decreaseQty: (index: number) => void;

  clearCart: () => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],

      addToCart: (item) =>
        set((state) => {
          const existing = state.items.find(
            (i) => i.title === item.title
          );

          if (existing) {
            return {
              items: state.items.map((i) =>
                i.title === item.title
                  ? { ...i, quantity: i.quantity + 1 }
                  : i
              ),
            };
          }

          return {
            items: [...state.items, { ...item, quantity: 1 }],
          };
        }),

      removeFromCart: (index) =>
        set((state) => ({
          items: state.items.filter((_, i) => i !== index),
        })),

      increaseQty: (index) =>
        set((state) => ({
          items: state.items.map((item, i) =>
            i === index
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        })),

      decreaseQty: (index) =>
        set((state) => ({
          items: state.items
            .map((item, i) =>
              i === index
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter((item) => item.quantity > 0),
        })),

      clearCart: () =>
        set({
          items: [],
        }),
    }),
    {
      name: "cart-storage",
    }
  )
);