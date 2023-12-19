-- CreateTable
CREATE TABLE "filter" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "open" BOOLEAN NOT NULL,
    "type" VARCHAR(255) NOT NULL,
    "options" JSONB[],

    CONSTRAINT "filter_pkey" PRIMARY KEY ("id")
);
