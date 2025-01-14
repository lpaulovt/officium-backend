import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { candidatesRoutes } from "./candidates.routes";
import { jobsRoutes } from "./jobs.routes";
import { passwordsRoutes } from "./password.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/password", passwordsRoutes);
router.use("/jobs", jobsRoutes);
router.use("/candidates", candidatesRoutes);

router.use(authenticateRoutes);

export { router };
