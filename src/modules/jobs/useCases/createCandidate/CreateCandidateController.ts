import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCandidateUseCase } from "./CreateCandidateUseCase";

class CreateCandidateController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      candidate_name,
      candidate_email,
      candidate_obs,
      url_candidate_cv,
      url_profile_linkedin,
      job_id,
    } = request.body;

    const createCandidateUseCase = container.resolve(CreateCandidateUseCase);

    const candidate = await createCandidateUseCase.execute({
      candidate_name,
      candidate_email,
      candidate_obs,
      url_candidate_cv,
      url_profile_linkedin,
      job_id,
    });

    return response.status(201).json(candidate);
  }
}

export { CreateCandidateController };
