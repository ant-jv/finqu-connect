import { NextResponse, NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: { productId: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user?.finquAccessToken || !user?.finquApiUrl) {
    return NextResponse.json({ error: "Finqu not connected" }, { status: 400 });
  }

  const { productId } = await params;

  const res = await fetch(
    `${user.finquApiUrl}/3.0/catalog/products/${productId}`,
    {
      headers: {
        Authorization: `Bearer ${user.finquAccessToken}`,
      },
    }
  );

  const product = await res.json();

  return NextResponse.json(product);
}
