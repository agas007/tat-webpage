import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Seed Admin user
  const adminPassword = await bcrypt.hash("admin123", 10);
  const admin = await prisma.user.upsert({
    where: { email: "admin@tatpartners.co.id" },
    update: {},
    create: {
      email: "admin@tatpartners.co.id",
      name: "TAT System Admin",
      password: adminPassword,
      role: "Admin",
    },
  });
  console.log({ admin });

  // Seed Partner user
  const partnerPassword = await bcrypt.hash("partner123", 10);
  const partner = await prisma.user.upsert({
    where: { email: "partner@tatpartners.co.id" },
    update: {},
    create: {
      email: "partner@tatpartners.co.id",
      name: "Tri Agung Tofiq",
      password: partnerPassword,
      role: "Partner",
    },
  });
  console.log({ partner });

  // Seed Client user
  const clientPassword = await bcrypt.hash("client123", 10);
  const client = await prisma.user.upsert({
    where: { email: "finance@krakatausteel.com" },
    update: {},
    create: {
      email: "finance@krakatausteel.com",
      name: "PT Krakatau Steel (Persero) Tbk",
      password: clientPassword,
      role: "Client",
    },
  });
  console.log({ client });

  // Create some initial projects and tasks for the client
  const project = await prisma.project.create({
    data: {
      clientId: client.id,
      name: "Pelaporan SPT Tahunan Badan 2025",
      status: "In Progress",
      progress: 65,
      nextAction: "Menunggu dokumen Rekening Koran Q4 dari Klien",
      tasks: {
        create: [
          {
            title: "Pengumpulan Data",
            status: "done",
            priority: "Low",
          },
          {
            title: "Ekualisasi & Rekonsiliasi Fiskal",
            status: "done",
            priority: "Medium",
          },
          {
            title: "Drafting SPT",
            status: "progress",
            priority: "High",
          },
        ],
      },
    },
  });
  console.log({ project });

  console.log("Seeding finished.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
