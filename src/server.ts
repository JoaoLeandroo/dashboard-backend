import express, { NextFunction, Request, Response } from "express"
import { router } from "./router"
const app = express()

app.use(express.json())
app.use(router)

app.use((err:Error, req:Request, res:Response, next:NextFunction) => {
    if(err instanceof Error) {
        return res.status(400).json({
            message: err.message
        })
    }

    return res.status(500).json({
        status: "error",
        message: "Internal server error"
    })

})

app.listen(3333, () => console.log("servidor rodando na porta 3333"))