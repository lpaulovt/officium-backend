import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticationUserUseCase = container.resolve(
      AuthenticateUserUseCase
    );
    const token = await authenticationUserUseCase.execute({
      password,
      email,
    });

    return response.status(200).json(token);
  }
}

export { AuthenticateUserController };
