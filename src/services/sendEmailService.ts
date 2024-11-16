import { SchemaSendEmail } from "../dtos/schemaSendEmail";
import { sendEmail } from "../libs/mailtrap";

export class SendEmailService {
    async execute({ from, to, subject, body }: SchemaSendEmail) {
        try {
            await sendEmail(from, to, subject, body)
        } catch {
            throw new Error('Erro ao enviar email')
        }
    }
}