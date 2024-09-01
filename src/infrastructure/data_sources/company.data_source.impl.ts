import { Pool } from 'pg';

import { PostgresDatabase } from '../../data';
import { Company } from '../../domain/entities';
import {
  CreateCompanyDto,
  DeleteCompanyDto,
  GetAllCompaniesDto,
  GetCompanyDto,
  UpdateCompanyDto,
} from '../../domain/dtos/company';
import { CompanyDataSource } from '../../domain/data_sources';
import { CustomError } from '../../domain/errors';
import { CompanyDB } from '../../data/interfaces';
import { CompanyMapper } from '../mappers/company.mapper';

export class CompanyDataSourceImpl implements CompanyDataSource {
  private pool: Pool;

  constructor() {
    this.pool = PostgresDatabase.getPool();
  }

  async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const { social_reason, vision, mission, email, phone, description } =
      createCompanyDto;

    try {
      // check name
      const companyName = await this.pool.query<CompanyDB>(
        `select
        cc.com_id,
        cc.com_social_reason,
        cc.com_description,
        cc.com_vision,
        cc.com_mission,
        cc.com_email,
        cc.com_phone,
        cc.com_created_date,
        cc.com_record_status
      from
        core.core_company cc
      where
        lower(cc.com_social_reason) = $1
        and cc.com_record_status = $2;`,
        [social_reason.toLowerCase(), '0'],
      );

      if (companyName.rows.length > 0) {
        throw CustomError.conflict(
          'Ya existe una empresa con la misma Razón Social',
        );
      }

      // create
      const companyCreated = await this.pool.query<CompanyDB>(
        `insert into core.core_company (
            com_social_reason,
            com_description,
            com_vision,
            com_mission,
            com_email,
            com_phone,
            com_created_date,
            com_record_status
          )
        values ($1, $2, $3, $4, $5, $6, $7, $8)
        returning *;`,
        [
          social_reason,
          description,
          vision,
          mission,
          email,
          phone,
          new Date(),
          '0',
        ],
      );

      return CompanyMapper.entityFromObject(companyCreated.rows[0]);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }

      throw CustomError.internalServer('Error en el Data Source al crear');
    }
  }

  async update(updateCompanyDto: UpdateCompanyDto): Promise<Company> {
    const { id, social_reason, vision, mission, email, phone, description } =
      updateCompanyDto;

    try {
      // company exists
      const companyExists = await this.pool.query<CompanyDB>(
        `select cc.com_id,
          cc.com_social_reason,
          cc.com_description,
          cc.com_vision,
          cc.com_mission,
          cc.com_email,
          cc.com_phone,
          cc.com_created_date,
          cc.com_record_status
        from core.core_company cc
        where cc.com_id = $1
          and cc.com_record_status = $2;`,
        [id, '0'],
      );
      if (companyExists.rows.length === 0) {
        throw CustomError.notFound(
          'No se ha encontrado la empresa a actualizar',
        );
      }

      // other company same name to update
      const companyName = await this.pool.query<CompanyDB>(
        `select cc.com_id,
          cc.com_social_reason,
          cc.com_description,
          cc.com_vision,
          cc.com_mission,
          cc.com_email,
          cc.com_phone,
          cc.com_created_date,
          cc.com_record_status
        from core.core_company cc
        where lower(cc.com_social_reason) = $1
          and cc.com_id <> $2
          and cc.com_record_status = $3;`,
        [social_reason.toLowerCase(), id, '0'],
      );
      if (companyName.rows.length > 0) {
        throw CustomError.conflict(
          'Ya existe otra empresa con la razón social ingresado',
        );
      }

      // update
      const updatedCompany = await this.pool.query<CompanyDB>(
        `update
          core.core_company
        set
          com_social_reason = $1,
          com_description = $2,
          com_vision = $3,
          com_mission = $4,
          com_email = $5,
          com_phone = $6
        where
          com_id = $7
        returning *; `,
        [social_reason, description, vision, mission, email, phone, id],
      );

      return CompanyMapper.entityFromObject(updatedCompany.rows[0]);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }

      console.log(error);

      throw CustomError.internalServer('Error en el Data Source al actualizar');
    }
  }

  async get(getCompanyDto: GetCompanyDto): Promise<Company> {
    const { id } = getCompanyDto;
    try {
      const company = await this.pool.query(
        `select
          cc.com_id,
          cc.com_social_reason,
          cc.com_description,
          cc.com_vision,
          cc.com_mission,
          cc.com_email,
          cc.com_phone,
          cc.com_created_date,
          cc.com_record_status
        from
          core.core_company cc
        where
          cc.com_id = $1
          and cc.com_record_status = $2;`,
        [id, '0'],
      );

      if (company.rows.length === 0) {
        throw CustomError.notFound('No se ha encontrado la empresa solicitada');
      }

      return CompanyMapper.entityFromObject(company.rows[0]);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer('Error en el Data Source al obtener');
    }
  }

  async getAll(getAllCompaniesDto: GetAllCompaniesDto): Promise<Company[]> {
    const { limit, offset } = getAllCompaniesDto;

    try {
      const companies = await this.pool.query(
        `select
            cc.com_id,
              cc.com_social_reason,
              cc.com_description,
              cc.com_vision,
              cc.com_mission,
              cc.com_email,
              cc.com_phone,
              cc.com_created_date,
              cc.com_record_status
          from
            core.core_company cc
          where
            cc.com_record_status = $1
          order by
            cc.com_social_reason
          limit $2 offset $3;`,
        ['0', limit, offset],
      );

      return CompanyMapper.entitiesFromArray(companies.rows);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }

      throw CustomError.internalServer(
        'Error en el Data Source al obtener todos',
      );
    }
  }

  async delete(deleteCompanyDto: DeleteCompanyDto): Promise<Company> {
    const { id } = deleteCompanyDto;

    try {
      // exists
      const company = await this.pool.query(
        `select
          cc.com_id,
          cc.com_social_reason,
          cc.com_description,
          cc.com_vision,
          cc.com_mission,
          cc.com_email,
          cc.com_phone,
          cc.com_created_date,
          cc.com_record_status
        from
          core.core_company cc
        where
          cc.com_id = $1
          and cc.com_record_status = $2;`,
        [id, '0'],
      );

      if (company.rows.length === 0) {
        throw CustomError.notFound('No se ha encontrado la empresa a eliminar');
      }

      const deletedCompany = await this.pool.query(
        `delete
        from
          core.core_company
        where
          com_id = $1
        returning *;`,
        [id],
      );
      return CompanyMapper.entityFromObject(deletedCompany.rows[0]);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }

      throw CustomError.internalServer('Error en el Data Source al eliminar');
    }
  }
}
