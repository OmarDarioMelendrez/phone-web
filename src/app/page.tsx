import ProductGrid from "@/components/product-grid";
import { products } from "@/lib/data";

export default function Home() {
  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Product Catalog</h1>
      <ProductGrid products={products} />
    </main>
  );
}
