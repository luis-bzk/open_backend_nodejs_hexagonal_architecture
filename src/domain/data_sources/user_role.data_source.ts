import { UserRole } from '../entities';
import {
  CreateUserRoleDto,
  DeleteUserRoleDto,
  GetAllUsersRolesDto,
  GetUserRoleDto,
  UpdateUserRoleDto,
} from '../dtos/user_role';

export abstract class UserRoleDataSource {
  abstract create(createUserRoleDto: CreateUserRoleDto): Promise<UserRole>;

  abstract update(updateUserRoleDto: UpdateUserRoleDto): Promise<UserRole>;

  abstract get(getUserRoleDto: GetUserRoleDto): Promise<UserRole>;

  abstract getAll(getAllUsersRoles: GetAllUsersRolesDto): Promise<UserRole[]>;

  abstract delete(deleteUserRoleDto: DeleteUserRoleDto): Promise<UserRole>;
}
