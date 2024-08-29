import {
  CreateUserRoleDto,
  DeleteUserRoleDto,
  GetAllUsersRolesDto,
  GetUserRoleDto,
  UpdateUserRoleDto,
} from '../dtos/user_role';
import { UserRole } from '../entities';

export abstract class UserRoleRepository {
  abstract create(createUserRoleDto: CreateUserRoleDto): Promise<UserRole>;

  abstract update(updateUserRoleDto: UpdateUserRoleDto): Promise<UserRole>;

  abstract get(getUserRoleDto: GetUserRoleDto): Promise<UserRole>;

  abstract getAll(
    getAllUsersRolesDto: GetAllUsersRolesDto,
  ): Promise<UserRole[]>;

  abstract delete(deleteUserRoleDto: DeleteUserRoleDto): Promise<UserRole>;
}
