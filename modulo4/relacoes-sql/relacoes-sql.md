-- RELAÇÕES SQL

CREATE TABLE Assesment (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	assesment FLOAT NOT NULL,
    Films_id VARCHAR(255),
    FOREIGN KEY (Films_id) REFERENCES Films(id)
);
-- CHAVE ESTRANGEIRA É O CAMPO QUE ESTABELECE O RELACIONAMENTO ENTRE DUAS TABELAS

INSERT INTO Assesment (id, comment, assesment, films_id) 
VALUES (
	"001",
    "Muito bom!",
    7,
	"001"
);

-- NÃO IRÁ APAGAR POIS FALTA A FUNÇÃO DE DELETAR A AVALIAÇÃO JUNTO

CREATE TABLE FilmsCast (
		films_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (films_id) REFERENCES Films(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

-- ESSA TABLE IRÁ RELACIONAR OS ATORES COM OS FILMES

INSERT INTO FilmsCast(films_id, actor_id)
VALUES(
	"002",
    "003"
);

INSERT INTO FilmsCast(films_id, actor_id)
VALUES(
	"001",
    "003"
);

INSERT INTO FilmsCast(films_id, actor_id)
VALUES(
	"002",
    "001"
);

-- NÃO IRÁ APAGAR POIS FALTARÁ A FUNÇÃO DE DELETAR O ATOR DO CAST

-- O OPERAOR ON É O MESMO QUE "EM"

SELECT m.id AS movie_id, r.rate AS rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;