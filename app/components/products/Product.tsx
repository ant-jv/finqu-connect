"use client";
import { useEffect, useState } from "react";
import BasicInformation from "./product-elements/BasicInformation";
import type { Product } from "@/types/product";
import ProductSkeleton from "./ProductSkeleton";
import { HeaderActions } from "../layout/HeaderActions";

import { useProductStore } from "@/lib/stores/productStore";

type productId = string;

export default function Product(props: { productId: productId }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const { updateProduct } = useProductStore();

  const saveProduct = async () => {
    setIsSaving(true);

    try {
      const res = await fetch(
        `/api/finqu/catalog/product/update/${props.productId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(product),
        }
      );

      if (!res.ok) throw new Error("Failed to save");

      const updatedProduct: Product = await res.json();

      updateProduct(updatedProduct); // Update in global state

      // maybe redirect or show success
    } catch (error) {
      console.error("Save failed", error);
    } finally {
      setIsSaving(false);
    }
  };

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/finqu/catalog/product/${props.productId}`
        );
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [props.productId]);

  return loading ? (
    <ProductSkeleton />
  ) : (
    <div className="max-w-[800px]">
      {product && (
        <>
          <HeaderActions
            backHref="/dashboard/products"
            onSave={saveProduct}
            isSaving={isSaving}
          />
          <h2 className="text-md font-semibold mb-2">Name and description</h2>
          <BasicInformation product={product} onChange={setProduct} />
          {<pre>{JSON.stringify(product, null, 2)}</pre>}
        </>
      )}
    </div>
  );
}
