# Introdução a Banco de Dados

#### Exercicio 01

**A. Comandos Query:**
- VARCHAR - indica o numero maximo de caracteres.
- PRIMARY KEY - Primeira coluna.
- NOT NULL - não pode ser preenchido vazio.
- DATE - Representa uma data.

**B. Comando SHOW**
- SHOW DATABASES - mostra meus bancos de dados.
- SHOW TABLES - mostra as tabelas.

**C. Comando Describe:**
- SHOW Actor - Ocorreu um erro de sintaxe.
- DESCRIBE - é um atalho para o comando 'SHOW COLUMNS FROM'. O correto seria DESCRIBE Actor, ele me mostra a estrutura da tabela.

#### Exercicio 02

**A. Criado**
**B.**
- "O campo 'gender' não tem um valor padrão",
- "Duplicate entry '002' for key 'PRIMARY'"

**C.**
- Column count doesn't match value count at row 1.
**D.**
- Field 'name' doesn't have a default value.
**E.**
- Incorrect date value: '1950' for column 'birth_date' at row 1.

#### Exercicio 03

**A.**
- SELECT id, name from Actor WHERE gender = "female";

**B.**
- SELECT name, salary from Actor WHERE name = "Tony Ramos";

**C.**
- SELECT * from Actor WHERE gender = "invalid";

**D.**
- SELECT id, name, salary from Actor WHERE salary < 500000;

**E.**
- Error Code: 1054. Unknown column 'nome' in 'field list'
- SELECT id, name from Actor WHERE id = "002";

#### Exercicio 04

**A.**
- A query é auto explicativa, selecionamos a tabela por completo com "SELECT * FROM Actor" e logo após damos condições com o "WHERE" na coluna 'name' o que começar com A ou J, e também tiver o salario acima de 300.000. Dessa forma:
"WHERE (name LIKE "A%" or NAME like "J%") AND salary > 300000;"

**B.**
- WHERE (name NOT LIKE "A%") AND salary > 350000;

**C.**
- WHERE name LIKE "%G%" or NAME like "%g%";

**D.**
- WHERE (name LIKE "%G%" or name LIKE "%g%" or name LIKE "%A%" or name LIKE "%a%") AND salary between 350000 AND 900000;

#### Exercicio 05

**A.**

CREATE TABLE Movies(
	id VARCHAR(255) PRIMARY KEY,
    	nome VARCHAR(255) NOT NULL UNIQUE,
    	sinopse TEXT NOT NULL,
    	data_de_lancamento DATE NOT NULL,
    	avaliacao INT NOT NULL
);

#### Exercicio 06
