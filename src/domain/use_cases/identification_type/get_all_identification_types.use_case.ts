import { GetAllIdentTypesDto } from '../../dtos/identification_type';
import { IdentificationType } from '../../entities';
import { IdentificationTypeRepository } from '../../repositories';

interface GetAllIdentificationTypesUseCase {
  execute(
    getAllIdentTypesDto: GetAllIdentTypesDto,
  ): Promise<IdentificationType[]>;
}

export class GetAllIdentificationTypes
  implements GetAllIdentificationTypesUseCase
{
  private readonly identificationTypeRepository: IdentificationTypeRepository;

  constructor(identificationTypeRepository: IdentificationTypeRepository) {
    this.identificationTypeRepository = identificationTypeRepository;
  }

  async execute(
    getAllIdentTypesDto: GetAllIdentTypesDto,
  ): Promise<IdentificationType[]> {
    return this.identificationTypeRepository.getAll(getAllIdentTypesDto);
  }
}
