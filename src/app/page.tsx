import Hero from "../components/home/Hero";
import ProductCard from "../components/home/ProductCard";

export default function Home() {
  return (
    <div className="space-y-6">

      {/* Hero */}
      <Hero />

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard title="Product 1" price={29} />
        <ProductCard title="Product 2" price={59} />
        <ProductCard title="Product 3" price={99} />
        <ProductCard title="Product 4" price={120} />
      </div>

    </div>
  );
}