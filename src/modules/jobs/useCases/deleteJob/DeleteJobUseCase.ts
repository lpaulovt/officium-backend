/* eslint-disable prettier/prettier */
import { inject, injectable } from "tsyringe";

import { IJobsRepository } from "@modules/jobs/repositories/IJobsRepository";

interface IRequest {
  job_id: string;
}

@injectable()
class DeleteJobUseCase {
  constructor(
    @inject("JobsRepository")
    private jobsRepository: IJobsRepository
  ) { }

  async execute({ job_id }: IRequest): Promise<void> {
    await this.jobsRepository.delete(job_id);
  }
}

export { DeleteJobUseCase };
