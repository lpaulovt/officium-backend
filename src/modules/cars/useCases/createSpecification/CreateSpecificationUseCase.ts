import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private specificationsRepository: ISpecificationRepository) { }

  execute({ name, description }: IRequest): void {
    const specificationAldreadyExists =
      this.specificationsRepository.findByName(name);

    if (specificationAldreadyExists) {
      throw new Error("Specification already exists");
    }
    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
