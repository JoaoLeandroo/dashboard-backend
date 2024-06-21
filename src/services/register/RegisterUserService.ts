import prisma from "../../prisma/prisma";
import { hash } from "bcryptjs"

interface RegisterUserProps {
    name: string;
    email: string;
    age: number;
    password: string
}

class RegisterUserService {
    async execute({ name, email, age, password }: RegisterUserProps) {
        try {
            const userAlreadyExists = await prisma.registerUser.findFirst({
                where: { email: email }
            })

            if(userAlreadyExists) {
                throw new Error("Email já cadastrado")
            }

            const passwordHash = await hash(password, 8)

            const user = await prisma.registerUser.create({
                data: {
                    name: name,
                    email: email,
                    age: age,
                    password: passwordHash,
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    age: true,
                }
            })

            return user

        }catch(err) {
            console.log("OPS! ALGO DEU ERRADO.")
        }
    }
}

export { RegisterUserService }