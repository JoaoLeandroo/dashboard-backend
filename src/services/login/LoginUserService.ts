import prisma from "../../prisma/prisma";
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"

interface LoginUserProps {
    email: string;
    password: string
}

class LoginUserService {
    async execute({ email, password }: LoginUserProps) {
        try {
            const user = await prisma.registerUser.findFirst({
                where: {email: email}
            })

            if(!user) {
                throw new Error("Usuario ou senha incorretos")
            }

            const passwordMatch = await compare(password, user.password)
            if(!passwordMatch) {
                throw new Error("Usuario ou senha incorretos")
            }

            const token = sign(
                {
                    name: user.name,
                    email: user.email,
                },
                process.env.JWT_SECRET,
                {
                    subject: user.id,
                    expiresIn: "30d"
                }
            )

            console.log("LOGADO COM SUCESSO!")
            return {
                id: user.id,
                name: user.name,
                email: user.email,
                age: user.age,
                token: token,
            }
        }catch(err) {
            console.log("OPS! ALGO DEU ERRADO.")
        }
    }
}

export { LoginUserService }