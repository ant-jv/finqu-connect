// app/components/products/ProductSceleton.tsx
export default function ProductSkeleton() {
  return (
    <div className="max-w-[800px] h-48 border border-gray-300 rounded-lg p-8 animate-pulse flex items-center justify-center">
      <span className="text-gray-400 text-lg">Product is coming...</span>
    </div>
  );
}
