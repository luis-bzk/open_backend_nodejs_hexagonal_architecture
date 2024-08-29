import { ProvinceDB } from '../../data/interfaces';
import { Province } from '../../domain/entities';
import { CustomError } from '../../domain/errors';

export class ProvinceMapper {
  static entityFromObject(obj: ProvinceDB): Province {
    const {
      pro_id,
      pro_name,
      pro_code,
      pro_prefix,
      id_country,
      cou_name,
      pro_created_date,
      pro_record_status,
    } = obj;

    if (!pro_id) {
      throw CustomError.conflict(
        'No se ha recibido el ID de la provincia de la Base de Datos',
      );
    }
    if (!pro_name) {
      throw CustomError.conflict(
        'No se ha recibido el nombre de la provincia de la Base de Datos',
      );
    }
    if (!pro_code) {
      throw CustomError.conflict(
        'No se ha recibido el código de la provincia de la Base de Datos',
      );
    }
    if (!id_country) {
      throw CustomError.conflict(
        'No se ha recibido el ID del país de la provincia de la Base de Datos',
      );
    }
    if (!pro_prefix) {
      throw CustomError.conflict(
        'No se ha recibido el prefijo de la provincia de la Base de Datos',
      );
    }
    if (!pro_created_date) {
      throw CustomError.conflict(
        'No se ha recibido la fecha ed creación de la provincia de la Base de Datos',
      );
    }
    if (!pro_record_status) {
      throw CustomError.conflict(
        'No se ha recibido el estado de registro de la provincia de la Base de Datos',
      );
    }

    return new Province({
      id: pro_id,
      name: pro_name,
      code: pro_code,
      prefix: pro_prefix,
      id_country: id_country,
      country_name: cou_name,
      created_date: pro_created_date,
      record_status: pro_record_status,
    });
  }

  static entitiesFromArray(objs: ProvinceDB[]): Province[] {
    if (objs.length > 0) {
      return objs.map((province) => this.entityFromObject(province));
    } else {
      return [];
    }
  }
}
