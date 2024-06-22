import { Router } from "express";
import { RegisterUserController } from "./controllers/register/RegisterUserController"
import { LoginUserController } from "./controllers/login/LoginUserController";
import { ListUserController } from "./controllers/category/ListUserController";
import { IsAuthenticated } from "./middlewares/IsAuthenticated";

const router = Router()

router.post("/register", new RegisterUserController().handle)
router.get("/login", new LoginUserController().handle)
router.get("/list", IsAuthenticated ,new ListUserController().handle)

export { router }