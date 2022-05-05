import { Router } from "express";

import { CreateRentalController } from "@modules/rentals/useCases/createRental/CreateRentalController";
import { DevolutionRentalController } from "@modules/rentals/useCases/devolutionRental/DevolutionRentalController";
import { ListRentalsByUserController } from "@modules/rentals/useCases/listRentalByUser/ListRentalsByUserController";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const createRentalController = new CreateRentalController();
const devolutionRentalController = new DevolutionRentalController();
const listRentalsByUserController = new ListRentalsByUserController();

const rentalsRoutes = Router();

rentalsRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createRentalController.handle
);

rentalsRoutes.post(
  "/devolution/:id",
  ensureAuthenticated,
  ensureAdmin,
  devolutionRentalController.handle
);

rentalsRoutes.get(
  "/user",
  ensureAuthenticated,
  ensureAdmin,
  listRentalsByUserController.handle
);

export { rentalsRoutes };
