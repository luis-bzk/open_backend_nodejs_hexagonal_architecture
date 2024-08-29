import { Company } from '../../entities';
import { CreateCompanyDto } from '../../dtos/company';
import { CompanyRepository } from '../../repositories';

interface CreateCompanyUseCase {
  execute(createCompanyDto: CreateCompanyDto): Promise<Company>;
}

export class CreateCompany implements CreateCompanyUseCase {
  private readonly companyRepository: CompanyRepository;

  constructor(companyRepository: CompanyRepository) {
    this.companyRepository = companyRepository;
  }

  async execute(createCompanyDto: CreateCompanyDto): Promise<Company> {
    return this.companyRepository.create(createCompanyDto);
  }
}
