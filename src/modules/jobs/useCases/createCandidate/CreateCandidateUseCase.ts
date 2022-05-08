/* eslint-disable prettier/prettier */
import { inject, injectable } from "tsyringe";

import { Candidate } from "@modules/jobs/infra/typeorm/entities/Candidate";
import { ICandidatesRepository } from "@modules/jobs/repositories/ICandidatesRepository";

interface IRequest {
  candidate_name: string;
  url_profile_linkedin: string;
  url_candidate_cv: string;
  candidate_obs: string;
  candidate_email: string;
  job_id: string;
}

@injectable()
class CreateCandidateUseCase {
  constructor(
    @inject("CandidatesRepository")
    private candidatesRepository: ICandidatesRepository
  ) { }

  async execute({
    candidate_name,
    candidate_email,
    candidate_obs,
    url_candidate_cv,
    url_profile_linkedin,
    job_id,
  }: IRequest): Promise<Candidate> {
    const candidate = await this.candidatesRepository.create({
      candidate_name,
      candidate_email,
      candidate_obs,
      url_candidate_cv,
      url_profile_linkedin,
      job_id,
    });

    return candidate;
  }
}

export { CreateCandidateUseCase };
