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

**E.**
- Error Code: 1054. Unknown column 'nome' in 'field list'


