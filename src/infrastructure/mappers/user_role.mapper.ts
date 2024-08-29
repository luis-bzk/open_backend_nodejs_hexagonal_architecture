import { UserRole } from '../../domain/entities';
import { UserRoleDB } from '../../data/interfaces';
import { CustomError } from '../../domain/errors';

export class UserRoleMapper {
  static entityFromObject(obj: UserRoleDB): UserRole {
    const { uro_id, uro_created_date, uro_record_status, id_user, id_role } =
      obj;

    if (!uro_id) {
      throw CustomError.conflict(
        'No se ha recibido el id del usuario por rol de la Base de Datos',
      );
    }
    if (!uro_created_date) {
      throw CustomError.conflict(
        'No se ha recibido la fecha de creación del usuario por rol de la Base de Datos',
      );
    }
    if (!uro_record_status) {
      throw CustomError.conflict(
        'No se ha recibido el estado de registro del usuario por rol de la Base de Datos',
      );
    }
    if (!id_user) {
      throw CustomError.conflict(
        'No se ha recibido el id del usuario del usuario por rol de la Base de Datos',
      );
    }
    if (!id_role) {
      throw CustomError.conflict(
        'No se ha recibido el id del rol del usuario por rol de la Base de Datos',
      );
    }

    return new UserRole({
      id: uro_id,
      id_user: id_user,
      id_role: id_role,
      created_date: uro_created_date,
      record_status: uro_record_status,
    });
  }

  static entitiesFromArray(objs: UserRoleDB[]): UserRole[] {
    if (objs.length > 0) {
      return objs.map((userRole) => this.entityFromObject(userRole));
    } else {
      return [];
    }
  }
}
