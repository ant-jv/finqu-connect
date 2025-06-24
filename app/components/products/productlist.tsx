"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useProductStore } from "@/lib/stores/productStore";
import ListItem from "../layout/ListItem";

export default function ProductList() {
  const { products, setProducts } = useProductStore();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (products.length === 0) {
      const fetchData = async () => {
        setLoading(true);
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/finqu/catalog?page=1&limit=50`
        );
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      };
      fetchData();
    }
  }, []);

  if (loading) {
    return <p className="text-gray-600 px-4 py-6">Loading products...</p>;
  }

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
              <ListItem
                key={product.id}
                href={`/dashboard/product/${product.id}`}
                title={product.name}
                rightContent={new Intl.NumberFormat("fi-FI", {
                  style: "currency",
                  currency: "EUR",
                }).format(priceWithVat)}
              />
            );
          })}
        </ul>
      )}
    </>
  );
}
