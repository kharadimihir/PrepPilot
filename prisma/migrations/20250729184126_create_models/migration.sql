/*
  Warnings:

  - You are about to drop the column `demadLevel` on the `IndustryInsight` table. All the data in the column will be lost.
  - You are about to drop the column `keytrends` on the `IndustryInsight` table. All the data in the column will be lost.
  - Added the required column `demandLevel` to the `IndustryInsight` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `Resume` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "DemandLevel" AS ENUM ('HIGH', 'MEDIUM', 'LOW');

-- AlterTable
ALTER TABLE "IndustryInsight" DROP COLUMN "demadLevel",
DROP COLUMN "keytrends",
ADD COLUMN     "demandLevel" "DemandLevel" NOT NULL,
ADD COLUMN     "keyTrends" TEXT[];

-- AlterTable
ALTER TABLE "Resume" ADD COLUMN     "content" TEXT NOT NULL;

-- DropEnum
DROP TYPE "DemadLevel";
