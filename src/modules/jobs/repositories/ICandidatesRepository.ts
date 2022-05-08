import { ICreateCandidateDTO } from "../dtos/ICreateCandidateDTO";
import { Candidate } from "../infra/typeorm/entities/Candidate";

interface ICandidatesRepository {
  create(data: ICreateCandidateDTO): Promise<Candidate>;
  listCandidatesByJob(job_id: string): Promise<Candidate[]>;
}

export { ICandidatesRepository };
