import { Request, Response } from "express";
import { newContact } from "../services/contact";

export const contact = (req: Request, res: Response) => {
    const contact: boolean = true;
  res.render('pages/contact', {contact});
}

export const addContact = async (req: Request, res: Response) => {
    let title = 'home';
    let flash = '';

    let { name, email, phone, perg1, perg2, perg3, perg4, communication, description } = req.body;

    if (name && email && phone &&
        perg1 && perg2 && perg3 && perg4
    ) {
        let desc = description ? description : 'vazio';
        let com = communication ? communication : 'vazio';

        let contato = await newContact(
            name,
            email,
            phone,
            perg1,
            perg2,
            perg3,
            perg4,
            com,
            desc
        );

        if (contato) {
            flash = 'Adicionado com sucesso!';
        }
    }
    res.render('pages/home', [title, flash]);
}

export const createContact = (req: Request, res: Response) => {
    return;
}