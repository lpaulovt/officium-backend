/* eslint-disable prettier/prettier */
import { inject, injectable } from "tsyringe";

import { Candidate } from "@modules/jobs/infra/typeorm/entities/Candidate";
import { ICandidatesRepository } from "@modules/jobs/repositories/ICandidatesRepository";

interface IRequest {
  job_id: string;
}

@injectable()
class ListCandidatesUseCase {
  constructor(
    @inject("CandidatesRepository")
    private candidatesRepository: ICandidatesRepository
  ) { }

  async execute({ job_id }: IRequest): Promise<Candidate[]> {
    const candidates = await this.candidatesRepository.listCandidatesByJob(job_id);

    return candidates;
  }
}

export { ListCandidatesUseCase };
