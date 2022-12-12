-- CreateEnum
CREATE TYPE "UserLocale" AS ENUM ('EN_US');

-- CreateTable
CREATE TABLE "User" (
    "_id" STRING NOT NULL,
    "username" STRING NOT NULL,
    "discriminator" STRING NOT NULL,
    "email" STRING NOT NULL,
    "verified" BOOL NOT NULL,
    "staff" BOOL NOT NULL,
    "locale" "UserLocale" NOT NULL DEFAULT 'EN_US',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "messageReactionId" STRING[],

    CONSTRAINT "User_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "UserOnGroup" (
    "owner" BOOL NOT NULL DEFAULT false,
    "groupId" STRING NOT NULL,
    "userId" STRING NOT NULL,

    CONSTRAINT "UserOnGroup_pkey" PRIMARY KEY ("groupId","userId")
);

-- CreateTable
CREATE TABLE "UserGroup" (
    "_id" STRING NOT NULL,
    "title" STRING NOT NULL,

    CONSTRAINT "UserGroup_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "UserRelation" (
    "relatedUserId" STRING NOT NULL,
    "userId" STRING NOT NULL,
    "channelId" STRING NOT NULL,

    CONSTRAINT "UserRelation_pkey" PRIMARY KEY ("relatedUserId","userId")
);

-- CreateTable
CREATE TABLE "DmChannel" (
    "_id" STRING NOT NULL,
    "userRelationRelatedUserId" STRING NOT NULL,
    "userRelationUserId" STRING NOT NULL,

    CONSTRAINT "DmChannel_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "GroupChannel" (
    "_id" STRING NOT NULL,
    "userGroupId" STRING NOT NULL,

    CONSTRAINT "GroupChannel_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Message" (
    "_id" STRING NOT NULL,
    "pinned" BOOL NOT NULL DEFAULT false,
    "content" STRING,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" STRING NOT NULL,
    "refrenceId" STRING,
    "channelId" STRING NOT NULL,
    "groupChannelId" STRING,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Attachment" (
    "_id" STRING NOT NULL,
    "fileName" STRING NOT NULL,
    "contentType" STRING,
    "messageId" STRING NOT NULL,

    CONSTRAINT "Attachment_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "GroupImage" (
    "_id" STRING NOT NULL,
    "userGroupId" STRING NOT NULL,

    CONSTRAINT "GroupImage_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "UserImage" (
    "_id" STRING NOT NULL,
    "userId" STRING NOT NULL,

    CONSTRAINT "UserImage_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "MessageReaction" (
    "_id" STRING NOT NULL,
    "emoji" STRING NOT NULL,
    "messageId" STRING NOT NULL,

    CONSTRAINT "MessageReaction_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "_MessageReactionToUser" (
    "A" STRING NOT NULL,
    "B" STRING NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "DmChannel_userRelationRelatedUserId_userRelationUserId_key" ON "DmChannel"("userRelationRelatedUserId", "userRelationUserId");

-- CreateIndex
CREATE UNIQUE INDEX "GroupChannel_userGroupId_key" ON "GroupChannel"("userGroupId");

-- CreateIndex
CREATE UNIQUE INDEX "GroupImage_userGroupId_key" ON "GroupImage"("userGroupId");

-- CreateIndex
CREATE UNIQUE INDEX "UserImage_userId_key" ON "UserImage"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "_MessageReactionToUser_AB_unique" ON "_MessageReactionToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_MessageReactionToUser_B_index" ON "_MessageReactionToUser"("B");

-- AddForeignKey
ALTER TABLE "UserOnGroup" ADD CONSTRAINT "UserOnGroup_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOnGroup" ADD CONSTRAINT "UserOnGroup_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "UserGroup"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRelation" ADD CONSTRAINT "UserRelation_relatedUserId_fkey" FOREIGN KEY ("relatedUserId") REFERENCES "User"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRelation" ADD CONSTRAINT "UserRelation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DmChannel" ADD CONSTRAINT "DmChannel_userRelationRelatedUserId_userRelationUserId_fkey" FOREIGN KEY ("userRelationRelatedUserId", "userRelationUserId") REFERENCES "UserRelation"("relatedUserId", "userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupChannel" ADD CONSTRAINT "GroupChannel_userGroupId_fkey" FOREIGN KEY ("userGroupId") REFERENCES "UserGroup"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_refrenceId_fkey" FOREIGN KEY ("refrenceId") REFERENCES "Message"("_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "DmChannel"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_groupChannelId_fkey" FOREIGN KEY ("groupChannelId") REFERENCES "GroupChannel"("_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attachment" ADD CONSTRAINT "Attachment_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "Message"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupImage" ADD CONSTRAINT "GroupImage_userGroupId_fkey" FOREIGN KEY ("userGroupId") REFERENCES "UserGroup"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserImage" ADD CONSTRAINT "UserImage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageReaction" ADD CONSTRAINT "MessageReaction_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "Message"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MessageReactionToUser" ADD CONSTRAINT "_MessageReactionToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "MessageReaction"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MessageReactionToUser" ADD CONSTRAINT "_MessageReactionToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("_id") ON DELETE CASCADE ON UPDATE CASCADE;
