import { Request, Response } from "express";
import { pagAll, pagFind } from '../services/blog';
import { prisma } from "../utils/prisma";

export const create = async () => {
     await prisma.blog.create({
        data: {
            imagem: 'images-empresa.jpg',
            titulo: 'Central de Libras do  Governo do Distrito Federal – GDF',
            descricao: 'Ajuste-se à nova regulamentação com o SAC Libras',
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


