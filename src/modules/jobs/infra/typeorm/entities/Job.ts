import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";

import { User } from "@modules/accounts/infra/typeorm/entities/User";

@Entity("jobs")
class Job {
  @PrimaryColumn()
  id: string;

  @Column()
  job_title: string;

  @Column()
  job_category_name: string;

  @Column()
  job_type: string;

  @Column()
  is_remote: boolean;

  @Column()
  city: string;

  @Column()
  state: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "org_id" })
  user: User;

  @Column()
  org_id: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Job };
