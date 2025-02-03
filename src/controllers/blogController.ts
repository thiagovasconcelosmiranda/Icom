import { Request, Response } from "express";
import { pagAll, pagFind } from '../services/blog';
import { prisma } from "../utils/prisma";

export const create = async () => {
     await prisma.blog.create({
        data: {
            imagem: 'image-icom2.jpg',
            titulo: 'Decreto SAC: sua empresa precisa se adaptar agora mesmo',
            descricao: 'O Decreto SAC é uma medida que tem o objetivo de regular as empresas de atendimento ao cliente. Quer saber mais? Então confira.',
            data: '20/01/2025'
        }
     });
}

export const blog = async (req: Request, res: Response) => {
    const blog: boolean = true;
    res.render('pages/blog', {blog});
}

export const blogPag = async (req: Request, res: Response) => {
    if (req.params.namePage === 'Blog') {
        await pagAll(req, res);
    } else {
        await pag(req, res);
    }
};

const pag = async (req: Request, res: Response) => {
    const skip = Number(req?.params?.pag) || 0;
    const take = 3;
    const blog = await pagFind(skip, take);
    return res.json(blog);
}


