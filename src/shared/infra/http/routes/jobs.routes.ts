import { Router } from "express";

import { CreateJobController } from "@modules/jobs/useCases/createJob/CreateJobController";
import { DeleteJobController } from "@modules/jobs/useCases/deleteJob/DeleteJobController";
import { ListJobsController } from "@modules/jobs/useCases/listJobs/ListJobsController";
import { ListPublishedJobByOrgIdController } from "@modules/jobs/useCases/listPublishedJobByOrgId/ListPublishedJobByOrgIdController";
import { UpdateJobController } from "@modules/jobs/useCases/updateJob/UpdateJobController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const jobsRoutes = Router();
const createJobController = new CreateJobController();
const listJobsController = new ListJobsController();
const updateJobUseCase = new UpdateJobController();
const deleteJobController = new DeleteJobController();
const listPublishedJobByOrgIdController =
  new ListPublishedJobByOrgIdController();

jobsRoutes.get("/", ensureAuthenticated, listJobsController.handle);

jobsRoutes.get("/published", listPublishedJobByOrgIdController.handle);

jobsRoutes.patch("/", ensureAuthenticated, updateJobUseCase.handle);

jobsRoutes.delete("/", ensureAuthenticated, deleteJobController.handle);

jobsRoutes.post("/", ensureAuthenticated, createJobController.handle);

export { jobsRoutes };
