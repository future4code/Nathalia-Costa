Aula 54 

#### Exercicio 01

a. Chave estrangeira é uma 'chave' para interliga uma tabela a outra. 

b. ✔check
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES('05','Comedia brasileira', 9, '003');

c. 
- INSERT INTO Rating (id, comment, rate, movie_id)
VALUES('05','Comedia brasileira', 9, '006');

´´Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`julian_nathalia_costa_db`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))´´

- Ele não pode setar uma linha filha.

d.✔check
ALTER TABLE Movies DROP COLUMN avaliacao

e. 
- delete from Movies where id = 002
- Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`julian_nathalia_costa_db`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))

- Não é possivel apagar uma linha da tabela pai pq ela tem dependentes. (imagina isso na vida real... hehe)

#### Exercicio 02

a. Tabela criada para se relacionar os atores com os filmes. Nas dua sprimeirad linha ele cria um id um para o filme e outro para o autor. Logo após ele vai relaciona com o FOREIGN KEY com o id das tabelas citadas, Movies e Actor.

b. ✔check

c. 
- Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`julian_nathalia_costa_db`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))

- Não é possivel adicionar ou atualizar informações de uma linha filha.

d. 

Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`julian_nathalia_costa_db`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

- Não é possivel deletar por motivos de relação com outra tabela.

#### Exercicio 03

a. O operador ON ele vai buscar na tabelax e na linhay o que se pede.

b. 
SELECT Movies.id as movie_id, Rating.rate as rating, nome FROM Movies
INNER JOIN Rating ON Movies.id = Rating.movie_id;


#### Exercicio 04

a.
SELECT Movies.id as movie_id, Rating.rate as rating, nome, Rating.comment as rating_comment FROM Movies
left JOIN Rating ON Movies.id = Rating.movie_id;

b. 
SELECT Movies.id as movie_id, nome, MovieCast.actor_id FROM Movies
right JOIN MovieCast ON MovieCast.actor_id = Movies.id;

c. 
SELECT AVG(Rating.rate), Movies.id, Movies.nome FROM Movies
LEFT JOIN Rating ON Movies.id = Rating.movie_id
GROUP BY (Movies.id);