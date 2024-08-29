import { CityDB } from '../../data/interfaces';
import { City } from '../../domain/entities';
import { CustomError } from '../../domain/errors';

export class CityMapper {
  static entityFromObject(obj: CityDB): City {
    const {
      cit_id,
      cit_name,
      id_province,
      id_country,
      cit_created_date,
      cit_record_status,
    } = obj;

    if (!cit_id) {
      throw CustomError.conflict(
        'No se ha recibido el ID de la ciudad de la Base de Datos',
      );
    }
    if (!cit_name) {
      throw CustomError.conflict(
        'No se ha recibido el nombre de la ciudad de la Base de Datos',
      );
    }
    if (!id_province) {
      throw CustomError.conflict(
        'No se ha recibido el ID de la provincia de la ciudad de la Base de Datos',
      );
    }
    if (!id_country) {
      throw CustomError.conflict(
        'No se ha recibido el ID del país de la ciudad de la Base de Datos',
      );
    }
    if (!cit_created_date) {
      throw CustomError.conflict(
        'No se ha recibido la fecha de creación de la ciudad de la Base de Datos',
      );
    }
    if (!cit_record_status) {
      throw CustomError.conflict(
        'No se ha recibido el estado de registro de la ciudad de la Base de Datos',
      );
    }

    return new City({
      id: cit_id,
      name: cit_name,
      id_province: id_province,
      id_country: id_country,
      created_date: cit_created_date,
      record_status: cit_record_status,
    });
  }

  static entitiesFromArray(objs: CityDB[]): City[] {
    if (objs.length > 0) {
      return objs.map((city) => this.entityFromObject(city));
    } else {
      return [];
    }
  }
}
