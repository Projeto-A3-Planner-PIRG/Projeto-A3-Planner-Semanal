-- criar banco de dados
CREATE DATABASE pirg;

-- usar o banco de dados pirg
USE pirg;

-- criar tabelas
CREATE TABLE evento (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    data DATE NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    concluido BOOLEAN NOT NULL,
    semana VARCHAR(3) NOT NULL
);

CREATE TABLE informacoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_evento INT,
    texto TEXT,
    FOREIGN KEY (id_evento) REFERENCES evento(id)
);





