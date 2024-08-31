-- create database my_database;

create schema core;

create table core.core_company (
    com_id serial primary key,
    com_social_reason varchar(100),
    com_description varchar(150),
    com_vision varchar(300),
    com_mission varchar(300),
    com_email varchar(100),
    com_phone varchar(30),
    com_created_date timestamp default current_timestamp,
    com_record_status varchar(1) not null
);

create table core.core_country (
    cou_id serial primary key,
    cou_name varchar(100) not null,
    cou_code varchar(10) not null,
    cou_prefix varchar(10) not null,
    cou_created_date timestamp default current_timestamp,
    cou_record_status varchar(1) not null
);

create table core.core_province (
    pro_id serial primary key,
    pro_name varchar(100) not null,
    pro_code varchar(10) not null,
    pro_prefix varchar(10) not null,
    pro_created_date timestamp default current_timestamp,
    pro_record_status varchar(1) not null,
    id_country int not null,
    constraint fk1_core_province foreign key (id_country) references core.core_country (cou_id)
);

create table core.core_city (
    cit_id serial primary key,
    cit_name varchar(100) not null,
    cit_created_date timestamp default current_timestamp,
    cit_record_status varchar(1) not null,
    id_province int not null,
    id_country int not null,
    constraint fk1_core_province foreign key (id_province) references core.core_province (pro_id),
    constraint fk2_core_province foreign key (id_country) references core.core_country (cou_id)
);

create table core.core_user (
    use_id serial primary key,
    use_name varchar(100) not null,
    use_last_name varchar(100) not null,
    use_email varchar(100) unique not null,
    use_password varchar(100) not null,
    use_token varchar(60),
    use_created_date timestamp default current_timestamp,
    use_record_status varchar(1) not null
);

create table core.core_role (
    rol_id serial primary key,
    rol_name varchar(100) not null,
    rol_description varchar(200),
    rol_created_date timestamp default current_timestamp,
    rol_record_status varchar(1) not null
);

create table core.core_user_role (
    uro_id serial primary key,
    uro_created_date timestamp default current_timestamp,
    uro_record_status varchar(1) not null,
    id_user int not null,
    id_role int not null,
    constraint fk1_core_user_role foreign key (id_user) references core.core_user (use_id),
    constraint fk2_core_user_role foreign key (id_role) references core.core_role (rol_id)
);

create table core.core_genre (
    gen_id serial primary key,
    gen_name varchar(50),
    gen_description varchar(100),
    gen_abbreviation varchar(10),
    gen_created_date timestamp default current_timestamp,
    gen_record_status varchar(1) not null
);

create table core.core_identification_type (
    ity_id serial primary key,
    ity_name varchar(50),
    ity_description varchar(100),
    ity_abbreviation varchar(10),
    ity_created_date timestamp default current_timestamp,
    ity_record_status varchar(1) not null,
    id_country int not null,
    constraint fk1_core_identification_type foreign key (id_country) references core.core_country (cou_id)
);

create table core.core_phone_type (
    pty_id serial primary key,
    pty_name varchar(100) not null,
    pty_description varchar(100),
    pty_created_date timestamp default current_timestamp,
    pty_record_status varchar(1) not null
);
