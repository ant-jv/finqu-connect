"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useProductStore } from "@/lib/stores/productStore";

export default function ProductList() {
  const { products, setProducts } = useProductStore();

  useEffect(() => {
    if (products.length === 0) {
      const fetchData = async () => {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/finqu/catalog?page=1&limit=50`
        );
        const data = await res.json();
        setProducts(data);
      };
      fetchData();
    }
  }, []);

  return (
    <>
      {products.length > 0 && (
        <ul className="divide-y divide-gray-200">
          {products.map((product: any) => {
            const cheapestVariant = product.variants?.[0];
            const basePrice = cheapestVariant?.price || 0;
            const taxRate = product.default_tax_rate || 0;
            const priceWithVat = basePrice * (1 + taxRate / 100);

            return (
              <li
                key={product.id}
                className="py-3 flex items-center justify-between hover:bg-gray-50"
              >
                <Link
                  href={`/dashboard/product/${product.id}`}
                  className="flex items-center justify-between w-full"
                >
                  <div className="flex items-center">
                    <span className="ml-3">{product.name}</span>
                  </div>
                  <span className="text-gray-600">
                    {new Intl.NumberFormat("fi-FI", {
                      style: "currency",
                      currency: "EUR",
                    }).format(priceWithVat)}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
