"use client";
import { useEffect, useState } from "react";
import BasicInformation from "./product-elements/BasicInformation";
import type { Product } from "@/types/product";
import ProductSkeleton from "./ProductSkeleton";
import { HeaderActions } from "../layout/HeaderActions";

type productId = string;

export default function Product(props: { productId: productId }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const saveProduct = async () => {
    setIsSaving(true);

    try {
      const res = await fetch("/api/save-product", {
        method: "POST",
        body: JSON.stringify({
          /* data */
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) throw new Error("Failed to save");
      // maybe redirect or show success
    } catch (error) {
      console.error("Save failed", error);
    } finally {
      setTimeout(() => {
        setIsSaving(false);
      }, 2000);
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
        console.log("TESTIÄ 2", data);
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
            backHref="/dashboard/catalog"
            onSave={saveProduct}
            isSaving={isSaving}
          />
          <BasicInformation product={{ name: product.name }} />
          {/*<pre>{JSON.stringify(product, null, 2)}</pre>*/}
        </>
      )}
    </div>
  );
}
