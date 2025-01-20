import { Request, Response } from "express";

export const ServiceCart = (req: Request, res: Response) => {
    var title: string = "Atendimento em Libras - ICON";
    let footer: boolean = false;
    res.render('pages/service-cart', { title, footer });
}