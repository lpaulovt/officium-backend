import { Router } from "express";

import { CreateRentalController } from "@modules/rentals/useCases/createRental/CreateRentalController";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const createRentalController = new CreateRentalController();
const rentalsRoutes = Router();

rentalsRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createRentalController.handle
);

export { rentalsRoutes };
