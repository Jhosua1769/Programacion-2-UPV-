-- sqlite3 datos.bd

-- consultar esquema
-- .schema Persona 

-- crearPersona.sql
create table Persona (

    dni char(9) not null,
    nombre varchar(20) not null,
    apellidos varchar(80) not null,
    primary key (dni)

);

-- insertarPersonas.sql
insert into Persona values ('20123456A', 'Juan', 'Perez Perez');
insert into Persona values ('20123457B', 'Maria', 'Garcia');
insert into Persona values ('20123458C', 'Jose', 'Perez');
insert into Persona values ('20123459D', 'Jose', 'Ramirez');

-------------------------
---- Ejercicio 1.1 a ----
-------------------------


insert into Persona values('y9445958x', 'Josue', 'Bellota');

select * from Persona where apellidos = 'Bellota';

create table Asignatura (

    codigo char(5) not null,
    nombre varchar(20) not null,
    primary Key (codigo)
);

insert into Asignatura values('12345', 'Programacion1');
insert into Asignatura values('12453', 'Programacion2');

-- crearMatricula.sql
create table Matricula (

    dni char(9) not null,
    codigo char(8) not null,
    foreign key (dni) references Persona(dni),
    foreign key (codigo) references Asignatura(codigo),
    primary key (dni,codigo)

);


insert into Matricula values('y9445958x', '12453');

select Persona.apellidos

from Persona, Matricula

where Matricula.codigo = '12453' and Matricula.dni = Persona.dni;
