import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/whatsapp-button";
import { products } from "@/lib/data";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <main className="container mx-auto py-8 px-4">
      <Link
        href="/"
        className="inline-flex items-center mb-6 text-sm hover:underline"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to products
      </Link>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="space-y-6">
          <div>
            <span className="inline-block px-3 py-1 text-sm font-medium bg-muted rounded-full mb-2">
              {product.category}
            </span>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-2xl font-bold text-green-600 mt-2">
              ${product.price}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Description</h2>
            <p className="text-muted-foreground">{product.description}</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Specifications</h2>
            <ul className="space-y-2">
              {product.specs.map((spec, index) => (
                <li key={index} className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4">
            <p className="mb-4">
              <span
                className={
                  product.inStock
                    ? "text-green-600 font-medium"
                    : "text-red-600 font-medium"
                }
              >
                {product.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="w-full sm:w-auto" disabled={!product.inStock}>
                Add to Cart
              </Button>
              <WhatsAppButton product={product} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
