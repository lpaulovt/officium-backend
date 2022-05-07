/* eslint-disable prettier/prettier */
import { inject, injectable } from "tsyringe";

import {
  IListUsers,
  IUserRepository,
} from "@modules/accounts/repositories/IUsersRepository";

@injectable()
class ListUsersUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUserRepository
  ) { }

  async execute(): Promise<IListUsers[]> {
    const users = await this.usersRepository.list();
    return users;
  }
}

export { ListUsersUseCase };
