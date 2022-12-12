-- CreateEnum
CREATE TYPE "RelationStatus" AS ENUM ('NONE', 'PENDING', 'FRIENDS', 'BLOCKED');

-- AlterTable
ALTER TABLE "UserRelation" ADD COLUMN     "status" "RelationStatus" NOT NULL DEFAULT 'NONE';
