import { Router } from "express";
import { RegisterUserController } from "./controllers/register/RegisterUserController"

const router = Router()

router.post("/register", new RegisterUserController().handle)

export { router }