import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const userCount = await prisma.user.count();
  const projectCount = await prisma.project.count();
  const taskCount = await prisma.task.count();

  console.log(`Database Statistics:`);
  console.log(`- Users: ${userCount}`);
  console.log(`- Projects: ${projectCount}`);
  console.log(`- Tasks: ${taskCount}`);

  if (userCount > 0) {
    const users = await prisma.user.findMany({
      select: { email: true, role: true }
    });
    console.log('\nRoot Users:');
    users.forEach(u => console.log(`- ${u.email} (${u.role})`));
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
