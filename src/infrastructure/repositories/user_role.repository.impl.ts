import {
  CreateUserRoleDto,
  DeleteUserRoleDto,
  GetAllUsersRolesDto,
  GetUserRoleDto,
  UpdateUserRoleDto,
} from '../../domain/dtos/user_role';
import { UserRole } from '../../domain/entities';
import { UserRoleDataSource } from '../../domain/data_sources';
import { UserRoleRepository } from '../../domain/repositories';

export class UserRoleRepositoryImpl implements UserRoleRepository {
  private readonly userRoleDataSource: UserRoleDataSource;

  constructor(userRoleDataSource: UserRoleDataSource) {
    this.userRoleDataSource = userRoleDataSource;
  }

  create(createUserRoleDto: CreateUserRoleDto): Promise<UserRole> {
    return this.userRoleDataSource.create(createUserRoleDto);
  }

  update(updateUserRoleDto: UpdateUserRoleDto): Promise<UserRole> {
    return this.userRoleDataSource.update(updateUserRoleDto);
  }

  get(getUserRoleDto: GetUserRoleDto): Promise<UserRole> {
    return this.userRoleDataSource.get(getUserRoleDto);
  }

  getAll(getAllUsersRolesDto: GetAllUsersRolesDto): Promise<UserRole[]> {
    return this.userRoleDataSource.getAll(getAllUsersRolesDto);
  }

  delete(deleteUserRoleDto: DeleteUserRoleDto): Promise<UserRole> {
    return this.userRoleDataSource.delete(deleteUserRoleDto);
  }
}
