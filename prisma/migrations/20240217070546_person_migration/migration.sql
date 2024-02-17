-- CreateTable
CREATE TABLE "Person" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "experience" TEXT NOT NULL,
    "skills" TEXT[],
    "specializations" TEXT[],
    "references" TEXT NOT NULL,
    "availability" TEXT NOT NULL,
    "personalityTraits" TEXT NOT NULL,
    "additionalInformation" TEXT NOT NULL,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);
