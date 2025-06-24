"use client";

import type { Product } from "@/types/product";

type Props = {
  product: Product;
  onChange: (updated: Product) => void;
};

type LocalizedField =
  | "name"
  | "description"
  | "summary"
  | "seo_title"
  | "seo_description"
  | "seo_keywords"
  | "url_slug";

const fields: LocalizedField[] = ["name", "summary", "description"];

export default function BasicInformation({ product, onChange }: Props) {
  const localeKeys = Object.keys(product.locales);

  return (
    <div className="space-y-4">
      {fields.map((field) => (
        <div key={field} className="">
          <h3>{field}</h3>
          {localeKeys.map((localeKey) => (
            <div
              key={localeKey}
              className="flex items-center w-full relative mb-2"
            >
              <span className="absolute left-3 text-xs text-gray-500 font-medium uppercase">
                {localeKey}
              </span>
              <input
                type="text"
                className="w-full pl-10 pr-3 py-2 border rounded"
                placeholder={field}
                value={product.locales[localeKey]?.[field] || ""}
                onChange={(e) =>
                  onChange({
                    ...product,
                    locales: {
                      ...product.locales,
                      [localeKey]: {
                        ...product.locales[localeKey],
                        [field]: e.target.value,
                      },
                    },
                  })
                }
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
