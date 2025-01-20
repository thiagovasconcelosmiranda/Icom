-- CreateTable
CREATE TABLE "Contatos" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "fone" TEXT NOT NULL,
    "perg1" TEXT NOT NULL,
    "perg2" TEXT NOT NULL,
    "perg3" TEXT NOT NULL,
    "perg4" TEXT NOT NULL,
    "comunicacao" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "Contatos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Blogs" (
    "id" SERIAL NOT NULL,
    "imagem" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "data" TEXT NOT NULL,

    CONSTRAINT "Blogs_pkey" PRIMARY KEY ("id")
);
