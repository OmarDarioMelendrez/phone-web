"use client";

import { useState } from "react";
import ProductCard from "@/components/product-card";
import ProductFilter from "@/components/product-filter";
import type { Product } from "@/lib/types";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories
  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterProducts(query, selectedCategory);
  };

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    filterProducts(searchQuery, category);
  };

  const filterProducts = (query: string, category: string | null) => {
    let filtered = products;

    // Filter by search query
    if (query) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Filter by category
    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="space-y-6">
      <ProductFilter
        categories={categories}
        onSearch={handleSearch}
        onCategoryChange={handleCategoryChange}
        selectedCategory={selectedCategory}
      />

      {filteredProducts.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-muted-foreground">
            No products found. Try adjusting your filters.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
