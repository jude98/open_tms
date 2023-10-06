import { PrismaClient } from '@prisma/client';
import superAdmin from './seeder/initial.seed.js';


const prisma = new PrismaClient();

async function main() {
  await superAdmin(prisma);
  // await processAndOffers(prisma);
  // await agreements(prisma);
}

main()
  .catch((e) => {
    console.log('e', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
