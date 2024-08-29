export class DeleteCompanyDto {
  public id: number;

  constructor(id: number) {
    this.id = id;
  }

  static create(params: { [key: string]: string }): [string?, DeleteCompanyDto?] {
    const { id } = params;

    const parsedId = parseInt(id, 10);

    // make validation
    if (!id) return ['El ID de la empresa es requerido'];
    if (isNaN(parsedId)) return ['El ID de la empresa no es válido'];

    return [undefined, new DeleteCompanyDto(parsedId)];
  }
}
