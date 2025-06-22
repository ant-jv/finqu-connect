"use client";

import { Product } from "@/types/product";

type Props = {
  product: Product;
  onChange: (updated: Product) => void;
};

export default function LocalizedTextInput({ product, onChange }: Props) {
  const localeKeys = Object.keys(product.locales);

  return (
    <>
      {localeKeys.map((locale) => (
        <div key={`name-${locale}`} className="mb-2">
          <div className="flex items-center">
            <span className="inline-flex items-center justify-center w-12">
              {locale.toUpperCase()}
            </span>
            <input
              className="flex-1 h-10 border border-gray-300 rounded-none focus:ring-2 focus:ring-white focus:border-white pl-2"
              type="text"
              id={`product-name-${locale}`}
              name={`product-name-${locale}`}
              value={product.locales[locale]?.name || ""}
              onChange={(e) =>
                onChange({
                  ...product,
                  locales: {
                    ...product.locales,
                    [locale]: {
                      ...product.locales[locale],
                      name: e.target.value,
                    },
                  },
                })
              }
            />
          </div>
        </div>
      ))}
    </>
  );
}
