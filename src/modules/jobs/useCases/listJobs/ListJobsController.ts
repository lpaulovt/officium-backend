import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListJobsUseCase } from "./ListJobsUseCase";

class ListJobsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const listJobsUseCase = container.resolve(ListJobsUseCase);

    const jobs = await listJobsUseCase.execute({ org_id: id });

    return response.status(200).json(jobs);
  }
}

export { ListJobsController };
