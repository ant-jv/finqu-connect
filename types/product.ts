// Product.ts

export interface Product {
  id: number;
  type: string;
  status: string;
  name: string;
  summary: string;
  description: string;
  seo_title: string;
  seo_description: string;
  seo_keywords: string;
  url_slug: string;
  tax_class_id: number;
  default_tax_rate: number;
  manufacturer_id: number | null;
  delivery_time_id: number | null;
  deliverer_id: number | null;
  sales_margin_id: number | null;
  default_sales_margin: number | null;
  return_policy_id: number | null;
  reviews: Review;
  taxonomy: Taxonomy;
  flag: string | null;
  tags: string[];
  notes: string | null;
  is_directly_purchasable: boolean;
  is_archived: boolean;
  is_combined_listing_parent: boolean;
  media: Media[];
  variants: Variant[];
  options: ProductOption[];
  custom_fields: CustomField[];
  attachments: Attachment[];
  combined_listing: CombinedListing;
  locales: Record<string, ProductLocale>;
  exceptions: ProductExceptions;
  created_at: string;
  updated_at: string;
}

// Nested Interfaces
interface Review {
  rating: number;
  max_rating: number;
  count: number;
}

interface Taxonomy {
  category: TaxonomyCategory | null;
  attributes: TaxonomyAttribute[];
}

interface TaxonomyCategory {
  id: number;
  shopify_id: string;
  google_id: string;
  name: string;
  full_name: string;
  ancestors: any[];
  child_count: number;
  attributes: any[];
  created_at: string;
  updated_at: string;
  locales: Record<string, LocalizedCategory>;
}

interface LocalizedCategory {
  name: string;
  full_name: string;
}

interface TaxonomyAttribute {
  id: number;
  handle: string;
  shopify_id: string;
  name: string;
  type: string;
  created_at: string;
  updated_at: string;
  locales: Record<string, LocalizedName>;
  values: TaxonomyValue[];
}

interface TaxonomyValue {
  id: number;
  shopify_id: string;
  handle: string;
  name: string;
  is_custom: boolean;
  colors: (string | null)[];
  created_at: string;
  updated_at: string;
  locales: Record<string, LocalizedName>;
}

interface LocalizedName {
  name: string;
}

interface Media {
  id: number;
  file: MediaFile;
}

interface MediaFile {
  id: number;
  type: string;
  host_provider: string;
  file_name: string;
  url: string;
  url_with_modifications: string | null;
  modifications: any[];
  thumbnail: MediaThumbnail;
  title: string | null;
  description: string | null;
  width: number;
  height: number;
  aspect_ratio: string;
  orientation: string;
  file_size: number;
  mime_type: string;
  tags: string[];
  is_ai_processed: boolean | null;
  location: string | null;
  locales: Record<string, { title: string | null; description: string | null }>;
  product_count: number;
  parent: string | null;
  created_at: string;
  updated_at: string;
}

interface MediaThumbnail {
  url: string;
  sizes: Record<"1x" | "2x" | "3x", MediaSizeSet>;
}

interface MediaSizeSet {
  icon: string;
  thumb: string;
  small: string;
  medium: string;
  large: string;
}

interface Variant {
  id: number;
  product_id: number;
  status: string;
  name: string;
  options: Record<string, string>;
  product_number: string;
  gtin: string;
  image: { file: MediaFile };
  units: {
    weight: string;
    measure: string;
    sell: string;
  };
  min_quantity: number;
  max_quantity: number | null;
  measurements: {
    length: number;
    width: number;
    height: number;
  };
  weight: number;
  price: number;
  tax_free_purchase_price: number;
  discount_percentage: number | null;
  discounts: any[];
  bulk_rate: any[];
  customizations: Customization[];
  reviews: Review;
  is_discontinued: boolean;
  is_inventory_managed: boolean;
  is_default: boolean;
  shipping_info: ShippingInfo;
  created_at: string;
  updated_at: string;
}

interface Customization {
  id: number;
  sort_order: number;
  name: string;
  inventory_management: boolean;
  is_inventory_management_available: boolean;
  options: CustomizationOption[];
}

interface CustomizationOption {
  id: number;
  name: string;
  path_name: string[];
  price: number;
  image: string | null;
  has_inventory: boolean;
  has_children: boolean;
}

interface ShippingInfo {
  digital_delivery: boolean;
  packaging_type: string;
  is_stackable: boolean;
  is_toppleable: boolean;
  quantity_limit: number;
  weight: number;
  width: number;
  height: number;
  length: number;
}

interface ProductOption {
  handle: string;
  name: string;
  product_taxonomy_attribute_id: number;
  values: ProductOptionValue[];
  created_at: string;
  updated_at: string;
  locales: Record<string, string>;
}

interface ProductOptionValue {
  handle: string;
  name: string;
  product_taxonomy_value_id: number;
  created_at: string;
  updated_at: string;
  locales: Record<string, string>;
}

interface CustomField {
  id: number;
  type: string;
  name: string;
  handle: string;
  value: string;
}

interface Attachment {
  id: number;
  title: string;
  file: AttachmentFile;
  created_at: string;
}

interface AttachmentFile {
  id: number;
  path: string;
  status: string;
  dirname: string;
  basename: string;
  filename: string;
  extension: string;
  file_size: number;
  resumable_id: string | null;
  download_link: string;
  created_at: string;
  updated_at: string;
}

interface CombinedListing {
  parent_id: number;
  option_id: number;
  value_id: number;
  attribute_id: number | null;
  attribute_value_id: number | null;
}

interface ProductLocale {
  name: string;
  summary: string;
  description: string;
  seo_title: string;
  seo_description: string;
  seo_keywords: string;
  url_slug: string;
}

interface ProductExceptions {
  country: { code: string; name: string }[];
  customer_group: {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
  }[];
}
