"use client";

import Link from "next/link";
import { useCartStore } from "../../store/cartStore";

type Props = {
  id: string;
  title: string;
  price: number;
  image: string;
  rating: number;
};

export default function ProductCard({
  id,
  title,
  price,
  image,
  rating,
}: Props) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="bg-white p-4 rounded-md shadow hover:shadow-xl transition flex flex-col">
      
      {/* CLICKABLE AREA */}
      <Link href={`/product/${id}`} className="flex flex-col flex-1">
        
        {/* IMAGE */}
        <div className="h-48 flex items-center justify-center mb-4">
          <img
            src={image}
            alt={title}
            className="h-full object-contain"
          />
        </div>

        {/* TITLE */}
        <h2 className="text-sm font-medium mb-2 line-clamp-2">
          {title}
        </h2>

        {/* RATING */}
        <div className="flex mb-2">
          {Array.from({ length: rating }).map((_, i) => (
            <span key={i}>⭐</span>
          ))}
        </div>

        {/* PRICE */}
        <p className="font-bold text-lg mb-4">${price}</p>

      </Link>

      {/* BUTTON (OUTSIDE LINK) */}
      <button
        onClick={() => addToCart({ title, price, image })}
        className="mt-auto bg-yellow-400 hover:bg-yellow-500 py-2 rounded font-semibold"
      >
        Add to Cart
      </button>
    </div>
  );
}