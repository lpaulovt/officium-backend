import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateJobUseCase } from "./UpdateJobUseCase";

class UpdateJobController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      job_id,
      job_title,
      job_category_name,
      job_type,
      is_remote,
      city,
      state,
      job_description,
    } = request.body;

    const updateJobUseCase = container.resolve(UpdateJobUseCase);

    await updateJobUseCase.execute({
      job_id,
      job_title,
      job_category_name,
      job_type,
      is_remote,
      city,
      state,
      job_description,
    });

    return response.status(200).send();
  }
}

export { UpdateJobController };
