import { Router } from "express";
import { RegisterUserController } from "./controllers/register/RegisterUserController"
import { LoginUserController } from "./controllers/login/LoginUserController";

const router = Router()

router.post("/register", new RegisterUserController().handle)
router.get("/login", new LoginUserController().handle)

export { router }