"use client";
import { useEffect, useState } from "react";
import BasicInformation from "./product-elements/BasicInformation";

type productId = string;

interface Product {
  name: string;
}

export default function Product(props: { productId: productId }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex gap-4">
        <div className="w-[60%] p-4">
          {product && <BasicInformation product={{ name: product.name }} />}
        </div>
        <div className="w-[40%] p-4">Testi oikea</div>
      </div>

      <pre>{JSON.stringify(product, null, 2)}</pre>
    </div>
  );
}
