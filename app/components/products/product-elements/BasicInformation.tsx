"use client";

import type { Product } from "@/types/product";
import InputWrapper from "../../layout/forms/inputs/InputWrapper";

type Props = {
  product: Product;
  onChange: (updated: Product) => void;
};

export default function BasicInformation({ product, onChange }: Props) {
  return (
    <InputWrapper product={product} type={"localized"} onChange={onChange} />
  );
}
