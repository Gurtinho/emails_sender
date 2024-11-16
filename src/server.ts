import express, { Request, Response, NextFunction } from 'express'
import { router } from './routes'
import 'dotenv/config'
import { AppError } from './appError'

export const app = express()

app.use(express.json())
app.use(router)

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            message: err.message
        })
    }
    return response.status(500).json({
        status: 'Error',
        message: `Internal Server Error: ${err.message}`
    })
});

app.listen(process.env.PORT, () => {
    console.log('Aplicação de emails funcionando')
})