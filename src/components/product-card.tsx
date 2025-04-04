import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`}>
      <Card className="h-full overflow-hidden transition-all duration-200 hover:shadow-md">
        <div className="aspect-square relative overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium px-2 py-1 bg-muted rounded-full">
              {product.category}
            </span>
            <span className="font-bold text-green-600">${product.price}</span>
          </div>
          <h3 className="font-semibold text-lg line-clamp-1">{product.name}</h3>
          <p className="text-muted-foreground text-sm line-clamp-2 mt-2">
            {product.description}
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between">
          <span className="text-sm text-muted-foreground">
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}
