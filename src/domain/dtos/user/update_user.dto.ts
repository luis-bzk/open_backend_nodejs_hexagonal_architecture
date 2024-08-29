import { Validators } from '../../../config';

export class UpdateUserDto {
  public id: number;
  public name: string;
  public lastName: string;
  public email: string;
  public id_company: number;

  constructor(
    id: number,
    name: string,
    lastName: string,
    email: string,
    id_company: number,
  ) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.id_company = id_company;
  }

  static create(
    params: { [key: string]: string },
    object: { [key: string]: any },
  ): [string?, UpdateUserDto?] {
    const { id } = params;
    const { name, lastName, email, id_company } = object;
    const parsedId = parseInt(id, 10);

    if (!id) return ['El ID del usuario es necesario'];
    if (isNaN(parsedId)) return ['El ID del usuario no es válido'];

    if (!name) return ['El nombre del usuario es requerido'];
    if (name.length > 100)
      return ['El nombre del usuario no puede tener mas de 100 caracteres'];

    if (!lastName) return ['El apellido del usuario es requerido'];
    if (lastName.length > 100)
      return ['El apellido del usuario no puede tener mas de 100 caracteres'];

    if (!email) return ['El email del usuario es requerido'];
    if (email.length > 100)
      return ['El email del usuario no puede tener mas de 100 caracteres'];
    if (!Validators.email.test(email))
      return ['El email del usuario no es válido'];

    if (!id_company) return ['El ID de la empresa es necesario'];
    if (isNaN(id_company)) return ['El ID de la empresa no es válido'];

    return [
      undefined,
      new UpdateUserDto(parsedId, name, lastName, email, id_company),
    ];
  }
}
