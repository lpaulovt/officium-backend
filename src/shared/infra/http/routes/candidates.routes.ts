import { Router } from "express";

import { CreateCandidateController } from "@modules/jobs/useCases/createCandidate/CreateCandidateController";
import { ListCandidatesController } from "@modules/jobs/useCases/listCandidates/ListCandidatesController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const candidatesRoutes = Router();

const createCandidateController = new CreateCandidateController();

const listCandidatesController = new ListCandidatesController();

candidatesRoutes.post("/", createCandidateController.handle);

candidatesRoutes.get("/", ensureAuthenticated, listCandidatesController.handle);

export { candidatesRoutes };
