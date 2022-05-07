import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUpdateUserDTO } from "@modules/accounts/dtos/IUpdateUserDTO";
import {
  IListUsers,
  IUserRepository,
} from "@modules/accounts/repositories/IUsersRepository";

import { User } from "../entities/User";

class UsersRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }
  async create({
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
    const user = this.repository.create({
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
    });

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });
    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);
    return user;
  }

  async update({
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
  }: IUpdateUserDTO): Promise<void> {
    await this.repository
      .createQueryBuilder()
      .update()
      .set({
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
      })
      .where("id = :id", { id: org_id })
      .execute();
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete({ id });
  }

  async list(): Promise<IListUsers[]> {
    const users = await this.repository
      .createQueryBuilder("users")
      .select([
        "users.org_name",
        "users.org_short_descrip",
        "users.state",
        "users.city",
      ])
      .getMany();

    return users;
  }
}

export { UsersRepository };
