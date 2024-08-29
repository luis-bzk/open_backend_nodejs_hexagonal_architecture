export class GetCompanyDto {
  public id: number;

  constructor(id: number) {
    this.id = id;
  }

  static create(params: { [key: string]: string }): [string?, GetCompanyDto?] {
    const { id } = params;

    const parsedId = parseInt(id, 10);

    // make validation
    if (!id) return ['El ID de la empresa es requerido'];
    if (isNaN(parsedId)) return ['El ID de la empresa no es válido'];

    return [undefined, new GetCompanyDto(parsedId)];
  }
}
