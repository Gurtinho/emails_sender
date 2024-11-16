import { Request, Response } from "express";
import { schemaSendEmail } from "../dtos/schemaSendEmail";
import { SendEmailService } from "../services/sendEmailService";

class SendEmailController {
    async handle(req: Request, res: Response) {
        const { from, to, subject, body } = schemaSendEmail.parse(req.body)

        const sendEmailService = new SendEmailService()

        await sendEmailService.execute({
            from,
            to,
            subject,
            body
        })

        res.status(200).json({
            'status': 'ok',
            'message': 'Email enviado com sucesso'
        })
    }
}

export { SendEmailController }