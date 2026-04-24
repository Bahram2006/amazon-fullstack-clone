import { create } from "zustand";

type Product = {
  title: string;
  price: number;
  image: string;
  quantity: number;
};

type CartStore = {
  items: Product[];
  addToCart: (product: Omit<Product, "quantity">) => void;
  removeFromCart: (index: number) => void;
  increaseQty: (index: number) => void;
  decreaseQty: (index: number) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  items: [],

  addToCart: (product) =>
    set((state) => {
      const existing = state.items.find(
        (item) => item.title === product.title
      );

      if (existing) {
        return {
          items: state.items.map((item) =>
            item.title === product.title
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        items: [...state.items, { ...product, quantity: 1 }],
      };
    }),

  removeFromCart: (index) =>
    set((state) => ({
      items: state.items.filter((_, i) => i !== index),
    })),

  increaseQty: (index) =>
    set((state) => ({
      items: state.items.map((item, i) =>
        i === index ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),

  decreaseQty: (index) =>
    set((state) => ({
      items: state.items
        .map((item, i) =>
          i === index ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0),
    })),
}));