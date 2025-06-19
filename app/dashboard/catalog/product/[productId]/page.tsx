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
    <div className="max-w-[1200px] mx-auto">
      <Link href="/dashboard/catalog">← Back to catalog</Link>
      <Product productId={`${productId}`} />
    </div>
  );
}
