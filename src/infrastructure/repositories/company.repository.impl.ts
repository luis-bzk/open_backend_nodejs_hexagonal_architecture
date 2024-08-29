import {
  CreateCompanyDto,
  DeleteCompanyDto,
  GetAllCompaniesDto,
  GetCompanyDto,
  UpdateCompanyDto,
} from '../../domain/dtos/company';
import { Company } from '../../domain/entities';
import { CompanyDataSource } from '../../domain/data_sources';
import { CompanyRepository } from '../../domain/repositories';

export class CompanyRepositoryImpl implements CompanyRepository {
  private readonly companyDataSource: CompanyDataSource;

  constructor(companyDataSource: CompanyDataSource) {
    this.companyDataSource = companyDataSource;
  }

  create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    return this.companyDataSource.create(createCompanyDto);
  }

  update(updateCompanyDto: UpdateCompanyDto): Promise<Company> {
    return this.companyDataSource.update(updateCompanyDto);
  }

  get(getCompanyDto: GetCompanyDto): Promise<Company> {
    return this.companyDataSource.get(getCompanyDto);
  }

  getAll(getAllCompaniesDto: GetAllCompaniesDto): Promise<Company[]> {
    return this.companyDataSource.getAll(getAllCompaniesDto);
  }

  delete(deleteCompanyDto: DeleteCompanyDto): Promise<Company> {
    return this.companyDataSource.delete(deleteCompanyDto);
  }
}
