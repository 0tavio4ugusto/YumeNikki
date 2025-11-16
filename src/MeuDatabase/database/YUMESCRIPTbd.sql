CREATE DATABASE YUMENIKKI;
USE YUMENIKKI;

CREATE USER 'YUME'@'%' IDENTIFIED BY 'Yumenikki@2025';

GRANT INSERT ON YUMENIKKI.* TO 'YUME'@'%';
GRANT SELECT ON YUMENIKKI.* TO 'YUME'@'%';
GRANT UPDATE ON YUMENIKKI.* TO 'YUME'@'%';
FLUSH PRIVILEGES;

CREATE TABLE usuarios (
idusuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
email VARCHAR(45),
senha VARCHAR(45),
nick VARCHAR(45)
);

CREATE TABLE segredos (
idsegredo INT AUTO_INCREMENT,
idusuario INT,
apartamento INT,
engrenagens INT,
floresta INT,
apartamentos INT,
cassino INT,
escuro INT,
livraria INT,

CONSTRAINT fkusuariooo FOREIGN KEY  (idusuario) REFERENCES usuarios(idusuario),
CONSTRAINT PRIMARY KEY (idsegredo, idusuario)

);

CREATE TABLE usuario_segredo (
    idhora INT PRIMARY KEY AUTO_INCREMENT,
    idusuario INT,
    segredo VARCHAR(45),
    dtpegou DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fkusuario FOREIGN KEY (idusuario) REFERENCES usuarios(idusuario)
);

CREATE TABLE tempo (
idtempo INT PRIMARY KEY AUTO_INCREMENT,
tempo INT,
idusuario INT,
idpagina INT,
    CONSTRAINT FOREIGN KEY fkusuarioo (idusuario) REFERENCES usuarios(idusuario)
);


