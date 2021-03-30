/*criando o banco de dados*/
CREATE DATABASE escola;

/*colocando o banco de dados escola em uso*/
USE escola;

/*criando a tabela cursos*/
CREATE TABLE cursos (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    descricao VARCHAR(60)
);
/*verificando os dados da tabela*/
DESCRIBE cursos;

/*criando a tabela professores*/
CREATE TABLE professores(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR(60),
    sobrenome VARCHAR(60)
);

/* ALTER TABLE nomeAntigo RENAME TO nomeNovo */

/* criando a tabela alunos */
CREATE TABLE alunos(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR(60),
    sobrenome VARCHAR(60)
);

CREATE TABLE turmas (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    codigo VARCHAR(60),
    descricao VARCHAR(60),
    data_inicio DATE
);

/* criando a tabela teste */
CREATE TABLE teste (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR(60)
);

/* alter table - add - adicionando uma nova coluna na tabela teste */
ALTER TABLE teste ADD coluna_nova VARCHAR(60);

/* alter table - modify - alterando o tipo primitivo de uma determinada coluna na tabela teste */
ALTER TABLE teste MODIFY coluna_nova text; 

/* alter table - change -  alterando o nome da coluna e tipo primitivo na tabela teste */
ALTER TABLE teste CHANGE coluna_nova sobrenome VARCHAR(60);

/* alter table - rename - renomeando a atbela teste para funcionarios */
ALTER TABLE teste RENAME TO funcionarios;

/* alter table - drop - excluindo o campo sobrenome da tabela funcionarios */
ALTER TABLE funcionarios DROP sobrenome;

/* excluindo a tabela funcionarios */
DROP TABLE funcionarios;

/* excluindo banco de dados */
DROP DATABASE escola;







