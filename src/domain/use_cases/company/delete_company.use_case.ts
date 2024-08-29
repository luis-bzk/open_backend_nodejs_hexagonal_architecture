import { Company } from '../../entities';
import { DeleteCompanyDto } from '../../dtos/company';
import { CompanyRepository } from '../../repositories';

interface DeleteCompanyUseCase {
  execute(deleteCompanyDto: DeleteCompanyDto): Promise<Company>;
}

export class DeleteCompany implements DeleteCompanyUseCase {
  private readonly companyRepository: CompanyRepository;

  constructor(companyRepository: CompanyRepository) {
    this.companyRepository = companyRepository;
  }

  async execute(deleteCompanyDto: DeleteCompanyDto): Promise<Company> {
    return this.companyRepository.delete(deleteCompanyDto);
  }
}
