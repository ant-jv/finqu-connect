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
  delivery_time_id: number;
  deliverer_id: number | null;
  sales_margin_id: number | null;
  default_sales_margin: number | null;
  return_policy_id: number | null;
  reviews: {
    rating: number;
    max_rating: number;
    count: number;
  };
  taxonomy: {
    category: any;
    attributes: Array<{
      id: number;
      handle: string;
      shopify_id: string;
      name: string;
      type: string;
      created_at: string;
      updated_at: string;
      locales: {
        fi: {
          name: string;
        };
      };
      values: Array<{
        id: number;
        shopify_id: string;
        handle: string;
        name: string;
        is_custom: boolean;
        colors: Array<string | null>;
        created_at: string;
        updated_at: string;
        locales: {
          fi: {
            name: string;
          };
        };
      }>;
    }>;
  };
  flag: any;
  tags: any[];
  notes: string | null;
  is_directly_purchasable: boolean;
  is_archived: boolean;
  is_combined_listing_parent: boolean;
  media: Array<{
    id: number;
    file: {
      id: number;
      type: string;
      host_provider: string;
      file_name: string;
      url: string;
      url_with_modifications: string | null;
      modifications: any[];
      thumbnail: {
        url: string;
        sizes: {
          [key: string]: {
            icon: string;
            thumb: string;
            small: string;
            medium: string;
            large: string;
          };
        };
      };
      title: string | null;
      description: string | null;
      width: number;
      height: number;
      aspect_ratio: string;
      orientation: string;
      file_size: number;
      mime_type: string;
      tags: any[];
      is_ai_processed: boolean | null;
      location: any;
      locales: {
        fi: {
          title: string | null;
          description: string | null;
        };
      };
      product_count: number;
      parent: any;
      created_at: string;
      updated_at: string;
    };
  }>;
  variants: Array<{
    id: number;
    product_id: number;
    status: string;
    name: string;
    options: Record<string, string>;
    product_number: string | null;
    gtin: string | null;
    image: string | null;
    units: {
      weight: string;
      measure: string;
      sell: string;
    };
    min_quantity: number;
    max_quantity: number | null;
    measurements: {
      length: number | null;
      width: number | null;
      height: number | null;
    };
    weight: number | null;
    price: number;
    tax_free_purchase_price: number | null;
    discount_percentage: number | null;
    discounts: any[];
    bulk_rate: any[];
    customizations: any[];
    reviews: {
      rating: number;
      max_rating: number;
      count: number;
    };
    is_discontinued: boolean;
    is_inventory_managed: boolean;
    is_default: boolean;
    shipping_info: {
      digital_delivery: boolean;
      packaging_type: string;
      is_stackable: boolean;
      is_toppleable: boolean;
      quantity_limit: number | null;
      weight: number | null;
      width: number | null;
      height: number | null;
      length: number | null;
    };
    created_at: string;
    updated_at: string;
  }>;
  options: Array<{
    handle: string;
    name: string;
    product_taxonomy_attribute_id: number;
    values: Array<{
      handle: string;
      name: string;
      product_taxonomy_value_id: number;
      created_at: string;
      updated_at: string;
      locales: {
        fi: string;
      };
    }>;
    created_at: string;
    updated_at: string;
    locales: {
      fi: string;
    };
  }>;
  custom_fields: Array<{
    id: number;
    type: string;
    name: string;
    handle: string;
    value: any;
  }>;
  attachments: any[];
  combined_listing: any[];
  locales: {
    fi: {
      name: string;
      summary: string;
      description: string;
      seo_title: string;
      seo_description: string;
      seo_keywords: string;
      url_slug: string;
    };
  };
  exceptions: {
    country: any[];
    customer_group: any[];
  };
  created_at: string;
  updated_at: string;
}
