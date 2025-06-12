// prisma/seed.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      { email: "alice@example.com", name: "Alice" },
      { email: "bob@example.com", name: "Bob" },
    ],
  });
}

main()
  .then(() => {
    console.log("Seeding complete.");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
