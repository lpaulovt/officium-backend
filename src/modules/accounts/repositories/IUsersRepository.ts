import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUpdateUserDTO } from "../dtos/IUpdateUserDTO";
import { User } from "../infra/typeorm/entities/User";

export interface IListUsers {
  org_name: string;
  org_short_descrip: string;
  city: string;
  state: string;
}

interface IUserRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  update(data: IUpdateUserDTO): Promise<void>;
  delete(id: string): Promise<void>;
  list(): Promise<IListUsers[]>;
}

export { IUserRepository };
