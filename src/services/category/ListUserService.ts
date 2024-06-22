import prisma from "../../prisma/prisma"

class ListUserService {
    async execute() {
        const user = await prisma.registerUser.findMany({
            select: {
                name: true,
                email: true,
                age: true,
            }
        })

        return user
    }
}

export { ListUserService }