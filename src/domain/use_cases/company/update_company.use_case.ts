import { Company } from '../../entities';
import { UpdateCompanyDto } from '../../dtos/company';
import { CompanyRepository } from '../../repositories';

interface UpdateCompanyUseCase {
  execute(updateCompanyDto: UpdateCompanyDto): Promise<Company>;
}

export class UpdateCompany implements UpdateCompanyUseCase {
  private readonly companyRepository: CompanyRepository;

  constructor(companyRepository: CompanyRepository) {
    this.companyRepository = companyRepository;
  }

  async execute(updateCompanyDto: UpdateCompanyDto): Promise<Company> {
    return this.companyRepository.update(updateCompanyDto);
  }
}
