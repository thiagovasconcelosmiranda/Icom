import { Request, Response } from "express";

export const digital = (req: Request, res: Response) => {
    let title: string = 'ICOM Digital - ICOM';
    
    res.render('pages/digital',{title});
}