import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { ConnectFinquButton } from "@/app/components/finqu-connect-button";
import { headers } from "next/headers";
import Link from "next/link";

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

  const headerValues = await headers();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/finqu/catalog/product/${productId}`,
    {
      headers: headerValues,
      next: { revalidate: 30 }, // cache per user for 30 sec
    }
  );

  const product = await res.json();

  console.log(product);

  if (!res.ok) {
    return (
      <div>
        <h1>Welcome to your dashboard, {session.user?.name}!</h1>
        <p>Email: {session.user?.email}</p>
        <ConnectFinquButton />
        {res.status === 400 && <p>Please connect your Finqu account first.</p>}
      </div>
    );
  }

  return (
    <div>
      <Link href="/dashboard/catalog">← Back to catalog</Link>
      <pre>{JSON.stringify(product, null, 2)}</pre>
    </div>
  );
}
