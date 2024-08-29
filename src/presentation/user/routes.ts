import { Router } from 'express';

import { UserController } from './controller';
import { UserDataSourceImpl } from '../../infrastructure/data_sources';
import { UserRepositoryImpl } from '../../infrastructure/repositories';

export class UserRoutes {
  static get getRoutes(): Router {
    const router = Router();

    const dataSource = new UserDataSourceImpl();
    const repository = new UserRepositoryImpl(dataSource);
    const controller = new UserController(repository);

    // routes
    router.post('/create', controller.createUser);
    router.put('/update/:id', controller.updateUser);
    router.get('/get/:id/company/:id_company', controller.getUser);
    router.get('/get-all/:id_company', controller.createUser);
    router.delete('/delete/:id/company/:id_company', controller.createUser);

    return router;
  }
}
