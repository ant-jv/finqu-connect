import type { Product } from "@/types/product";

export const sampleProduct: Product = {
  id: 26810979,
  type: "physical",
  status: "published",
  name: "",
  summary: "",
  description: "",
  seo_title: "Example product",
  seo_description: "The summary of an example product.",
  seo_keywords: "product, keywords",
  url_slug: "example-product-d9def12b3ccdceae",
  tax_class_id: 87247,
  default_tax_rate: 25.5,
  manufacturer_id: null,
  delivery_time_id: 204171,
  deliverer_id: null,
  sales_margin_id: null,
  default_sales_margin: null,
  return_policy_id: null,
  reviews: {
    rating: 0,
    max_rating: 5,
    count: 0,
  },
  taxonomy: {
    category: {
      id: 20789,
      shopify_id: "gid://shopify/TaxonomyCategory/ap",
      google_id: "1",
      name: "Animals & Pet Supplies",
      full_name: "Animals & Pet Supplies",
      ancestors: [],
      child_count: 2,
      attributes: [],
      created_at: "2024-04-03T00:01:27+00:00",
      updated_at: "2024-04-05T10:24:08+00:00",
      locales: {
        en: {
          name: "Animals & Pet Supplies",
          full_name: "Animals & Pet Supplies",
        },
        fi: {
          name: "Eläimet & Lemmikkitarvikkeet",
          full_name: "Eläimet & Lemmikkitarvikkeet",
        },
      },
    },
    attributes: [
      {
        id: 2648,
        handle: "color",
        shopify_id: "gid://shopify/TaxonomyAttribute/1",
        name: "Color",
        type: "color",
        created_at: "2024-04-03T00:00:15+00:00",
        updated_at: "2024-04-05T10:39:41+00:00",
        locales: {
          en: {
            name: "Color",
          },
          fi: {
            name: "Väri",
          },
        },
        values: [
          {
            id: 68742,
            shopify_id: "gid://shopify/TaxonomyValue/15",
            handle: "red",
            name: "Red",
            is_custom: false,
            colors: ["#D17A7A", null, null],
            created_at: "2024-04-05T09:36:14+00:00",
            updated_at: "2024-04-07T13:43:01+00:00",
            locales: {
              en: {
                name: "Red",
              },
              fi: {
                name: "Punainen",
              },
            },
          },
          {
            id: 68730,
            shopify_id: "gid://shopify/TaxonomyValue/3",
            handle: "blue",
            name: "Blue",
            is_custom: false,
            colors: ["#7AA1D2", null, null],
            created_at: "2024-04-05T09:36:14+00:00",
            updated_at: "2024-04-07T13:41:42+00:00",
            locales: {
              en: {
                name: "Blue",
              },
              fi: {
                name: "Sininen",
              },
            },
          },
        ],
      },
    ],
  },
  flag: null,
  tags: [],
  notes: "Notes of the product",
  is_directly_purchasable: true,
  is_archived: false,
  is_combined_listing_parent: false,
  media: [
    {
      id: 22219384,
      file: {
        id: 12006291,
        type: "image",
        host_provider: "platform",
        file_name: "image",
        url: "https://media.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image.jpeg",
        url_with_modifications: null,
        modifications: [],
        thumbnail: {
          url: "https://media.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image.jpeg",
          sizes: {
            "1x": {
              icon: "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image.jpeg?w=32&h=32",
              thumb:
                "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image.jpeg?w=100&h=100",
              small:
                "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image.jpeg?w=300&h=300",
              medium:
                "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image.jpeg?w=600&h=600",
              large:
                "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image.jpeg?w=1200&h=1200",
            },
            "2x": {
              icon: "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image.jpeg?w=64&h=64",
              thumb:
                "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image.jpeg?w=200&h=200",
              small:
                "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image.jpeg?w=600&h=600",
              medium:
                "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image.jpeg?w=1200&h=1200",
              large:
                "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image.jpeg?w=2400&h=2400",
            },
            "3x": {
              icon: "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image.jpeg?w=96&h=96",
              thumb:
                "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image.jpeg?w=300&h=300",
              small:
                "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image.jpeg?w=900&h=900",
              medium:
                "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image.jpeg?w=1800&h=1800",
              large:
                "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image.jpeg?w=3600&h=3600",
            },
          },
        },
        title: null,
        description: null,
        width: 1280,
        height: 783,
        aspect_ratio: "1280:783",
        orientation: "landscape",
        file_size: 179573,
        mime_type: "image/jpeg",
        tags: [],
        is_ai_processed: null,
        location: null,
        locales: {
          en: {
            title: null,
            description: null,
          },
          fi: {
            title: null,
            description: null,
          },
        },
        product_count: 3,
        parent: null,
        created_at: "2025-05-15T09:14:13+00:00",
        updated_at: "2025-05-15T09:14:13+00:00",
      },
    },
    {
      id: 22219389,
      file: {
        id: 12006303,
        type: "image",
        host_provider: "platform",
        file_name: "image_2",
        url: "https://media.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image_2.jpeg",
        url_with_modifications: null,
        modifications: [],
        thumbnail: {
          url: "https://media.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image_2.jpeg",
          sizes: {
            "1x": {
              icon: "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image_2.jpeg?w=32&h=32",
              thumb:
                "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image_2.jpeg?w=100&h=100",
              small:
                "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image_2.jpeg?w=300&h=300",
              medium:
                "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image_2.jpeg?w=600&h=600",
              large:
                "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image_2.jpeg?w=1200&h=1200",
            },
            "2x": {
              icon: "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image_2.jpeg?w=64&h=64",
              thumb:
                "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image_2.jpeg?w=200&h=200",
              small:
                "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image_2.jpeg?w=600&h=600",
              medium:
                "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image_2.jpeg?w=1200&h=1200",
              large:
                "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image_2.jpeg?w=2400&h=2400",
            },
            "3x": {
              icon: "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image_2.jpeg?w=96&h=96",
              thumb:
                "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image_2.jpeg?w=300&h=300",
              small:
                "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image_2.jpeg?w=900&h=900",
              medium:
                "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image_2.jpeg?w=1800&h=1800",
              large:
                "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image_2.jpeg?w=3600&h=3600",
            },
          },
        },
        title: null,
        description: null,
        width: 275,
        height: 183,
        aspect_ratio: "275:183",
        orientation: "landscape",
        file_size: 7180,
        mime_type: "image/jpeg",
        tags: [],
        is_ai_processed: null,
        location: null,
        locales: {
          en: {
            title: null,
            description: null,
          },
          fi: {
            title: null,
            description: null,
          },
        },
        product_count: 3,
        parent: null,
        created_at: "2025-05-15T09:15:02+00:00",
        updated_at: "2025-05-15T09:15:02+00:00",
      },
    },
  ],
  variants: [
    {
      id: 62949,
      product_id: 26810984,
      status: "published",
      name: "Red",
      options: {
        ptxa_2648: "ptxav_68742",
      },
      product_number: "MODELNR1234",
      gtin: "GTIN1234",
      image: {
        file: {
          id: 12006291,
          type: "image",
          host_provider: "platform",
          file_name: "image",
          url: "https://media.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image.jpeg",
          url_with_modifications: null,
          modifications: [],
          thumbnail: {
            url: "https://media.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image.jpeg",
            sizes: {
              "1x": {
                icon: "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image.jpeg?w=32&h=32",
                thumb:
                  "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image.jpeg?w=100&h=100",
                small:
                  "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image.jpeg?w=300&h=300",
                medium:
                  "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image.jpeg?w=600&h=600",
                large:
                  "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image.jpeg?w=1200&h=1200",
              },
              "2x": {
                icon: "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image.jpeg?w=64&h=64",
                thumb:
                  "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image.jpeg?w=200&h=200",
                small:
                  "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image.jpeg?w=600&h=600",
                medium:
                  "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image.jpeg?w=1200&h=1200",
                large:
                  "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image.jpeg?w=2400&h=2400",
              },
              "3x": {
                icon: "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image.jpeg?w=96&h=96",
                thumb:
                  "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image.jpeg?w=300&h=300",
                small:
                  "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image.jpeg?w=900&h=900",
                medium:
                  "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image.jpeg?w=1800&h=1800",
                large:
                  "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image.jpeg?w=3600&h=3600",
              },
            },
          },
          title: null,
          description: null,
          width: 1280,
          height: 783,
          aspect_ratio: "1280:783",
          orientation: "landscape",
          file_size: 179573,
          mime_type: "image/jpeg",
          tags: [],
          is_ai_processed: null,
          location: null,
          locales: {
            en: {
              title: null,
              description: null,
            },
            fi: {
              title: null,
              description: null,
            },
          },
          product_count: 3,
          parent: null,
          created_at: "2025-05-15T09:14:13+00:00",
          updated_at: "2025-05-15T09:14:13+00:00",
        },
      },
      units: {
        weight: "kg",
        measure: "cm",
        sell: "pc",
      },
      min_quantity: 1,
      max_quantity: null,
      measurements: {
        length: 12,
        width: 12,
        height: 12,
      },
      weight: 1,
      price: 7.9681,
      tax_free_purchase_price: 6,
      discount_percentage: null,
      discounts: [],
      bulk_rate: [],
      customizations: [
        {
          id: 527255,
          sort_order: 1,
          name: "Valitse väri",
          inventory_management: false,
          is_inventory_management_available: true,
          options: [
            {
              id: 4812843,
              name: "Sininen",
              path_name: ["Sininen"],
              price: 0,
              image: null,
              has_inventory: false,
              has_children: false,
            },
            {
              id: 4812847,
              name: "Punainen",
              path_name: ["Punainen"],
              price: 0,
              image: null,
              has_inventory: false,
              has_children: false,
            },
            {
              id: 4816275,
              name: "Keltainen",
              path_name: ["Keltainen"],
              price: 0,
              image: null,
              has_inventory: false,
              has_children: false,
            },
          ],
        },
      ],
      reviews: {
        rating: 0,
        max_rating: 5,
        count: 0,
      },
      is_discontinued: true,
      is_inventory_managed: true,
      is_default: true,
      shipping_info: {
        digital_delivery: false,
        packaging_type: "box",
        is_stackable: true,
        is_toppleable: true,
        quantity_limit: 2,
        weight: 1,
        width: 10,
        height: 30,
        length: 40,
      },
      created_at: "2025-06-25T09:58:46+00:00",
      updated_at: "2025-06-25T10:04:08+00:00",
    },
    {
      id: 62954,
      product_id: 26810989,
      status: "published",
      name: "Blue",
      options: {
        ptxa_2648: "ptxav_68730",
      },
      product_number: "MODEL123",
      gtin: "GTIN1234",
      image: {
        file: {
          id: 12006303,
          type: "image",
          host_provider: "platform",
          file_name: "image_2",
          url: "https://media.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image_2.jpeg",
          url_with_modifications: null,
          modifications: [],
          thumbnail: {
            url: "https://media.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image_2.jpeg",
            sizes: {
              "1x": {
                icon: "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image_2.jpeg?w=32&h=32",
                thumb:
                  "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image_2.jpeg?w=100&h=100",
                small:
                  "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image_2.jpeg?w=300&h=300",
                medium:
                  "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image_2.jpeg?w=600&h=600",
                large:
                  "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image_2.jpeg?w=1200&h=1200",
              },
              "2x": {
                icon: "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image_2.jpeg?w=64&h=64",
                thumb:
                  "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image_2.jpeg?w=200&h=200",
                small:
                  "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image_2.jpeg?w=600&h=600",
                medium:
                  "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image_2.jpeg?w=1200&h=1200",
                large:
                  "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image_2.jpeg?w=2400&h=2400",
              },
              "3x": {
                icon: "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image_2.jpeg?w=96&h=96",
                thumb:
                  "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image_2.jpeg?w=300&h=300",
                small:
                  "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image_2.jpeg?w=900&h=900",
                medium:
                  "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image_2.jpeg?w=1800&h=1800",
                large:
                  "https://images.finqu.com/1c32ff4073046a61368d754e2072f538c6b92f2c5e726d1fcb034b776cc9519f/image_2.jpeg?w=3600&h=3600",
              },
            },
          },
          title: null,
          description: null,
          width: 275,
          height: 183,
          aspect_ratio: "275:183",
          orientation: "landscape",
          file_size: 7180,
          mime_type: "image/jpeg",
          tags: [],
          is_ai_processed: null,
          location: null,
          locales: {
            en: {
              title: null,
              description: null,
            },
            fi: {
              title: null,
              description: null,
            },
          },
          product_count: 3,
          parent: null,
          created_at: "2025-05-15T09:15:02+00:00",
          updated_at: "2025-05-15T09:15:02+00:00",
        },
      },
      units: {
        weight: "kg",
        measure: "cm",
        sell: "pc",
      },
      min_quantity: 1,
      max_quantity: null,
      measurements: {
        length: 30,
        width: 20,
        height: 30,
      },
      weight: 1,
      price: 7.9681,
      tax_free_purchase_price: 6,
      discount_percentage: null,
      discounts: [],
      bulk_rate: [],
      customizations: [
        {
          id: 527255,
          sort_order: 1,
          name: "Valitse väri",
          inventory_management: false,
          is_inventory_management_available: true,
          options: [
            {
              id: 4812843,
              name: "Sininen",
              path_name: ["Sininen"],
              price: 0,
              image: null,
              has_inventory: false,
              has_children: false,
            },
            {
              id: 4812847,
              name: "Punainen",
              path_name: ["Punainen"],
              price: 0,
              image: null,
              has_inventory: false,
              has_children: false,
            },
            {
              id: 4816275,
              name: "Keltainen",
              path_name: ["Keltainen"],
              price: 0,
              image: null,
              has_inventory: false,
              has_children: false,
            },
          ],
        },
      ],
      reviews: {
        rating: 0,
        max_rating: 5,
        count: 0,
      },
      is_discontinued: true,
      is_inventory_managed: true,
      is_default: false,
      shipping_info: {
        digital_delivery: false,
        packaging_type: "box",
        is_stackable: true,
        is_toppleable: true,
        quantity_limit: 1,
        weight: 1,
        width: 30,
        height: 30,
        length: 40,
      },
      created_at: "2025-06-25T09:58:47+00:00",
      updated_at: "2025-06-25T10:04:08+00:00",
    },
  ],
  options: [
    {
      handle: "ptxa_2648",
      name: "Color",
      product_taxonomy_attribute_id: 2648,
      values: [
        {
          handle: "ptxav_68742",
          name: "Red",
          product_taxonomy_value_id: 68742,
          created_at: "2025-06-25T09:58:45+00:00",
          updated_at: "2025-06-25T09:58:45+00:00",
          locales: {
            en: "Red",
            fi: "Punainen",
          },
        },
        {
          handle: "ptxav_68730",
          name: "Blue",
          product_taxonomy_value_id: 68730,
          created_at: "2025-06-25T09:58:45+00:00",
          updated_at: "2025-06-25T10:04:02+00:00",
          locales: {
            en: "Blue",
            fi: "Sininen",
          },
        },
      ],
      created_at: "2025-06-25T09:58:45+00:00",
      updated_at: "2025-06-25T09:58:45+00:00",
      locales: {
        en: "Color",
        fi: "Väri",
      },
    },
  ],
  custom_fields: [
    {
      id: 27367,
      type: "text",
      name: "vanhenemispvm",
      handle: "vanhenemispvm",
      value: "12.4.2039",
    },
  ],
  attachments: [
    {
      id: 131469,
      title: "testivideo.mov",
      file: {
        id: 51066,
        path: "e32bdf6f9a5cc24c0aff171c9c055d1c6fe9259e9064e6385afcc13c3cdc2b1c/testivideo.mov",
        status: "complete",
        dirname:
          "e32bdf6f9a5cc24c0aff171c9c055d1c6fe9259e9064e6385afcc13c3cdc2b1c",
        basename: "testivideo.mov",
        filename: "testivideo",
        extension: "mov",
        file_size: 6336034,
        resumable_id: null,
        download_link:
          "https://share.finqu.com/e32bdf6f9a5cc24c0aff171c9c055d1c6fe9259e9064e6385afcc13c3cdc2b1c/testivideo.mov",
        created_at: "2025-06-17T06:31:20+00:00",
        updated_at: "2025-06-17T06:31:25+00:00",
      },
      created_at: "2025-06-25T10:04:02+00:00",
    },
  ],
  combined_listing: {
    parent_id: 26810999,
    option_id: 19439,
    value_id: 70734,
    attribute_id: null,
    attribute_value_id: null,
  },
  locales: {
    en: {
      name: "",
      summary: "",
      description: "",
      seo_title: "Example product",
      seo_description: "The summary of an example product.",
      seo_keywords: "product, keywords",
      url_slug: "example-product-d9def12b3ccdceae",
    },
    fi: {
      name: "",
      summary: "",
      description: "",
      seo_title: "Esimerkkituote",
      seo_description: "Esimerkkituotteen lyhyt kuvaus.",
      seo_keywords: "tuotteen-hakusanat",
      url_slug: "esimerkkituote-bec83d36e0f7b840",
    },
  },
  exceptions: {
    country: [
      {
        code: "ee",
        name: "Estonia",
      },
    ],
    customer_group: [
      {
        id: 8549,
        name: "Jokin toinen ryhmä",
        created_at: "2023-07-12T12:11:55+00:00",
        updated_at: "2023-07-12T12:11:55+00:00",
      },
    ],
  },
  created_at: "2025-06-25T09:58:45+00:00",
  updated_at: "2025-06-25T10:04:08+00:00",
};
