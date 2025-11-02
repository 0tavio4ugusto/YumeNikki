CREATE DATABASE YUMENIKKI;
USE YUMENIKKI;

CREATE USER 'YUME'@'%' IDENTIFIED BY '0000';

GRANT INSERT ON YUMENIKKI.* TO 'YUME'@'%';
GRANT SELECT ON YUMENIKKI.* TO 'YUME'@'%';
FLUSH PRIVILEGES;

CREATE TABLE usuarios (
idusuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
nickname VARCHAR(45),
email VARCHAR(45),
senha VARCHAR(45)
);

CREATE TABLE segredos (
idsegredo INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
info VARCHAR(45)
);

CREATE TABLE usuario_segredo (
idusuario INT,
idsegredo INT,
CONSTRAINT PRIMARY KEY (idusuario, idsegredo),
dtpegou DATE,
	CONSTRAINT FOREIGN KEY fkusuario (idusuario) REFERENCES usuarios(idusuario),
    CONSTRAINT FOREIGN KEY fksegredo (idsegredo) REFERENCES segredos(idsegredo)
);

CREATE TABLE tempo (
idtempo INT PRIMARY KEY AUTO_INCREMENT,
tempo DATE,
idusuario INT,
idpagina INT
);


