import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { ConnectFinquButton } from "@/app/components/finqu-connect-button";
import { headers } from "next/headers";
import Link from "next/link";

export default async function ProductList() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    redirect("/login");
  }

  const headerValues = await headers();
  console.time("Tuotteiden haku");
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/finqu/catalog?page=1&limit=50`,
    {
      headers: headerValues,
    }
  );
  console.timeEnd("Tuotteiden haku");

  const products = await res.json();

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
    <>
      {products.length > 0 && (
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
                  href={`/dashboard/product/${product.id}`}
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
      )}
    </>
  );
}
