import { Request, Response } from "express";

export const error = (req: Request, res: Response) => {
    res.render('pages/error404');
}