"use client";

import type { Product } from "@/types/product";

type Props = {
  product: Product;
  onChange: (updated: Product) => void;
};

export default function BasicInformation({ product, onChange }: Props) {
  return (
    <div className="space-y-6">
      {Object.entries(product.locales).map(([localeKey, localeValue]) => (
        <div key={localeKey}>
          <div className="mb-1 text-sm font-medium">
            {localeKey.toUpperCase()}
          </div>

          <div className="flex flex-col gap-2">
            <input
              type="text"
              value={localeValue.name || ""}
              placeholder="Product name"
              className="w-full border px-3 py-2 rounded"
              onChange={(e) =>
                onChange({
                  ...product,
                  locales: {
                    ...product.locales,
                    [localeKey]: {
                      ...product.locales[localeKey],
                      name: e.target.value,
                    },
                  },
                })
              }
            />

            <input
              type="text"
              value={localeValue.description || ""}
              placeholder="Product description"
              className="w-full border px-3 py-2 rounded"
              onChange={(e) =>
                onChange({
                  ...product,
                  locales: {
                    ...product.locales,
                    [localeKey]: {
                      ...product.locales[localeKey],
                      description: e.target.value,
                    },
                  },
                })
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
}
