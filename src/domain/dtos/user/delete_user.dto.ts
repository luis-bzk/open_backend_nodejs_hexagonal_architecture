export class DeleteUserDto {
  public id: number;
  public id_company: number;

  constructor(id: number, id_company: number) {
    this.id = id;
    this.id_company = id_company;
  }

  static create(params: { [key: string]: string }): [string?, DeleteUserDto?] {
    const { id, id_company } = params;
    const parsedId = parseInt(id, 10);
    const parsedIdCompany = parseInt(id_company, 10);

    if (!id) ['El ID del usuario es requerido'];
    if (isNaN(parsedId)) ['El ID del usuario no es valido'];

    if (!id_company) ['El ID de la empresa es requerido'];
    if (isNaN(parsedIdCompany)) ['El ID de la empresa no es valido'];

    return [undefined, new DeleteUserDto(parsedId, parsedIdCompany)];
  }
}
