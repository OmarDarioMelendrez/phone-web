"use client";

import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import type { Product } from "@/lib/types";

interface WhatsAppButtonProps {
  product: Product;
}

export default function WhatsAppButton({ product }: WhatsAppButtonProps) {
  const handleWhatsAppClick = () => {
    const phoneNumber = "1234567890"; // Replace with your actual WhatsApp number
    const message = encodeURIComponent(
      `Hello, I'm interested in the ${product.name} (ID: ${product.id}) priced at $${product.price}. Could you provide more information?`
    );

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <Button
      variant="outline"
      className="w-full sm:w-auto flex items-center gap-2"
      onClick={handleWhatsAppClick}
    >
      <MessageSquare className="h-4 w-4" />
      Contact via WhatsApp
    </Button>
  );
}
