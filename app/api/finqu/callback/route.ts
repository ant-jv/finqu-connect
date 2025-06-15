import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.redirect(new URL("/dashboard?error=no_user", req.url));
  }

  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state"); // verify if needed

  if (!code) {
    return NextResponse.redirect("/dashboard?error=missing_code");
  }

  // Step 1: Exchange code for token
  const tokenRes = await fetch(process.env.FINQU_TOKEN_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      client_id: process.env.FINQU_CLIENT_ID!,
      client_secret: process.env.FINQU_CLIENT_SECRET!,
      redirect_uri: process.env.FINQU_REDIRECT_URI!,
    }),
  });

  const tokenData = await tokenRes.json();

  if (!tokenRes.ok) {
    console.error("Token error:", tokenData);
    return NextResponse.redirect("/dashboard?error=token_failed");
  }

  const { access_token, refresh_token } = tokenData;

  // Step 2: Get merchant-specific API URL
  const resourceRes = await fetch(process.env.FINQU_RESOURCE_URL!, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const resourceData = await resourceRes.json();

  console.log("✅ Finqu token:", tokenData);
  console.log("🏪 Merchant info:", resourceData);

  // Save tokens + api_url in your DB linked to logged-in user
  // VOISI EHKÄ ENCRYPTATA NÄMÄ ENNEN TALLENTAMISTA.
  await prisma.user.update({
    where: { email: session.user.email },
    data: {
      finquAccessToken: tokenData.access_token,
      finquRefreshToken: tokenData.refresh_token,
      finquApiUrl: resourceData?.merchant?.endpoints?.api,
      finquTokenExpiresAt: new Date(Date.now() + tokenData.expires_in * 1000), // optional
    },
  });

  //return NextResponse.redirect("/dashboard?connected=1");
  return NextResponse.redirect(new URL("/dashboard?connected=1", req.url));
}
