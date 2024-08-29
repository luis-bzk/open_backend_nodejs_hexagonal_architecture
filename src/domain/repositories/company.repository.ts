import { Company } from '../entities';

import {
  CreateCompanyDto,
  DeleteCompanyDto,
  GetAllCompaniesDto,
  GetCompanyDto,
  UpdateCompanyDto,
} from '../dtos/company';

export abstract class CompanyRepository {
  abstract create(createCompanyDto: CreateCompanyDto): Promise<Company>;

  abstract update(updateCompanyDto: UpdateCompanyDto): Promise<Company>;

  abstract get(getCompanyDto: GetCompanyDto): Promise<Company>;

  abstract getAll(getAllCompaniesDto: GetAllCompaniesDto): Promise<Company[]>;

  abstract delete(deleteCompanyDto: DeleteCompanyDto): Promise<Company>;
}
