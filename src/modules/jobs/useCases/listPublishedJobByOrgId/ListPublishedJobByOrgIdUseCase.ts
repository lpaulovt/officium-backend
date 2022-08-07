/* eslint-disable prettier/prettier */
import { inject, injectable } from "tsyringe";

import { Job } from "@modules/jobs/infra/typeorm/entities/Job";
import { IJobsRepository } from "@modules/jobs/repositories/IJobsRepository";


interface IRequest {
  org_id: string;
}

@injectable()
class ListPublishedJobByOrgIdUseCase {
  constructor(
    @inject("JobsRepository")
    private jobsRepository: IJobsRepository
  ) { }

  async execute({ org_id }: IRequest): Promise<Job[]> {
    const jobs = await this.jobsRepository.listPublishedJobsByOrgId(org_id);

    return jobs;
  }
}

export { ListPublishedJobByOrgIdUseCase };
