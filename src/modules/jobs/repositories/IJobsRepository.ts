import { Job } from "../infra/typeorm/entities/Job";

interface IJobsRepository {
  create(data: ICreateJobDTO): Promise<Job>;
  listJobsByOrgId(org_id: string): Promise<Job[]>;
  update(data: IUpdateJobDTO): Promise<void>;
  delete(job_id: string): Promise<void>;
}

export { IJobsRepository };
