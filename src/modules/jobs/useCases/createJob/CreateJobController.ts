import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateJobUseCase } from "./CreateJobUseCase";

class CreateJobController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      job_title,
      job_category_name,
      job_type,
      is_remote,
      city,
      state,
      job_description,
    } = request.body;
    const { id } = request.user;

    const createJobUseCase = container.resolve(CreateJobUseCase);

    const job = await createJobUseCase.execute({
      job_title,
      job_category_name,
      job_type,
      job_description,
      is_remote,
      city,
      state,
      org_id: id,
    });

    return response.status(201).json(job);
  }
}

export { CreateJobController };
