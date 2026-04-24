import { create } from "zustand";

type Product = {
  title: string;
  price: number;
  image: string;
};

type CartStore = {
  items: Product[];
  addToCart: (product: Product) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  addToCart: (product) =>
    set((state) => ({
      items: [...state.items, product],
    })),
}));