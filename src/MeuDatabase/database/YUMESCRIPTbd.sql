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
apartamentos INT,
cassino INT,
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

CREATE VIEW view_ranking_ap AS
SELECT u.nick AS nick, t.tempo AS tempo, t.idpagina AS idpagina 
FROM usuarios u JOIN tempo t u.idusuario = t.idusuario 
WHERE t.idpagina = 0 ORDER BY t.tempo DESC;

CREATE VIEW view_ranking_predio AS
SELECT u.nick AS nick, t.tempo AS tempo, t.idpagina AS idpagina 
FROM usuarios u JOIN tempo t u.idusuario = t.idusuario 
WHERE t.idpagina = 1 ORDER BY t.tempo DESC;

CREATE VIEW view_ranking_engrenagem AS
SELECT u.nick AS nick, t.tempo AS tempo, t.idpagina AS idpagina 
FROM usuarios u JOIN tempo t u.idusuario = t.idusuario 
WHERE t.idpagina = 3 ORDER BY t.tempo DESC;

CREATE VIEW view_ranking_livraria AS
SELECT u.nick AS nick, t.tempo AS tempo, t.idpagina AS idpagina 
FROM usuarios u JOIN tempo t u.idusuario = t.idusuario 
WHERE t.idpagina = 2 ORDER BY t.tempo DESC;

CREATE VIEW view_ranking_cassino AS
SELECT u.nick AS nick, t.tempo AS tempo, t.idpagina AS idpagina 
FROM usuarios u JOIN tempo t u.idusuario = t.idusuario 
WHERE t.idpagina = 4 ORDER BY t.tempo DESC;


