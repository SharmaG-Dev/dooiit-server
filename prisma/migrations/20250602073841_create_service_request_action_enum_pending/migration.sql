/*
  Warnings:

  - Made the column `actionType` on table `ServiceRequest` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ServiceRequest" ALTER COLUMN "actionType" SET NOT NULL,
ALTER COLUMN "actionType" SET DEFAULT 'Pending';
