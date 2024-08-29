import { Company } from '../../entities';
import { GetAllCompaniesDto } from '../../dtos/company';
import { CompanyRepository } from '../../repositories';

interface GetAllCompaniesUseCase {
  execute(getAllCompaniesDto: GetAllCompaniesDto): Promise<Company[]>;
}

export class GetAllCompanies implements GetAllCompaniesUseCase {
  private readonly companyRepository: CompanyRepository;

  constructor(companyRepository: CompanyRepository) {
    this.companyRepository = companyRepository;
  }

  async execute(getAllCompaniesDto: GetAllCompaniesDto): Promise<Company[]> {
    return this.companyRepository.getAll(getAllCompaniesDto);
  }
}
