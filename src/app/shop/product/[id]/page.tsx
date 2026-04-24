"use client";

import { useParams } from "next/navigation";
import { useCartStore } from "../../../../store/cartStore";

const products = [
  {
    id: "1",
    title: "Wireless Headphones",
    price: 99,
    image: "https://via.placeholder.com/300",
  },
  {
    id: "2",
    title: "Smart Watch",
    price: 149,
    image: "https://via.placeholder.com/300",
  },
];

export default function ProductPage() {
  const params = useParams();
  const addToCart = useCartStore((state) => state.addToCart);

  const product = products.find((p) => p.id === params.id);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-[1200px] mx-auto bg-white p-6 rounded-md grid md:grid-cols-2 gap-6">

        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-80 object-contain"
          />
        </div>

        {/* INFO */}
        <div>
          <h1 className="text-2xl font-bold mb-4">{product.title}</h1>

          <p className="text-xl font-semibold mb-4">
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
            className="bg-yellow-400 hover:bg-yellow-500 px-6 py-2 rounded font-semibold"
          >
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
}