DROP DATABASE IF EXISTS gaming_store;

CREATE DATABASE gaming_store;

\c gaming_store;

-- Drop the table if it exists
DROP TABLE IF EXISTS game;

-- Create Game Table
CREATE TABLE game (
    game_id SERIAL PRIMARY KEY,
    game_title VARCHAR(255) UNIQUE NOT NULL, --this is saying the game_title MUST have something, cannot be NULL, and cannot have the same name
    quantity INT NOT NULL,
    price DECIMAL(5, 2) 
);

-- Insert Sample Data into Game Table

\COPY game FROM 'data/game.csv' WITH CSV HEADER;

-- grabs the last id so it can set the next value of the the next game id from the game table automatically \

SELECT setval('game_game_id_seq', (SELECT MAX(game_id) FROM game));

INSERT INTO game (game_title, quantity, price)
    VALUES ( 'Daniel Game', 10, 10.00);

------------------------------------------------------------------


-- DROP TABLE IF EXISTS action_figure;

CREATE TABLE action_figure (
    id INT PRIMARY KEY,
    action_figure_title VARCHAR,
    quantity INT,
    price DECIMAL(5,2)
);

\COPY action_figure FROM 'data/action_figure.csv' WITH CSV HEADER;


-- DROP TABLE IF EXISTS employee;

-- CREATE TABLE employee (
--     id INT PRIMARY KEY,
--     employee_name VARCHAR,
--     position VARCHAR,
--     salary DECIMAL(7,2)
-- );

-- \COPY employee FROM 'data/employee.csv' WITH CSV HEADER;

-- DROP TABLE IF EXISTS poster;

-- CREATE TABLE poster (
--     id INT PRIMARY KEY,
--     poster_title VARCHAR,
--     quantity INT,
--     price DECIMAL(4,2)
-- );

-- \COPY poster FROM 'data/poster.csv' WITH CSV HEADER;

