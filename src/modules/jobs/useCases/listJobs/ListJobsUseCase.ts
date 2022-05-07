/* eslint-disable prettier/prettier */
import { inject, injectable } from "tsyringe";

import { Job } from "@modules/jobs/infra/typeorm/entities/Job";
import { IJobsRepository } from "@modules/jobs/repositories/IJobsRepository";


interface IRequest {
  org_id: string;
}

@injectable()
class ListJobsUseCase {
  constructor(
    @inject("JobsRepository")
    private jobsRepository: IJobsRepository
  ) { }

  async execute({ org_id }: IRequest): Promise<Job[]> {
    const jobs = await this.jobsRepository.listJobsByOrgId(org_id);

    return jobs;
  }
}

export { ListJobsUseCase };
