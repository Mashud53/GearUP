/*
  Warnings:

  - The `status` column on the `Rental` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "RentStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'RETURNED', 'CANCELLED');

-- AlterTable
ALTER TABLE "Rental" DROP COLUMN "status",
ADD COLUMN     "status" "RentStatus" NOT NULL DEFAULT 'PENDING';
