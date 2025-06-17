import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { ConnectFinquButton } from "@/app/components/finqu-connect-button";
import { headers } from "next/headers";
import Link from "next/link";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    redirect("/login");
  }

  const headerValues = await headers();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/finqu/catalog?page=1&limit=20`,
    {
      headers: headerValues,
      next: { revalidate: 30 }, // cache per user for 30 sec
    }
  );

  const products = await res.json();
  console.log(products);

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
    <div className="max-w-[800px] mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Welcome to your dashboard, {session.user?.name}!
      </h1>
      <p className="text-gray-600 mb-4">Email: {session.user?.email}</p>
      <ConnectFinquButton />
      {products.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Products</h2>
          <ul className="divide-y divide-gray-200">
            {products.map((product: any) => {
              const cheapestVariant = product.variants?.[0];
              const basePrice = cheapestVariant?.price || 0;
              const taxRate = product.default_tax_rate || 0;
              const priceWithVat = basePrice * (1 + taxRate / 100);

              return (
                <li
                  key={product.id}
                  className="py-3 flex items-center justify-between hover:bg-gray-50"
                >
                  <Link
                    href={`/dashboard/catalog/product/${product.id}`}
                    className="flex items-center justify-between w-full"
                  >
                    <div className="flex items-center">
                      <span className="ml-3">{product.name}</span>
                    </div>
                    <span className="text-gray-600">
                      {new Intl.NumberFormat("fi-FI", {
                        style: "currency",
                        currency: "EUR",
                      }).format(priceWithVat)}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
