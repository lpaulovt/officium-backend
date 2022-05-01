/* eslint-disable prettier/prettier */
import { inject, injectable } from "tsyringe";

import { ICarsImageRepository } from "@modules/cars/repositories/ICarsImageRepository";

interface IRequest {
  car_id: string;
  images_name: string[];
}

@injectable()
class UploadCarImagesUseCase {
  constructor(
    @inject("CarsImagesRepository")
    private carsImageUseCaseRepository: ICarsImageRepository
  ) { }
  async execute({ car_id, images_name }: IRequest): Promise<void> {

    images_name.map(async images => {
      await this.carsImageUseCaseRepository.create(car_id, images);
    })
  }
}

export { UploadCarImagesUseCase };
