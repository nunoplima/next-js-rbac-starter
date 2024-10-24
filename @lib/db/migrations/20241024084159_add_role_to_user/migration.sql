-- CreateEnum
CREATE TYPE "ERole" AS ENUM ('ADMIN', 'USER');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "ERole" NOT NULL DEFAULT 'USER';
