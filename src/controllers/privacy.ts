import { Request, Response } from "express";

export const privacy = (req: Request, res: Response) => {
   const privacy: string = "privacy";
   res.render('pages/privacy', { privacy });
}