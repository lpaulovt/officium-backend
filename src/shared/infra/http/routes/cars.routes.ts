import { Router } from "express";

import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";

const createUsersController = new CreateCarController();

const carsRoutes = Router();

carsRoutes.post("/", createUsersController.handle);

export { carsRoutes };
