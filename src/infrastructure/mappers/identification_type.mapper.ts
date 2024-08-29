import { CustomError } from '../../domain/errors';
import { IdentificationType } from '../../domain/entities';
import { IdentificationTypeDB } from '../../data/interfaces';

export class IdentificationTypeMapper {
  static entityFromObject(obj: IdentificationTypeDB): IdentificationType {
    const {
      ity_id,
      ity_name,
      ity_description,
      ity_abbreviation,
      ity_created_date,
      ity_record_status,
      id_country,
    } = obj;

    if (!ity_id) {
      throw CustomError.conflict(
        'No se ha recibido el ID del tipo de identificación de la Base de Datos',
      );
    }

    if (!ity_name) {
      throw CustomError.conflict(
        'No se ha recibido el nombre del tipo de identificación de la Base de Datos',
      );
    }

    if (!ity_description) {
      throw CustomError.conflict(
        'No se ha recibido la descripción del tipo de identificación de la Base de datos',
      );
    }

    if (!ity_abbreviation) {
      throw CustomError.conflict(
        'No se ha recibido la abreviatura del tipo de identificación de la Base de datos',
      );
    }

    if (!ity_created_date) {
      throw CustomError.conflict(
        'No se ha recibido la fecha de creación del tipo de identificación de la Base de datos',
      );
    }

    if (!ity_record_status) {
      throw CustomError.conflict(
        'No se ha recibido el estado del tipo de identificación de la Base de datos',
      );
    }

    if (!id_country) {
      throw CustomError.conflict(
        'No se ha recibido el ID del país del tipo de identificación de la Base de datos',
      );
    }

    return new IdentificationType({
      id: ity_id,
      name: ity_name,
      description: ity_description,
      abbreviation: ity_abbreviation,
      created_date: ity_created_date,
      record_status: ity_record_status,
      id_country: id_country,
    });
  }

  static entitiesFromArray(objs: IdentificationTypeDB[]): IdentificationType[] {
    if (objs.length > 0) {
      return objs.map((obj) => this.entityFromObject(obj));
    }
    return [];
  }
}
