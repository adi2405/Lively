import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const isDev = process.env.NODE_ENV !== "production";

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["error"],
    datasources: {
      db: {
        url: isDev ? process.env.DIRECT_URL : process.env.DATABASE_URL,
      },
    },
  });

if (isDev) {
  globalForPrisma.prisma = db;
}
