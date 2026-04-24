import { useCartStore } from "../../store/cartStore";

const addToCart = useCartStore((state) => state.addToCart);

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
  return (
    <div className="bg-white p-4 rounded-md shadow hover:shadow-xl transition flex flex-col">
      
      {/* Image */}
      <div className="h-48 flex items-center justify-center mb-4">
        <img
          src={image}
          alt={title}
          className="h-full object-contain"
        />
      </div>

      {/* Title */}
      <h2 className="text-sm font-medium mb-2 line-clamp-2">
        {title}
      </h2>

      {/* Rating */}
      <div className="flex items-center mb-2">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i}>⭐</span>
        ))}
      </div>

      {/* Price */}
      <p className="font-bold text-lg mb-4">${price}</p>

      {/* Button */}
      <button
  onClick={() => addToCart({ title, price, image })}
  className="mt-auto bg-yellow-400 hover:bg-yellow-500 text-sm py-2 rounded"
>
  Add to Cart
</button>
    </div>
  );
}