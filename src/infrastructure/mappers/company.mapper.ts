import { CompanyDB } from '../../data/interfaces';
import { Company } from '../../domain/entities';
import { CustomError } from '../../domain/errors';

export class CompanyMapper {
  static entityFromObject(obj: CompanyDB): Company {
    const {
      com_id,
      com_social_reason,
      com_description,
      com_vision,
      com_mission,
      com_email,
      com_phone,
      com_created_date,
      com_record_status,
    } = obj;

    if (!com_id) {
      throw CustomError.conflict(
        'No se ha recibido el ID de la compañía de la Base de Datos',
      );
    }

    if (!com_social_reason) {
      throw CustomError.conflict(
        'No se ha recibido la razón social de la compañía de la Base de Datos',
      );
    }

    if (!com_description) {
      throw CustomError.conflict(
        'No se ha recibido la descripción de la compañía de la Base de Datos',
      );
    }

    if (!com_vision) {
      throw CustomError.conflict(
        'No se ha recibido la vision de la compañía de la Base de Datos',
      );
    }

    if (!com_mission) {
      throw CustomError.conflict(
        'No se ha recibido la misión de la compañía de la Base de Datos',
      );
    }

    if (!com_email) {
      throw CustomError.conflict(
        'No se ha recibido el email de la compañía de la Base de Datos',
      );
    }

    if (!com_phone) {
      throw CustomError.conflict(
        'No se ha recibido el teléfono de la compañía de la Base de Datos',
      );
    }

    if (!com_created_date) {
      throw CustomError.conflict(
        'No se ha recibido la fecha de creación de la compañía de la Base de Datos',
      );
    }

    if (!com_record_status) {
      throw CustomError.conflict(
        'No se ha recibido el estado de registro de la compañía de la Base de Datos',
      );
    }

    return new Company({
      id: com_id,
      social_reason: com_social_reason,
      description: com_description,
      vision: com_vision,
      mission: com_mission,
      email: com_email,
      phone: com_phone,
      created_date: com_created_date,
      record_status: com_record_status,
    });
  }

  static entitiesFromArray(objs: CompanyDB[]): Company[] {
    if (objs.length > 0) {
      return objs.map((company) => this.entityFromObject(company));
    } else {
      return [];
    }
  }
}
