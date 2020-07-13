#### Exercicio 01

a. De acordo com o artigo "O que é UUID" existe uma desvantagem em usar UUIDs pois o desempenho cai quando armazenado no BG como string. Mas acredito que seu uso em string seja para facilitar a comparação de dados em requisições.

#### Exercicio 02

a. Na primeira variavel ela declara o nome da tabela. 
Na variavel connection, me conecta com o banco de dados com o login feito no arquivo .env.
E em createUser uma variavel que recebe como parametros os dados para criar um usuario e inserir na tabela.

b. CREATE TABLE User(
	id varchar(255) primary KEY,
    email varchar(255) unique not null,
    password varchar(255) not null
);

#### Exercicio 03

a. Ela declara que o que vem do "process.env. JWT_KEY" é uma string. Para dar a certeza que o que a resposta disso é um string.

b. 