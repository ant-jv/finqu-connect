"use client";

import LocalizedTextInput from "./LocalizedTextInput";
import { Product } from "@/types/product";

type Props = {
  product: Product;
  type: string;
  onChange: (updated: Product) => void;
};

export default function InputWrapper(props: Props) {
  switch (props.type) {
    case "localized":
      return (
        <LocalizedTextInput product={props.product} onChange={props.onChange} />
      );
    case "currency":
      return null;
    case "percentage":
      return null;
    default:
      return null;
  }
}
