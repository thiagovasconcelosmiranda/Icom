import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
    let title: string = "ICON - LIBRAS";
    let footer: boolean = true;
    const home: boolean = true;

    res.render('pages/home',{ title, footer , home});
}