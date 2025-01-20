import { Request, Response } from "express";

export const faq = (req: Request, res: Response) => {
   let footer: boolean = false;
   const faq: boolean = true;

   res.render('pages/faq', {footer, faq});
}
