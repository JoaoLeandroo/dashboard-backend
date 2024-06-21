import { Request, Response } from "express"
import { RegisterUserService } from "../../services/register/RegisterUserService"

class RegisterUserController {
    async handle(request: Request, response: Response) {
        const { name, email, age, password } = request.body
        const registerUserService = new RegisterUserService()
        const user = await registerUserService.execute({
            name,
            email,
            age,
            password,
        })

        return response.json(user)
    }
}

export { RegisterUserController }