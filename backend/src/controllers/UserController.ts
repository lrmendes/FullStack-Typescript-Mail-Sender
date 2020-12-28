import { Request, response, Response, Send } from 'express';
import EmailService from '../services/EmailService';

const userMail = "lrmen14@gmail.com"

interface SendMailForm {
    from: string,
    to: string,
    subject: string,
    html: string,
}

export default {
    async userMail(req: Request, res: Response) {
        return res.status(200).send(userMail);
    },

    async sendMail(req:Request, res: Response) {

        const mailData: SendMailForm = {
            from: req.body.from,
            to: req.body.to,
            subject: req.body.subject,
            html: req.body.html
        };

        const emailService = new EmailService({
            from: userMail,
            to: mailData.to,
            message: {
                subject: mailData.subject,
                html: mailData.html
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