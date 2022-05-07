/* eslint-disable prettier/prettier */
import { inject, injectable } from "tsyringe";

import { IUserRepository } from "@modules/accounts/repositories/IUsersRepository";

interface IRequest {
  org_id: string;
  org_name: string;
  email: string;
  org_short_descrip: string;
  street: string;
  number: number;
  zipcode: string;
  complement: string;
  city: string;
  state: string;
  district: string;
}

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUserRepository
  ) { }

  async execute({
    org_name,
    email,
    org_short_descrip,
    street,
    number,
    zipcode,
    complement,
    city,
    state,
    district,
    org_id,
  }: IRequest): Promise<void> {
    await this.usersRepository.update({
      org_name,
      email,
      org_short_descrip,
      street,
      number,
      zipcode,
      complement,
      city,
      state,
      district,
      org_id,
    })
  }
}

export { UpdateUserUseCase };
