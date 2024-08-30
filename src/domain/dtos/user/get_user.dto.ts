export class GetUserDto {
  public id: number;

  constructor(id: number) {
    this.id = id;
  }

  static create(params: { [key: string]: string }): [string?, GetUserDto?] {
    const { id, id_company } = params;
    const parsedId = parseInt(id, 10);
    const parsedIdCompany = parseInt(id_company, 10);

    if (!id) ['El ID del usuario es requerido'];
    if (isNaN(parsedId)) ['El ID del usuario no es valido'];

    if (!id_company) ['El ID de la empresa es requerido'];
    if (isNaN(parsedIdCompany)) ['El ID de la empresa no es valido'];

    return [undefined, new GetUserDto(parsedId)];
  }
}
