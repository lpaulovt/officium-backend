import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateUserUseCase } from "./UpdateUserUseCase";

class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
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
    } = request.body;

    const { id: org_id } = request.user;

    const updateUserUseCase = container.resolve(UpdateUserUseCase);

    await updateUserUseCase.execute({
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
    });

    return response.status(200).send();
  }
}

export { UpdateUserController };
