APROFUNDAMENTO SQL

ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(30);

ALTER TABLE Actor ADD type VARCHAR(50) DEFAULT “NotDirector”;

— Apagaria o salário
— Muda de gender para sex com VARCHAR 6
— Muda o VARCHAR de 6 para 255

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

UPDATE Actor
SET name = “Edinaldo Pereira”, birth_date = “2000-02-21” WHERE id = “003”;

UPDATE Actor
SET name = “JULIANA PAES”,
birth_date = “1999-02-21”,
salary = “2”
WHERE id = “005”;

UPDATE Actor
SET name = “fasfsaf”
WHERE id = “00000”;
— Ele rodou mas com 0 rows affected

DELETE FROM Actor WHERE name = “Fernanda Montenegro”;

    — NÃO VOU DESABILITAR O SAFE MODE PRA RODAR O DELETE

DELETE FROM Actor WHERE gender = “male” AND salary > 1000000;

    — NÃO VOU DESABILITAR O SAFE MODE PRA RODAR O DELETE

SELECT MAX(salary) FROM Actor;

SELECT MIN(salary) FROM Actor WHERE gender = “female”;

SELECT COUNT(*) FROM Actor WHERE gender = “female”;

SELECT SUM(salary) FROM Actor;

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

— A query contou por generos e agrupou por genero

SELECT id, name FROM Actor ORDER BY id, name DESC ;

SELECT id, name, salary FROM Actor ORDER BY salary ASC;

SELECT id, name, salary FROM Actor ORDER BY salary ASC LIMIT 3 ;

SELECT AVG(salary) FROM Actor;

ALTER TABLE Films ADD playing_limit_date DATE ;

ALTER TABLE Films CHANGE assessment assessment FLOAT;

UPDATE Films SET playing_limit_date = “2021-05-15” WHERE id = “001”;

DELETE FROM Films WHERE id = “001”;
— Nenhuma tfileira é afetada.