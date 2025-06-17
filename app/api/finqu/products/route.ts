import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);

  console.log(session?.user?.email);

  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user?.finquAccessToken || !user?.finquApiUrl) {
    return NextResponse.json({ error: "Finqu not connected" }, { status: 400 });
  }

  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || "1";
  const limit = searchParams.get("limit") || "50";

  const res = await fetch(
    `${user.finquApiUrl}/3.0/catalog/products?page=${page}&limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${user.finquAccessToken}`,
      },
    }
  );

  const products = await res.json();

  // Forward the pagination headers from Finqu
  const headers = new Headers();
  headers.set(
    "X-Pagination-Count",
    res.headers.get("X-Pagination-Count") || ""
  );
  headers.set("X-Pagination-Page", res.headers.get("X-Pagination-Page") || "");

  return NextResponse.json(products, { headers });
}
