import {
  CreateIdentTypeDto,
  DeleteIdentTypeDto,
  GetAllIdentTypesDto,
  GetIdentTypeDto,
  UpdateIdentTypeDto,
} from '../dtos/identification_type';
import { IdentificationType } from '../entities';

export abstract class IdentificationTypeRepository {
  abstract create(
    createIdentTypeDto: CreateIdentTypeDto,
  ): Promise<IdentificationType>;

  abstract update(
    updateIdentTypeDto: UpdateIdentTypeDto,
  ): Promise<IdentificationType>;

  abstract get(getIdentTypeDto: GetIdentTypeDto): Promise<IdentificationType>;

  abstract getAll(
    getAllIdentTypesDto: GetAllIdentTypesDto,
  ): Promise<IdentificationType[]>;

  abstract delete(
    deleteIdentTypeDto: DeleteIdentTypeDto,
  ): Promise<IdentificationType>;
}
