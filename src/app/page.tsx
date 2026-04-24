import ProductCard from "../components/home/ProductCard";
import Hero from "../components/home/Hero";

const products = [
  {
    id: "1",
    title: "Wireless Headphones",
    price: 99,
    image: "https://via.placeholder.com/200",
    rating: 4,
  },
  {
    id: "2",
    title: "Smart Watch",
    price: 149,
    image: "https://via.placeholder.com/200",
    rating: 5,
  },
  {
    id: "3",
    title: "Laptop Stand",
    price: 39,
    image: "https://via.placeholder.com/200",
    rating: 3,
  },
  {
    id: "4",
    title: "Gaming Mouse",
    price: 59,
    image: "https://via.placeholder.com/200",
    rating: 4,
  },
];

export default function Home() {
  return (
    <div className="space-y-6">

      <Hero />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, i) => (
          <ProductCard key={i} {...product} />
        ))}
      </div>

    </div>
  );
}