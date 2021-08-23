
# Crear base de datos
create database library;



# Listar tablas
\l



# Usar base de datos
\c library



# Crear tablas
create table books(
    section int,
    title text,
    author text
);



# Lista tablas
\dt



# Insertar datos
# el orden debe ser ingresado en el orden
# de creacion de la tabla
insert into books values
    (1, 'Foundation', 'Issac Asimov');



# Para listar datos
select * from books;



# Para insertar varios datos al mismo tiempo
insert into books values
    (2, 'Digital Fortress', 'Dan Brown'),
    (3, 'World war z', 'Max Brooks');



create table users(
    username text,
    password text
);

insert into users values
    ('Joe', 'joe123'),
    ('Ryan', 'Ryan123'),
    ('Cameron', 'Cameron123');

    