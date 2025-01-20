import { prisma } from "../utils/prisma"

export const newContact = async (
     name:string,
     email: string,
     phone: string,
     perg1: string,
     perg2: string,
     perg3: string,
     perg4: string,
     communication: string,
     description: string
    ) => {

   const contact = prisma.contato.create({
        data:{
         name: name,
         email: email,
         fone: phone,
         perg1: perg1,
         perg2: perg2,
         perg3: perg3,
         perg4: perg4,
         comunicacao: communication,
         descricao: description
        }
      });
      return contact;
}