import { Validators } from '../../../config';

export class UpdateCompanyDto {
  public id: number;
  public social_reason: string;
  public description: string;
  public vision: string;
  public mission: string;
  public email: string;
  public phone: string;

  constructor(
    id: number,
    social_reason: string,
    description: string,
    vision: string,
    mission: string,
    email: string,
    phone: string,
  ) {
    this.id = id;
    this.social_reason = social_reason;
    this.description = description;
    this.vision = vision;
    this.mission = mission;
    this.email = email;
    this.phone = phone;
  }

  static create(
    params: { [key: string]: string },
    body: { [key: string]: any },
  ): [string?, UpdateCompanyDto?] {
    const { id } = params;
    const { social_reason, description, vision, mission, email, phone } = body;

    const parsedId = parseInt(id, 10);

    // make validation
    if (!id) return ['El ID de la empresa es requerido'];
    if (isNaN(parsedId)) return ['El ID de la empresa no es válido'];

    if (!social_reason) return ['La razón social es requerida'];
    if (social_reason.length > 100)
      return ['La razón social no puede tener mas de 100 caracteres'];

    if (!description) return ['la descripción es requerida'];
    if (description.length > 150)
      return ['La descripción no puede tener mas de 150 caracteres'];

    if (!vision) return ['La vision es requerida'];
    if (vision.length > 300)
      return ['la vision no puede tener mas de 300 caracteres'];

    if (!mission) return ['la misión es requerida'];
    if (mission.length > 300)
      return ['La misión no puede tener mas de 300 caracteres'];

    if (!email) return ['El email es requerido'];
    if (email.length > 100)
      return ['El email no puede tener mas de 100 caracteres'];
    if (!Validators.email.test(email))
      return ['El email no cumple el formato válido'];

    if (!phone) return ['El teléfono es requerido'];
    if (phone.length > 30)
      return ['El teléfono no puede tener mas de 30 caracteres'];

    return [
      undefined,
      new UpdateCompanyDto(
        parsedId,
        social_reason,
        description,
        vision,
        mission,
        email,
        phone,
      ),
    ];
  }
}
