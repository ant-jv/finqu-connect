import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ProductList from "@/app/components/products/Productlist";
import { Suspense } from "react";
import ProductListSkeleton from "@/app/components/products/ProductlistSkeleton";

export default async function ProductsPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    redirect("/login");
  }

  return (
    <main className="max-w-[800px] mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Products</h2>
      <Suspense fallback={<ProductListSkeleton />}>
        <ProductList />
      </Suspense>
    </main>
  );
}
