import { Router } from "express";

import { CreateUserController } from "@modules/accounts/useCases/createUser/CreateUserController";

const createUsersController = new CreateUserController();

const usersRoutes = Router();

usersRoutes.post("/", createUsersController.handle);

export { usersRoutes };
