import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { ConnectFinquButton } from "../components/finqu-connect-button";
import { prisma } from "@/lib/prisma";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    redirect("/login");
  }

  console.time("Käyttäjän haku");
  const user = await prisma.user.findUnique({
    where: { email: session.user?.email },
  });
  console.timeEnd("Käyttäjän haku");

  const accessToken = user?.finquAccessToken;
  const apiUrl = user?.finquApiUrl;

  console.time("finqu-products");
  const res = await fetch(`${apiUrl}/3.0/catalog/products?page=1&limit=50`, {
    next: { revalidate: 30 }, // cache per user for 30 sec
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.timeEnd("finqu-products"); // Logs: finqu-products: 123ms

  const products = await res.json();

  const totalPages = res.headers.get("X-Pagination-Count");
  const currentPage = res.headers.get("X-Pagination-Page");

  console.log(totalPages, currentPage);

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
