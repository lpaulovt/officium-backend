import { getRepository, Repository } from "typeorm";

import { IJobsRepository } from "@modules/jobs/repositories/IJobsRepository";

import { Job } from "../entities/Job";

class JobsRepository implements IJobsRepository {
  private repository: Repository<Job>;

  constructor() {
    this.repository = getRepository(Job);
  }

  async create({
    job_title,
    job_category_name,
    job_type,
    is_remote,
    city,
    state,
    org_id,
    job_description,
  }: ICreateJobDTO): Promise<Job> {
    const job = this.repository.create({
      job_title,
      job_category_name,
      job_type,
      is_remote,
      city,
      state,
      org_id,
      job_description,
    });

    await this.repository.save(job);

    return job;
  }

  async listJobsByOrgId(org_id: string): Promise<Job[]> {
    const jobs = await this.repository.find({ org_id });

    return jobs;
  }

  // TODO check if org_id is equal
  async update({
    job_title,
    job_category_name,
    job_type,
    is_remote,
    city,
    state,
    job_id,
    job_description,
  }: IUpdateJobDTO): Promise<void> {
    await this.repository
      .createQueryBuilder()
      .update()
      .set({
        job_title,
        job_category_name,
        job_type,
        is_remote,
        city,
        state,
        job_description,
      })
      .where("id = :id", { id: job_id })
      .execute();
  }

  async delete(job_id: string): Promise<void> {
    await this.repository.delete({ id: job_id });
  }

  async listPublishedJobsByOrgId(org_id: string): Promise<Job[]> {
    const jobs = await this.repository.find({
      select: [
        "id",
        "job_title",
        "job_category_name",
        "job_type",
        "job_description",
        "is_remote",
        "city",
        "state",
        "org_id",
        "created_at",
      ],
      where: { org_id },
    });

    return jobs;
  }
}

export { JobsRepository };
