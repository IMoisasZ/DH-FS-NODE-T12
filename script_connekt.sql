CREATE DATABASE connekt;
USE connekt;

-- -----------------------------------------------------
-- Table usuarios
-- -----------------------------------------------------
CREATE TABLE usuarios (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome_usuario VARCHAR(20) NOT NULL UNIQUE,
  nome VARCHAR(100) NOT NULL,
  sobrenome VARCHAR(100) NOT NULL,
  email VARCHAR(200) NOT NULL UNIQUE,
  senha VARCHAR(12) NOT NULL,
  status char(1) NOT NULL DEFAULT 1); /*1 = ATIVO / 0=BLOQUEADO */

-- -----------------------------------------------------
-- Table tipo_curso
-- -----------------------------------------------------
CREATE TABLE tipo_curso (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  situcao CHAR(1) NOT NULL DEFAULT 1);


-- -----------------------------------------------------
-- Table cursos
-- -----------------------------------------------------
CREATE TABLE cursos (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(45) NULL,
  custo INT NOT NULL,
  imagem TEXT NOT NULL,
  id_tipo INT NOT NULL,
  descricao TEXT NULL);

-- -----------------------------------------------------
-- Table tempo_ensinando
-- -----------------------------------------------------
CREATE TABLE tempo_ensinando (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  id_usuario INT NOT NULL,
  id_curso INT NOT NULL,
  data_inicio DATETIME NOT NULL,
  data_termino DATETIME NOT NULL,
  tempo_ensinando VARCHAR(10) NOT NULL);

-- -----------------------------------------------------
-- Table tempo_aprendendo
-- -----------------------------------------------------
CREATE TABLE tempo_aprendendo (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  id_usuario INT NOT NULL,
  id_curso INT NOT NULL,
  data_inicio DATETIME NOT NULL,
  data_termino DATETIME NOT NULL,
  tempo_aprendendo VARCHAR(10) NOT NULL);

-- -----------------------------------------------------
-- Table publicar_curso
-- -----------------------------------------------------
CREATE TABLE publicar_curso (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  id_usuario INT NOT NULL,
  id_curso INT NOT NULL);

-- -----------------------------------------------------
-- Table agendar_curso
-- -----------------------------------------------------
CREATE TABLE agendar_curso (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  id_usuario INT NOT NULL,
  id_curso INT NOT NULL,
  data_agendamento DATE NOT NULL,
  hora_agendamento TIME NOT NULL);   
    
--------------------------------------------------------
-- FOREIGN KEY
-- -----------------------------------------------------
ALTER TABLE tempo_ensinando ADD FOREIGN KEY (id_usuario) REFERENCES usuarios (id);
ALTER TABLE tempo_ensinando ADD FOREIGN KEY (id_curso) REFERENCES cursos (id);
ALTER TABLE cursos ADD FOREIGN KEY (id_tipo) REFERENCES tipo_curso (id);
ALTER TABLE tempo_aprendendo ADD FOREIGN KEY (id_usuario) REFERENCES usuarios (id);
ALTER TABLE tempo_aprendendo ADD FOREIGN KEY (id_curso) REFERENCES cursos (id);
ALTER TABLE publicar_curso ADD FOREIGN KEY (id_usuario) REFERENCES usuarios (id);
ALTER TABLE publicar_curso ADD FOREIGN KEY (id_curso) REFERENCES cursos (id);
ALTER TABLE agendar_curso ADD FOREIGN KEY (id_usuario) REFERENCES usuarios (id);
ALTER TABLE agendar_curso ADD FOREIGN KEY (id_curso) REFERENCES cursos (id);