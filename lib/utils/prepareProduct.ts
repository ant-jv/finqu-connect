// lib/utils/prepareProduct.ts
// Special function to avoid 422 error if user has changed default lang in Finqu.
import type { Product } from "@/types/product";

export function prepareProductForSave(product: Product): Product {
  const updatedLocales = { ...product.locales };

  Object.entries(updatedLocales).forEach(([locale, fields]) => {
    if (fields) {
      if (!fields.seo_title && fields.name) {
        fields.seo_title = fields.name;
      }
      if (!fields.url_slug && fields.name) {
        fields.url_slug = fields.name
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^a-z0-9\-]/g, "")
          .replace(/\-+/g, "-")
          .replace(/^\-+|\-+$/g, "");
      }
      if (!fields.description && fields.name) {
        fields.description = "";
      }
      if (!fields.seo_description && fields.name) {
        fields.seo_description = "";
      }
      if (!fields.summary && fields.name) {
        fields.summary = "";
      }
      if (!fields.seo_keywords && fields.name) {
        fields.seo_keywords = "";
      }
    }
  });

  return {
    ...product,
    seo_keywords: product.seo_keywords ?? "",
    seo_description: product.seo_description ?? "",
    summary: product.summary ?? "",
    description: product.description ?? "",
    locales: updatedLocales,
  };
}
