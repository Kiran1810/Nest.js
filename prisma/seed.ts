// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  await prisma.location.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'HSR'
    },
  });

  await prisma.location.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: 'Kormanagala'
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
