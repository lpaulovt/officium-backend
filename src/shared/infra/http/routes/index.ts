import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { passwordsRoutes } from "./password.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/password", passwordsRoutes);
router.use(authenticateRoutes);

export { router };
