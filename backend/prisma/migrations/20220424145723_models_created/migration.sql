-- CreateTable
CREATE TABLE "Authors" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,

    CONSTRAINT "Authors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Projects" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "faculty" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comments" (
    "id" SERIAL NOT NULL,
    "projectId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "comment" TEXT NOT NULL,

    CONSTRAINT "Comments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Authors_id_key" ON "Authors"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Projects_id_key" ON "Projects"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Comments_id_key" ON "Comments"("id");

-- AddForeignKey
ALTER TABLE "Projects" ADD CONSTRAINT "Projects_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Authors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
