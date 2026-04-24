type Props = {
  title: string;
  price: number;
};

export default function ProductCard({ title, price }: Props) {
  return (
    <div className="bg-white p-4 shadow hover:shadow-lg transition rounded-md">
      <div className="h-40 bg-gray-200 mb-4" />

      <h2 className="font-semibold text-sm mb-2">{title}</h2>
      <p className="font-bold mb-4">${price}</p>

      <button className="bg-yellow-400 w-full py-2 text-sm font-semibold">
        Add to Cart
      </button>
    </div>
  );
}