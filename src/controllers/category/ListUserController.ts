import { Request, Response } from "express";
import { ListUserService } from "../../services/category/ListUserService";

class ListUserController {
    async handle(request: Request, response: Response) {
        const listUserService = new ListUserService()
        const list = await listUserService.execute()

        return response.json(list)
    }
}

export { ListUserController }