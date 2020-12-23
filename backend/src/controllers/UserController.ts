import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
    { name: 'Lucas', email: 'lrmen14@gmail.com'}
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async sendMail(req:Request, res: Response) {
        const emailService = new EmailService({
            from: 'lrmen14@gmail.com',
            to: 'lrmen14@gmail.com',
            message: {
                subject: 'Welcome to TS',
                body: 'Hello, this is the body of e-mail message.'
            }
        });
        let result = await emailService.sendMail();
        if (result.code == 200) {
            return res.status(200).send({data: result.data});
        } else {
            return res.status(result.code).send({data: result.data});
        }
    },
}