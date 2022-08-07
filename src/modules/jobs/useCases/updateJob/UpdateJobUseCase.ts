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
  job_description: string;
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
    job_description
  }: IRequest): Promise<void> {
    await this.jobsRepository.update({
      job_id,
      job_title,
      job_category_name,
      job_type,
      is_remote,
      city,
      state,
      job_description
    })
  }
}

export { UpdateJobUseCase };
