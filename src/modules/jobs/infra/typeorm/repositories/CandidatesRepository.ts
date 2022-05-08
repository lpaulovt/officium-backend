import { getRepository, Repository } from "typeorm";

import { ICreateCandidateDTO } from "@modules/jobs/dtos/ICreateCandidateDTO";
import { ICandidatesRepository } from "@modules/jobs/repositories/ICandidatesRepository";

import { Candidate } from "../entities/Candidate";

class CandidatesRepository implements ICandidatesRepository {
  private repository: Repository<Candidate>;

  constructor() {
    this.repository = getRepository(Candidate);
  }

  async create({
    candidate_name,
    candidate_email,
    candidate_obs,
    url_candidate_cv,
    url_profile_linkedin,
    job_id,
  }: ICreateCandidateDTO): Promise<Candidate> {
    const candidate = this.repository.create({
      candidate_name,
      candidate_email,
      candidate_obs,
      url_candidate_cv,
      url_profile_linkedin,
      job_id,
    });

    await this.repository.save(candidate);

    return candidate;
  }

  async listCandidatesByJob(job_id: string): Promise<Candidate[]> {
    const candidates = await this.repository.find({ job_id });

    return candidates;
  }
}

export { CandidatesRepository };
