create database if not exists companydb;

use companydb;

create table employee (
    id int not null AUTO_INCREMENT,
    name varchar(30),
    salary int,
    primary key (id)
);

select * from employee;

insert into employee values(
    1,"chuy",1500
);

delete from employee where id = 1;

UPDATE employee SET name = 'melis', salary = 2000 WHERE id = 7;
