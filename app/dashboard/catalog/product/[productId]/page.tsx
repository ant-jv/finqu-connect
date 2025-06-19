import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { headers } from "next/headers";
import Link from "next/link";
import Product from "@/app/components/products/Product";

export default async function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    redirect("/login");
  }

  const { productId } = await params;

  return (
    <main className="max-w-[800px] mx-auto p-2">
      <Product productId={`${productId}`} />
    </main>
  );
}
