import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { ConnectFinquButton } from "@/app/components/finqu-connect-button";

export default async function SettingsPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    redirect("/login");
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user?.finquAccessToken || !user?.finquApiUrl) {
    return (
      <>
        <ConnectFinquButton />
      </>
    );
  } else {
    return <>Connected to Finqu.</>;
  }
}
