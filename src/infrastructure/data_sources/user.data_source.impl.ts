import { Pool } from 'pg';

import {
  CreateUserDto,
  DeleteUserDto,
  GetAllUsersDto,
  GetUserDto,
  UpdateUserDto,
} from '../../domain/dtos/user';
import { User } from '../../domain/entities';
import { PostgresDatabase } from '../../data';
import { GeneratorValues } from '../../utils';
import { CustomError } from '../../domain/errors';
import { BcryptAdapter } from '../../config/bcrypt';
import { UserMapper } from '../mappers/user.mapper';
import { UserDataSource } from '../../domain/data_sources';
import { UserCompanyDB, UserDB } from '../../data/interfaces';

type HashFunction = (password: string) => string;

export class UserDataSourceImpl implements UserDataSource {
  private pool: Pool;
  private readonly hashPassword: HashFunction;

  constructor() {
    this.pool = PostgresDatabase.getPool();
    this.hashPassword = BcryptAdapter.hash;
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { name, lastName, email, id_company } = createUserDto;

    try {
      // search user with same email
      const userEmail = await this.pool.query<UserDB>(
        `select use.use_id,
              use.use_name,
              use.use_last_name,
              use.use_email,
              use.use_password,
              use.use_token,
              use.use_created_date,
              use.use_record_status
        from core.core_user use
        join core.core_user_company uco on use.use_id = uco.id_user
        where use.use_email = $1
          and uco.id_company = $2
          and use.use_record_status = $3;`,
        [email.toLowerCase(), id_company, '0'],
      );
      if (userEmail.rows.length > 0) {
        throw CustomError.conflict(
          `Ya existe un usuario registrado con este correo electrónico`,
        );
      }

      // create user
      const createdUser = await this.pool.query<UserDB>(
        `insert into core.core_user
        (use_name, use_last_name, use_email, use_password, use_token,use_created_date, use_record_status)
        values ($1, $2, $3, $4, $5, $6, $7)
        returning *;`,
        [
          name.toLowerCase(),
          lastName.toLowerCase(),
          email.toLowerCase(),
          this.hashPassword(GeneratorValues.passwordGenerator()),
          null,
          new Date(),
          '0',
        ],
      );

      // create user company
      const userCompany = await this.pool.query<UserCompanyDB>(
        `insert into core.core_user_company
            (id_user, id_company)
        values ($1, $2)
        returning *;`,
        [createdUser.rows[0].use_id, id_company],
      );
      if (userCompany.rows.length === 0) {
        throw CustomError.conflict(
          `No se ha podido asignar la empresa al usuario`,
        );
      }

      return UserMapper.entityFromObject(createdUser.rows[0]);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }

      throw CustomError.internalServer('Error en el Data Source al crear');
    }
  }

  async update(updateUserDto: UpdateUserDto): Promise<User> {
    const { id, email, name, lastName, id_company } = updateUserDto;

    try {
      // search user registered
      const userFound = await this.pool.query<UserDB>(
        `select use.use_id,
              use.use_name,
              use.use_last_name,
              use.use_email,
              use.use_password,
              use.use_token,
              use.use_created_date,
              use.use_record_status
        from core.core_user use
        join core.core_user_company uco on use.use_id = uco.id_user
        where use.use_id = $1
          and uco.id_company = $2
          and use.use_record_status = $3;`,
        [id, id_company, '0'],
      );
      if (userFound.rows.length === 0) {
        throw CustomError.notFound(
          `No se ha encontrado el usuario a actualizar`,
        );
      }

      // user with email
      const userWithEmail = await this.pool.query<UserDB>(
        `select use.use_id,
              use.use_name,
              use.use_last_name,
              use.use_email,
              use.use_password,
              use.use_token,
              use.use_created_date,
              use.use_record_status
        from core.core_user use
        join core.core_user_company uco on use.use_id = uco.id_user
        where use.use_email = $1
          and use.use_id <> $2
          and use.use_record_status = $3;`,
        [email, id, '0'],
      );
      if (userWithEmail.rows.length >= 1) {
        throw CustomError.conflict(
          `Ya existe un usuario con el email ingresado`,
        );
      }

      // update user
      const updatedUser = await this.pool.query<UserDB>(
        `update core.core_user
        set use_name      = $1,
            use_last_name = $2,
            use_email     = $3
        where use_id = $4
          and use_record_status = $5
          returning *;`,
        [name, lastName, email, id, '0'],
      );

      return UserMapper.entityFromObject(updatedUser.rows[0]);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }

      throw CustomError.internalServer('Error en el Data Source al actualizar');
    }
  }

  async get(getUserDto: GetUserDto): Promise<User> {
    const { id, id_company } = getUserDto;

    try {
      const userFound = await this.pool.query<UserDB>(
        `select use.use_id,
              use.use_name,
              use.use_last_name,
              use.use_email,
              use.use_password,
              use.use_token,
              use.use_created_date,
              use.use_record_status
        from core.core_user use
        join core.core_user_company uco on use.use_id = uco.id_user
        where use.use_id = $1
          and uco.id_company = $2
          and use.use_record_status = $3;`,
        [id, id_company, '0'],
      );
      if (userFound.rows.length === 0) {
        throw CustomError.notFound(`No se ha encontrado el usuario solicitado`);
      }

      return UserMapper.entityFromObject(userFound.rows[0]);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }

      throw CustomError.internalServer('Error en el Data Source al obtener');
    }
  }

  async getAll(getAllUsersDto: GetAllUsersDto): Promise<User[]> {
    const { id_company, limit, offset } = getAllUsersDto;

    try {
      const users = await this.pool.query<UserDB>(
        `select use.use_id,
              use.use_name,
              use.use_last_name,
              use.use_email,
              use.use_password,
              use.use_token,
              use.use_created_date,
              use.use_record_status
        from core.core_user use
        join core.core_user_company uco on use.use_id = uco.id_user
        where uco.id_company = $1
        and use.use_record_status = $2
        order by use.use_id desc
        limit $3 offset $4;`,
        [id_company, '0', limit, offset],
      );

      return UserMapper.entitiesFromArray(users.rows);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }

      throw CustomError.internalServer(`Error en el Data Source al obtener`);
    }
  }

  async delete(deleteUserDto: DeleteUserDto): Promise<User> {
    const { id, id_company } = deleteUserDto;

    try {
      // search user
      const userFound = await this.pool.query<UserDB>(
        `select use.use_id,
              use.use_name,
              use.use_last_name,
              use.use_email,
              use.use_password,
              use.use_token,
              use.use_created_date,
              use.use_record_status
        from core.core_user use
        join core.core_user_company uco on use.use_id = uco.id_user
        where use.use_id = $1
          and uco.id_company = $2
          and use.use_record_status = $3;`,
        [id, id_company, '0'],
      );
      if (userFound.rows.length === 0) {
        throw CustomError.notFound(`No se ha encontrado el usuario a eliminar`);
      }

      // Buscar si el usuario tiene mas de una empresa
      const companiesUser = await this.pool.query(
        `select uco_id, id_user, id_company
        from core.core_user_company
        where id_user = $1
          and id_company <> $2;`,
        [id, id_company],
      );
      if (companiesUser.rows.length > 1) {
        throw CustomError.conflict(
          'El usuario no se puede eliminar, está atado a otra empresa más',
        );
      }

      // delete user company
      await this.pool.query<UserCompanyDB>(
        `delete
        from core.core_user_company
        where id_user = $1
          and id_company = $2
        returning *;`,
        [id, id_company],
      );

      // delete user
      const deleted = await this.pool.query<UserDB>(
        `delete
        from core.core_user
        where use_id = :$1
        returning *;`,
        [id],
      );

      return UserMapper.entityFromObject(deleted.rows[0]);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }

      throw CustomError.internalServer(`Error en el Data Source al eliminar`);
    }
  }
}
