/* eslint-disable prettier/prettier */
import { inject, injectable } from "tsyringe";

import { Job } from "@modules/jobs/infra/typeorm/entities/Job";
import { IJobsRepository } from "@modules/jobs/repositories/IJobsRepository";

interface IRequest {
  job_title: string;
  job_category_name: string;
  job_type: string;
  job_description: string;
  is_remote: boolean;
  city: string;
  state: string;
  org_id: string;
}

@injectable()
class CreateJobUseCase {
  constructor(
    @inject("JobsRepository")
    private jobsRepository: IJobsRepository
  ) { }
  async execute({
    job_title,
    job_category_name,
    job_type,
    is_remote,
    city,
    state,
    org_id,
    job_description,
  }: IRequest): Promise<Job> {
    const job = await this.jobsRepository.create({
      job_title,
      job_category_name,
      job_type,
      is_remote,
      city,
      state,
      org_id,
      job_description,
    })

    return job;
  }
}

export { CreateJobUseCase };
