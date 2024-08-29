import { Validators } from '../../../config';

export class CreateUserDto {
  public name: string;
  public lastName: string;
  public email: string;
  public id_company: number;

  constructor(
    name: string,
    lastName: string,
    email: string,
    id_company: number,
  ) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.id_company = id_company;
  }

  static create(object: { [key: string]: any }): [string?, CreateUserDto?] {
    const { name, lastName, email, id_company } = object;

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

    return [undefined, new CreateUserDto(name, lastName, email, id_company)];
  }
}
