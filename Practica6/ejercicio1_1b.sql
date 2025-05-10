-------------------------
---- Ejercicio 1.1 b ----
-------------------------

insert into Matricula values('20123456A', '12453');
insert into Matricula values('20123457B', '12453');


select Persona.nombre

from Persona, Matricula

where Matricula.codigo = '12453' and Matricula.dni = Persona.dni;

