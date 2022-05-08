import { container } from "tsyringe";

import "@shared/container/providers";
import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { UsersTokensRepository } from "@modules/accounts/infra/typeorm/repositories/UsersTokensRepository";
import { IUserRepository } from "@modules/accounts/repositories/IUsersRepository";
import { IUsersTokensRepository } from "@modules/accounts/repositories/IUserTokensRepository";
import { CandidatesRepository } from "@modules/jobs/infra/typeorm/repositories/CandidatesRepository";
import { JobsRepository } from "@modules/jobs/infra/typeorm/repositories/JobsRepository";
import { ICandidatesRepository } from "@modules/jobs/repositories/ICandidatesRepository";
import { IJobsRepository } from "@modules/jobs/repositories/IJobsRepository";

container.registerSingleton<IUserRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IUsersTokensRepository>(
  "UsersTokensRepository",
  UsersTokensRepository
);

container.registerSingleton<IJobsRepository>("JobsRepository", JobsRepository);

container.registerSingleton<ICandidatesRepository>(
  "CandidatesRepository",
  CandidatesRepository
);
