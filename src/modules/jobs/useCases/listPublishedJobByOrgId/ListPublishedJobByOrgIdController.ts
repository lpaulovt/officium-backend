import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListPublishedJobByOrgIdUseCase } from "./ListPublishedJobByOrgIdUseCase";

class ListPublishedJobByOrgIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.query;

    const listJobsUseCase = container.resolve(ListPublishedJobByOrgIdUseCase);

    const jobs = await listJobsUseCase.execute({ org_id: String(id) });

    return response.status(200).json(jobs);
  }
}

export { ListPublishedJobByOrgIdController };
