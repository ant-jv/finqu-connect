import { create } from "zustand";
import { Product } from "@/types/product";

type ProductStore = {
  products: Product[];
  setProducts: (products: Product[]) => void;
  updateProduct: (updated: Product) => void;
};

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  updateProduct: (updated) =>
    set((state) => ({
      products: state.products.map((p) =>
        p.id === updated.id ? { ...p, ...updated } : p
      ),
    })),
}));
