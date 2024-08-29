interface Entity {
  id: number;
  name: string;
  code: string;
  prefix: string;
  id_country: number;
  country_name: string;
  created_date: Date;
  record_status: string;
}

export class Province {
  public id: number;
  public name: string;
  public code: string;
  public prefix: string;
  public id_country: number;
  public country_name: string;
  public created_date: Date;
  public record_status: string;

  constructor(entity: Entity) {
    this.id = entity.id;
    this.name = entity.name;
    this.code = entity.code;
    this.prefix = entity.prefix;
    this.id_country = entity.id_country;
    this.country_name = entity.country_name;
    this.created_date = entity.created_date;
    this.record_status = entity.record_status;
  }
}
