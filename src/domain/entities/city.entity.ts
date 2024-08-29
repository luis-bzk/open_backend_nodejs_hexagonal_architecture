interface Entity {
  id: number;
  name: string;
  id_province: number;
  id_country: number;
  created_date: Date;
  record_status: string;
}

export class City {
  public id: number;
  public name: string;
  public id_province: number;
  public id_country: number;
  public created_date: Date;
  public record_status: string;

  constructor(entity: Entity) {
    this.id = entity.id;
    this.name = entity.name;
    this.id_province = entity.id_province;
    this.id_country = entity.id_country;
    this.created_date = entity.created_date;
    this.record_status = entity.record_status;
  }
}
