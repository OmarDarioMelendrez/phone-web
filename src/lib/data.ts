import type { Product } from "./types";

export const products: Product[] = [
  {
    id: "phone-1",
    name: "Galaxy S23 Ultra",
    description:
      "Experience the ultimate smartphone with a powerful camera system, S Pen functionality, and a stunning 6.8-inch Dynamic AMOLED display. The Galaxy S23 Ultra features a 200MP main camera, 12GB RAM, and a 5000mAh battery for all-day performance.",
    price: 1199.99,
    category: "Smartphones",
    image:
      "https://tiendaonline.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/s/2/s25-ultra-titaniumblack-device.png",
    inStock: true,
    specs: [
      "6.8-inch Dynamic AMOLED 2X display",
      "200MP main camera",
      "12GB RAM, up to 1TB storage",
      "5000mAh battery",
      "S Pen included",
    ],
  },
  {
    id: "phone-2",
    name: "iPhone 15 Pro Max",
    description:
      "The most advanced iPhone ever with a titanium design, A17 Pro chip, and a sophisticated camera system. The iPhone 15 Pro Max offers incredible performance, a stunning Super Retina XDR display, and all-day battery life.",
    price: 1299.99,
    category: "Smartphones",
    image:
      "https://tiendaonline.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/s/2/s25-ultra-titaniumblack-device.png",
    inStock: true,
    specs: [
      "6.7-inch Super Retina XDR display",
      "48MP main camera with 5x optical zoom",
      "A17 Pro chip",
      "Titanium design",
      "Up to 1TB storage",
    ],
  },
  {
    id: "phone-3",
    name: "Pixel 8 Pro",
    description:
      "Google's flagship phone with the most advanced AI features and an exceptional camera system. The Pixel 8 Pro features a 50MP main camera with enhanced night sight, a smooth 120Hz display, and the powerful Tensor G3 chip.",
    price: 999.99,
    category: "Smartphones",
    image:
      "https://tiendaonline.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/s/2/s25-ultra-titaniumblack-device.png",
    inStock: true,
    specs: [
      "6.7-inch LTPO OLED display, 120Hz",
      "50MP main camera with enhanced night sight",
      "Google Tensor G3 chip",
      "12GB RAM, up to 512GB storage",
      "5000mAh battery",
    ],
  },
  {
    id: "tablet-1",
    name: "iPad Pro M2",
    description:
      "The ultimate iPad experience with the powerful M2 chip, stunning Liquid Retina XDR display, and pro-level features. Perfect for creative professionals, gamers, and anyone who wants the most powerful tablet available.",
    price: 1099.99,
    category: "Tablets",
    image:
      "https://tiendaonline.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/s/2/s25-ultra-titaniumblack-device.png",
    inStock: true,
    specs: [
      "12.9-inch Liquid Retina XDR display",
      "Apple M2 chip",
      "Up to 2TB storage",
      "Thunderbolt/USB 4 port",
      "Compatible with Apple Pencil and Magic Keyboard",
    ],
  },
  {
    id: "tablet-2",
    name: "Galaxy Tab S9 Ultra",
    description:
      "Samsung's premium tablet with a massive 14.6-inch AMOLED display, Snapdragon 8 Gen 2 processor, and S Pen included. Perfect for productivity, entertainment, and creative work with its expansive screen and powerful performance.",
    price: 1199.99,
    category: "Tablets",
    image:
      "https://tiendaonline.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/s/2/s25-ultra-titaniumblack-device.png",
    inStock: false,
    specs: [
      "14.6-inch Dynamic AMOLED 2X display, 120Hz",
      "Snapdragon 8 Gen 2 processor",
      "16GB RAM, up to 1TB storage",
      "11200mAh battery",
      "S Pen included",
    ],
  },
  {
    id: "laptop-1",
    name: "MacBook Pro 16",
    description:
      "Apple's most powerful laptop with M3 Pro or M3 Max chip, stunning Liquid Retina XDR display, and exceptional battery life. Designed for professionals who need the ultimate performance for demanding workloads.",
    price: 2499.99,
    category: "Laptops",
    image:
      "https://tiendaonline.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/s/2/s25-ultra-titaniumblack-device.png",
    inStock: true,
    specs: [
      "16-inch Liquid Retina XDR display",
      "Apple M3 Pro or M3 Max chip",
      "Up to 96GB unified memory",
      "Up to 8TB SSD storage",
      "Up to 22 hours of battery life",
    ],
  },
  {
    id: "laptop-2",
    name: "Dell XPS 15",
    description:
      "A premium Windows laptop with a stunning 15.6-inch OLED display, powerful Intel Core i9 processor, and NVIDIA RTX graphics. Perfect for content creators, professionals, and anyone who wants a high-performance Windows machine.",
    price: 1999.99,
    category: "Laptops",
    image:
      "https://tiendaonline.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/s/2/s25-ultra-titaniumblack-device.png",
    inStock: true,
    specs: [
      "15.6-inch 3.5K OLED display",
      "Intel Core i9 processor",
      "NVIDIA GeForce RTX 4070",
      "32GB RAM, 1TB SSD",
      "CNC aluminum chassis",
    ],
  },
  {
    id: "watch-1",
    name: "Apple Watch Ultra 2",
    description:
      "The most rugged and capable Apple Watch with a titanium case, precision dual-frequency GPS, and up to 36 hours of battery life. Designed for athletes, adventurers, and outdoor enthusiasts.",
    price: 799.99,
    category: "Wearables",
    image:
      "https://tiendaonline.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/s/2/s25-ultra-titaniumblack-device.png",
    inStock: true,
    specs: [
      "49mm titanium case",
      "Always-On Retina display, up to 3000 nits",
      "Water resistant to 100m",
      "Precision dual-frequency GPS",
      "Up to 36 hours of battery life",
    ],
  },
];
