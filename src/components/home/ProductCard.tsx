"use client";

import { useCartStore } from "../../store/cartStore";
import Link from "next/link";

type Props = {
  title: string;
  price: number;
  image: string;
  rating: number;
};

export default function ProductCard({
  title,
  price,
  image,
  rating,
}: Props) {
  const addToCart = useCartStore((state) => state.addToCart); // ✅ IÇINDE

  return (
    <div className="bg-white p-4 rounded-md shadow hover:shadow-xl transition flex flex-col">
      
      <div className="h-48 flex items-center justify-center mb-4">
        <img src={image} alt={title} className="h-full object-contain" />
      </div>

      <h2 className="text-sm font-medium mb-2">{title}</h2>

      <div className="flex mb-2">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i}>⭐</span>
        ))}
      </div>

      <p className="font-bold text-lg mb-4">${price}</p>

      <button
        onClick={() => addToCart({ title, price, image })}
        className="mt-auto bg-yellow-400 hover:bg-yellow-500 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}