import { Router } from "express";
import { SendEmailController } from "./controllers/sendEmailController";

export const router = Router()

const sendEmailController = new SendEmailController()

router.post('/email/send', sendEmailController.handle)

