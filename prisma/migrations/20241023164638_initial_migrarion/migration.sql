-- CreateEnum
CREATE TYPE "ECurrency" AS ENUM ('EURO');

-- CreateTable
CREATE TABLE "Construction" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "owner" VARCHAR(255) NOT NULL,
    "valueCents" BIGINT NOT NULL,
    "valueCurrency" "ECurrency" NOT NULL DEFAULT 'EURO',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Construction_pkey" PRIMARY KEY ("id")
);
