/* eslint-disable prettier/prettier */
import { inject, injectable } from "tsyringe";

import { IUserRepository } from "@modules/accounts/repositories/IUsersRepository";


interface IRequest {
  id: string;
}

@injectable()
class DeleteUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUserRepository
  ) { }

  async execute({ id }: IRequest): Promise<void> {
    await this.usersRepository.delete(id);
  }
}

export { DeleteUserUseCase };
