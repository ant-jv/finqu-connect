import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { ConnectFinquButton } from "@/app/components/finqu-connect-button";
import { headers } from "next/headers";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    redirect("/login");
  }

  const headerValues = await headers();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/finqu/products?page=1&limit=50`,
    {
      headers: headerValues,
      next: { revalidate: 30 }, // cache per user for 30 sec
    }
  );

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

  const totalPages = res.headers.get("X-Pagination-Count");
  const currentPage = res.headers.get("X-Pagination-Page");

  return (
    <div>
      <h1>Welcome to your dashboard, {session.user?.name}!</h1>
      <p>Email: {session.user?.email}</p>
      <ConnectFinquButton />
      {products.length > 0 && (
        <div style={{ marginTop: "1rem" }}>
          <h2>Products</h2>
          <ul>
            {products.map((product: { id: string; name: string }) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
