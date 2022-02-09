USE carver-igor-medeiros-freitas;

CREATE TABLE Actor (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR (255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6) NOT NULL
);

SHOW TABLES;
— MOSTRA TODAS AS TABELAS.

SHOW DATABASES;
— MOSTRA TODOS OS DBA

DESCRIBE Actor;
— VAI DESCREVER A TABELA

*INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
“001”,
“Tony Ramos”,
400000,
“1948-08-25”,
“male”
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
“002”,
“Glória Pires”,
1200000,
“1948-07-23”,
“male”
);

*— VAI CONSTAR COMO ENTRADA DUPLICADA NA PK

*INSERT INTO Actor (id, name, salary)
VALUES(
“003”,
“Fernanda Montenegro”,
300000,
“1929-10-19”,
“female”
);

— ERRO POR QUE FALTA O VALUE, BIRTH E GENDER

INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
“004”,
400000,
“1949-04-18”,
“male”
);*

— O CAMPO NAME NÃO TEM UM VALOR PADRÃO

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
“005”,
“Juliana Paes”,
719333.33,
1979-03-26,
“female”
);

— O VALOR DA DATA ESÁ INCORRETO, FALTA AS “”

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
“003”,
“Igor Medeiros”,
99200000,
“1948-07-23”,
“male”
);

SELECT id, name from Actor WHERE gender = “female”;

SELECT name, salary from Actor Where salary = 400000;

SELECT name from Actor WHERE gender = “invalid”;

— NÃO TEM RETORNO PORQUÊ NÃO EXISTE O VALOR INVALID

SELECT id, name, salary from Actor WHERE salary <= 50000;

SELECT id, name from Actor WHERE id = “002”;
— O PARAMETRO NOME ESTÁ INCORRETO, O CORRETO É NAME

SELECT * FROM Actor
WHERE (name LIKE “A%” OR name LIKE “J%”) AND salary > 300000;

— % O CARACTER CORINGA QUE PODE SER USADO PARA FILTRAR, E PODE SER USADO DE 3 FORMAS %VALOR, VALOR% E %VLAOR%

SELECT * FROM Actor
WHERE ( name NOT LIKE “A%”) AND salary > 35000000;

SELECT * FROM Actor
WHERE name LIKE “%g%” OR “%G%”;
SELECT * FROM Actor
WHERE
(name LIKE “%g%” OR name LIKE “%G%” OR name LIKE “%a%” OR name LIKE “%A%”)
AND salary BETWEEN 350000 AND 900000;

*CREATE TABLE Films (
id VARCHAR(3) PRIMARY KEY,
title VARCHAR(30),
synopsis TEXT,
posting_data DATE NOT NULL ,
assessment FLOAT NOT NULL
);

INSERT INTO Films (id, title, synopsis, posting_data, assessment)
VALUES(
“001”,
“Se Eu Fosse Você”,
“Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos”,
“2006-06-01”,
7
);

INSERT INTO Films (id, title, synopsis, posting_data, assessment)
VALUES(
“002”,
“Doce de mãe”,
“Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela”,
“2012-12-27”,
10
);
*

SELECT id, title, assessment FROM Films WHERE id = “001”;

SELECT * FROM Films WHERE title = “Doce de mãe”;

SELECT id, title, assessment FROM Films WHERE assessment >= 7;

SELECT * FROM Films WHERE title LIKE “%vida%”;

SELECT title FROM Films WHERE title LIKE “%você%” OR title LIKE “%mãe%”;

SELECT title FROM Films WHERE assessment < “2020-01-31”;

SELECT title FROM Films WHERE assessment < “2020-01-31” AND assessment > 7 AND title LIKE “%mãe%”;
