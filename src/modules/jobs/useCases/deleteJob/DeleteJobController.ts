import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteJobUseCase } from "./DeleteJobUseCase";

class DeleteJobController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { job_id } = request.query;

    const deleteJobUseCase = container.resolve(DeleteJobUseCase);

    await deleteJobUseCase.execute({ job_id: String(job_id) });

    return response.status(200).send();
  }
}

export { DeleteJobController };
