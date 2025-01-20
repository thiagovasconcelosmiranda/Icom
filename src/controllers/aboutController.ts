import { Request, Response } from "express";

export const about = (req: Request, res: Response) => {
   const about: boolean = true;
   res.render('pages/about', { about });
}