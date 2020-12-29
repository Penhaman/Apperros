create table if not exists brand
(
	id serial not null
		constraint brand_pk
			primary key,
	name text
);

alter table brand owner to postgres;

create unique index if not exists brand_id_uindex
	on brand (id);

create table if not exists model
(
	id serial not null
		constraint model_pk
			primary key,
	name text,
	id_brand integer
		constraint model_brand_id_fk
			references brand
);

alter table model owner to postgres;

create unique index if not exists model_id_uindex
	on model (id);

create table if not exists error
(
	id serial not null
		constraint error_pk
			primary key,
	code text,
	cause text,
	display text,
	description text,
	remedy text,
	id_model integer
		constraint error_model_id_fk
			references model
);

alter table error owner to postgres;

create unique index if not exists error_id_uindex
	on error (id);


