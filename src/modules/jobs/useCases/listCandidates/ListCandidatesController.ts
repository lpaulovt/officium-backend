import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCandidatesUseCase } from "./ListCandidatesUseCase";

class ListCandidatesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.query;

    const listCandidatesUseCase = container.resolve(ListCandidatesUseCase);

    const jobs = await listCandidatesUseCase.execute({ job_id: String(id) });

    return response.status(200).json(jobs);
  }
}

export { ListCandidatesController };
