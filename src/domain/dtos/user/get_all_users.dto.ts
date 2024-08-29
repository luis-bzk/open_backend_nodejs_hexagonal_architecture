import { IQuery } from '../../../utils';

export class GetAllUsersDto {
  public id_company: number;
  public limit: number;
  public offset: number;

  constructor(id_company: number, limit: number, offset: number) {
    this.id_company = id_company;
    this.limit = limit;
    this.offset = offset;
  }

  static create(
    params: { [key: string]: string },
    query: IQuery,
  ): [string?, GetAllUsersDto?] {
    const { id_company } = params;
    const { limit, offset } = query;

    const parsedLimit = limit
      ? isNaN(parseInt(limit, 10))
        ? null
        : parseInt(limit, 10)
      : null;
    const parsedOffset = offset
      ? isNaN(parseInt(offset, 10))
        ? null
        : parseInt(offset, 10)
      : null;

    if (!id_company) ['El ID de la empresa es requerido'];
    const parsedIdCompany = parseInt(id_company, 10);
    if (isNaN(parsedIdCompany)) ['El ID de la empresa no es valido'];

    return [
      undefined,
      new GetAllUsersDto(parsedIdCompany, parsedLimit!, parsedOffset!),
    ];
  }
}
