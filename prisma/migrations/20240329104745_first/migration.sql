-- CreateEnum
CREATE TYPE "DATAURL_TYPE" AS ENUM ('DOWNLOAD', 'EMBED', 'LINK');

-- CreateEnum
CREATE TYPE "IPQ_ENTITY_TYPE" AS ENUM ('STUDENT', 'SPONSOR', 'ADVISOR');

-- CreateEnum
CREATE TYPE "PROJECT_TYPE" AS ENUM ('IQP', 'DATA', 'APP', 'PUBLICATION', 'IMPACT');

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "img" TEXT,
    "type" "PROJECT_TYPE" NOT NULL,
    "term" CHAR(1),
    "year" INTEGER NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dataurl" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "type" "DATAURL_TYPE" NOT NULL,

    CONSTRAINT "Dataurl_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IqpTeam" (
    "id" SERIAL NOT NULL,
    "projectId" TEXT NOT NULL,

    CONSTRAINT "IqpTeam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IqpEntity" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "teamId" INTEGER NOT NULL,
    "type" "IPQ_ENTITY_TYPE" NOT NULL,

    CONSTRAINT "IqpEntity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "validEmails" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "validEmails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Maintainer" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Maintainer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AutoSlideshow" (
    "id" SERIAL NOT NULL,
    "slideDelay" DOUBLE PRECISION NOT NULL,
    "picWidth" INTEGER NOT NULL,
    "picHeight" INTEGER NOT NULL,

    CONSTRAINT "AutoSlideshow_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "color" (
    "id" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "SlideShowId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "caption" (
    "id" TEXT NOT NULL,
    "caption" TEXT NOT NULL,
    "SlideShowId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "picture" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "SlideShowId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "link" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "SlideShowId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "tagsOnProject" (
    "projectId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tagsOnProject_pkey" PRIMARY KEY ("projectId","name")
);

-- CreateTable
CREATE TABLE "Tag" (
    "name" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "OpenDataSection" (
    "id" SERIAL NOT NULL,
    "vpcStatement" TEXT NOT NULL,
    "openDataParagraph" TEXT NOT NULL,
    "openDataPic" TEXT NOT NULL,

    CONSTRAINT "OpenDataSection_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_id_key" ON "Project"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Dataurl_id_key" ON "Dataurl"("id");

-- CreateIndex
CREATE UNIQUE INDEX "IqpTeam_id_key" ON "IqpTeam"("id");

-- CreateIndex
CREATE UNIQUE INDEX "IqpTeam_projectId_key" ON "IqpTeam"("projectId");

-- CreateIndex
CREATE UNIQUE INDEX "IqpEntity_id_key" ON "IqpEntity"("id");

-- CreateIndex
CREATE UNIQUE INDEX "validEmails_id_key" ON "validEmails"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Maintainer_id_key" ON "Maintainer"("id");

-- CreateIndex
CREATE UNIQUE INDEX "AutoSlideshow_id_key" ON "AutoSlideshow"("id");

-- CreateIndex
CREATE UNIQUE INDEX "color_id_key" ON "color"("id");

-- CreateIndex
CREATE UNIQUE INDEX "caption_id_key" ON "caption"("id");

-- CreateIndex
CREATE UNIQUE INDEX "picture_id_key" ON "picture"("id");

-- CreateIndex
CREATE UNIQUE INDEX "link_id_key" ON "link"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "OpenDataSection_id_key" ON "OpenDataSection"("id");

-- AddForeignKey
ALTER TABLE "Dataurl" ADD CONSTRAINT "Dataurl_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IqpTeam" ADD CONSTRAINT "IqpTeam_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IqpEntity" ADD CONSTRAINT "IqpEntity_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "IqpTeam"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "color" ADD CONSTRAINT "color_SlideShowId_fkey" FOREIGN KEY ("SlideShowId") REFERENCES "AutoSlideshow"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "caption" ADD CONSTRAINT "caption_SlideShowId_fkey" FOREIGN KEY ("SlideShowId") REFERENCES "AutoSlideshow"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "picture" ADD CONSTRAINT "picture_SlideShowId_fkey" FOREIGN KEY ("SlideShowId") REFERENCES "AutoSlideshow"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "link" ADD CONSTRAINT "link_SlideShowId_fkey" FOREIGN KEY ("SlideShowId") REFERENCES "AutoSlideshow"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tagsOnProject" ADD CONSTRAINT "tagsOnProject_name_fkey" FOREIGN KEY ("name") REFERENCES "Tag"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tagsOnProject" ADD CONSTRAINT "tagsOnProject_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
