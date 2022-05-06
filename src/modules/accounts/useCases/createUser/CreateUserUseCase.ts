/* eslint-disable prettier/prettier */
import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUserRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUserRepository
  ) { }

  async execute({
    org_name,
    email,
    password,
    org_short_descrip,
    street,
    number,
    zipcode,
    complement,
    city,
    state,
    district,
    id,
  }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError("User already exists");

    }

    const passwordHash = await hash(password, 8);
    await this.usersRepository.create({
      org_name,
      email,
      password: passwordHash,
      org_short_descrip,
      street,
      number,
      zipcode,
      complement,
      city,
      state,
      district,
      id,
    });
  }
}

export { CreateUserUseCase };
