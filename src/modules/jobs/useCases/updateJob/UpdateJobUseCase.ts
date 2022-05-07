/* eslint-disable prettier/prettier */
import { inject, injectable } from "tsyringe";

import { IJobsRepository } from "@modules/jobs/repositories/IJobsRepository";


interface IRequest {
  job_id: string;
  job_title: string;
  job_category_name: string;
  job_type: string;
  is_remote: boolean;
  city: string;
  state: string;
}

@injectable()
class UpdateJobUseCase {
  constructor(
    @inject("JobsRepository")
    private jobsRepository: IJobsRepository
  ) { }

  async execute({
    job_id,
    job_title,
    job_category_name,
    job_type,
    is_remote,
    city,
    state,
  }: IRequest): Promise<void> {
    await this.jobsRepository.updateJob({
      job_id,
      job_title,
      job_category_name,
      job_type,
      is_remote,
      city,
      state,
    })
  }
}

export { UpdateJobUseCase };
