"use client";

import { useParams } from "next/navigation";
import { useCartStore } from "../../../../store/cartStore";

const products = [
  {
    id: "1",
    title: "Wireless Headphones",
    price: 99,
    image: "https://via.placeholder.com/300",
    rating: 4,
    description:
      "High quality wireless headphones with noise cancellation and long battery life.",
  },
  {
    id: "2",
    title: "Smart Watch",
    price: 149,
    image: "https://via.placeholder.com/300",
    rating: 5,
    description:
      "Track your fitness, heart rate, and notifications with this smart watch.",
  },
];

export default function ProductPage() {
  const params = useParams();
  const addToCart = useCartStore((state) => state.addToCart);

  const product = products.find((p) => p.id === params.id);

  if (!product) return <p className="p-6">Product not found</p>;

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-[1200px] mx-auto bg-white p-6 rounded-md grid md:grid-cols-3 gap-6">

        {/* IMAGE */}
        <div className="md:col-span-1 flex justify-center items-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-80 object-contain"
          />
        </div>

        {/* INFO */}
        <div className="md:col-span-1">
          <h1 className="text-2xl font-bold mb-3">
            {product.title}
          </h1>

          {/* Rating */}
          <div className="flex mb-3">
            {Array.from({ length: product.rating }).map((_, i) => (
              <span key={i}>⭐</span>
            ))}
          </div>

          {/* Price */}
          <p className="text-xl font-semibold text-red-600 mb-4">
            ${product.price}
          </p>

          {/* Description */}
          <p className="text-sm text-gray-700">
            {product.description}
          </p>
        </div>

        {/* BUY BOX */}
        <div className="border p-4 rounded-md h-fit">
          <p className="text-lg font-bold mb-4">
            ${product.price}
          </p>

          <button
            onClick={() =>
              addToCart({
                title: product.title,
                price: product.price,
                image: product.image,
              })
            }
            className="w-full bg-yellow-400 hover:bg-yellow-500 py-2 rounded font-semibold mb-2"
          >
            Add to Cart
          </button>

          <button className="w-full bg-orange-400 hover:bg-orange-500 py-2 rounded font-semibold">
            Buy Now
          </button>
        </div>

      </div>
    </div>
  );
}