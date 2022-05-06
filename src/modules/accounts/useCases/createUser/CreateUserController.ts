import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
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
    } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);
    await createUserUseCase.execute({
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

    return response.status(201).send();
  }
}

export { CreateUserController };
