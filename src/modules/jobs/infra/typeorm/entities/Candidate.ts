import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";

import { Job } from "./Job";

@Entity("candidates")
class Candidate {
  @PrimaryColumn()
  id: string;

  @Column()
  candidate_name: string;

  @Column()
  url_profile_linkedin: string;

  @Column()
  url_candidate_cv: string;

  @Column()
  candidate_obs: string;

  @Column()
  candidate_email: string;

  @ManyToOne(() => Job)
  @JoinColumn({ name: "job_id" })
  category: Job;

  @Column()
  job_id: string;

  @CreateDateColumn()
  created_at: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Candidate };
