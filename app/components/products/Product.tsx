"use client";
import { useEffect, useState } from "react";
import BasicInformation from "./product-elements/BasicInformation";
import type { Product } from "@/types/product";
import { HeaderActions } from "../layout/HeaderActions";

import { useProductStore } from "@/lib/stores/productStore";
import { prepareProductForSave } from "@/lib/utils/prepareProduct";

type productId = string;

export default function Product(props: { productId: productId }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const { updateProduct } = useProductStore();

  const saveProduct = async () => {
    setIsSaving(true);

    try {
      if (!product) return;

      //Special thing to avoid 422 error if user has changed default lang in Finqu.
      const productToSave = prepareProductForSave(product);
      setProduct(productToSave);

      const res = await fetch(
        `/api/finqu/catalog/product/update/${props.productId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(productToSave),
        }
      );

      if (!res.ok) throw new Error("Failed to save");

      const savedProduct: Product = await res.json();
      updateProduct(savedProduct);
    } catch (error) {
      console.error("Save failed", error);
    } finally {
      setIsSaving(false);
    }
  };

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
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

  return (
    <div className="max-w-[800px]">
      <>
        <HeaderActions
          backHref="/dashboard/products"
          onSave={saveProduct}
          isSaving={isSaving}
        />
        {loading ? (
          <div>Loading...</div>
        ) : (
          product && (
            <>
              <h2 className="text-md font-semibold mb-2">
                Name and description
              </h2>
              <BasicInformation product={product} onChange={setProduct} />
              <pre>{JSON.stringify(product, null, 2)}</pre>
            </>
          )
        )}
      </>
    </div>
  );
}
