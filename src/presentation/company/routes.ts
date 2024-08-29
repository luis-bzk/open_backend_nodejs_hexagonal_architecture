import { Router } from 'express';
import { CompanyDataSourceImpl } from '../../infrastructure/data_sources';
import { CompanyRepositoryImpl } from '../../infrastructure/repositories';
import { CompanyController } from './controller';

export class CompanyRoutes {
  static get getRoutes(): Router {
    const router = Router();

    const dataSource = new CompanyDataSourceImpl();
    const repository = new CompanyRepositoryImpl(dataSource);
    const controller = new CompanyController(repository);

    // routes
    router.post('/create', controller.createCompany);
    router.put('/update/:id', controller.updateCompany);
    router.get('/get/:id', controller.getCompany);
    router.get('/get-all', controller.getAllCompanies);
    router.delete('/delete/:id', controller.deleteCompany);

    return router;
  }
}
