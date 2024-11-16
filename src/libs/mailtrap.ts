import { MailtrapClient } from "mailtrap";

type ToEmail = {
    name?: string
    email: string
}

type FromEmail = {
    name: string
    email: string
}

export const sendEmail = async (from: FromEmail, to: ToEmail[], subject: string, body: string) => {

    const options = {
        token: process.env.MAILTRAP_TOKEN as string,
    }
    process.env.NODE_ENV == 'dev' && Object.assign(options, {
        testInboxId: process.env.MAILTRAP_INBOXID
    })

    const mailtrap = new MailtrapClient(options)

    try {
        let toSendMail: ToEmail[] = []
        to.map((user) => {
            toSendMail.push({
                email: user.email
            })
        })

        await mailtrap.testing.send({
            from: { name: from.name, email: from.email },
            to: toSendMail,
            subject,
            text: body,
            html: body
        });

    } catch {
        return false
    }
}