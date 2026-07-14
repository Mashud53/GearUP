-- CreateEnum
CREATE TYPE "Status" AS ENUM ('SUSPEND', 'ACTIVE');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'ACTIVE';
