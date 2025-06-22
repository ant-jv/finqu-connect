import { NextResponse, NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export async function PUT(
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

  const body = await request.json();
  console.log(body);
  const { productId } = await params;
  console.log(`${user.finquApiUrl}/3.0/products/${productId}}`);

  try {
    const res = await fetch(
      `${user.finquApiUrl}/3.0/catalog/products/${productId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.finquAccessToken}`,
        },
        body: JSON.stringify(body),
      }
    );

    const result = await res.json();

    if (!res.ok) {
      return NextResponse.json(result, { status: res.status });
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("Finqu PUT error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
