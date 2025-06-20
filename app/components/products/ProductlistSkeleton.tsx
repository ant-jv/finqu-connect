// app/components/products/productlist-skeleton.tsx
export default function ProductListSkeleton() {
  return (
    <div className="w-full h-48 border border-gray-300 rounded-lg p-8 animate-pulse flex items-center justify-center">
      <span className="text-gray-400 text-lg">Products are coming...</span>
    </div>
  );
}
