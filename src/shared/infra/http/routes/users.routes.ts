import { Router } from "express";

import { CreateUserController } from "@modules/accounts/useCases/createUser/CreateUserController";
import { DeleteUserController } from "@modules/accounts/useCases/deleteUser/DeleteUserController";
import { ListUsersController } from "@modules/accounts/useCases/listUsers/ListUsersController";
import { UpdateUserController } from "@modules/accounts/useCases/updateUser/UpdateUserController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const createUsersController = new CreateUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();
const listUsersController = new ListUsersController();

const usersRoutes = Router();

usersRoutes.get("/", listUsersController.handle);

usersRoutes.post("/", createUsersController.handle);

usersRoutes.patch("/", ensureAuthenticated, updateUserController.handle);

usersRoutes.delete("/", ensureAuthenticated, deleteUserController.handle);

export { usersRoutes };
