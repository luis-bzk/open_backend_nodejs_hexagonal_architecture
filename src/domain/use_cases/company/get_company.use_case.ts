import { Company } from '../../entities';
import { GetCompanyDto } from '../../dtos/company';
import { CompanyRepository } from '../../repositories';

interface GetCompanyUseCase {
  execute(getCompanyDto: GetCompanyDto): Promise<Company>;
}

export class GetCompany implements GetCompanyUseCase {
  private readonly companyRepository: CompanyRepository;

  constructor(companyRepository: CompanyRepository) {
    this.companyRepository = companyRepository;
  }

  async execute(getCompanyDto: GetCompanyDto): Promise<Company> {
    return this.companyRepository.get(getCompanyDto);
  }
}
