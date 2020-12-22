import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
    { name: 'Lucas', email: 'lrmen14@gmail.com'}
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async create(req:Request, res: Response) {
        const emailService = new EmailService();
        emailService.sendMail({
            to: {name: 'Lucas', email: 'joao'},
            message: {subject: 'Welcome to TS', body: 'Hello, this is the body of e-mail message.'}
        });
        
        return res.send();
    }
}