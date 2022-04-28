/* eslint-disable prettier/prettier */
import { inject, injectable } from "tsyringe";

import { AppError } from "@errors/AppError";
import { ISpecificationRepository } from "@modules/cars/repositories/ISpecificationRepository";


interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(
    @inject("SpecificationRepository")
    private specificationsRepository: ISpecificationRepository) { }

  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAldreadyExists =
      await this.specificationsRepository.findByName(name);

    if (specificationAldreadyExists) {
      throw new AppError("Specification already exists");
    }
    await this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
