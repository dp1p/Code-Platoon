DROP TABLE IF EXISTS genre CASCADE;

CREATE TABLE genre (
    genre_id SERIAL PRIMARY KEY,
    genre_name VARCHAR(20) UNIQUE NOT NULL CHECK(genre_name ~ '^[A-Za-z]')
);

-- Create Game Table
CREATE TABLE game (
    game_id SERIAL PRIMARY KEY,
    engine_id INT,  -- Define engine_id column here
    game_title VARCHAR(255) UNIQUE NOT NULL CHECK (game_title ~ '^[A-Za-z0-9 _\-:''\\]+$'),
    quantity INT NOT NULL CHECK(quantity > 0 AND quantity < 51),
    price DECIMAL(5, 2) NOT NULL CHECK(price > 10 AND price < 60),
    FOREIGN KEY (engine_id) REFERENCES gaming_engine(engine_id)  -- Reference engine_id here
);

CREATE TABLE genre_game (
    id SERIAL PRIMARY KEY,
    game_id INT,
    genre_id INT,
    FOREIGN KEY (game_id) REFERENCES game (game_id),
    FOREIGN KEY (genre_id) REFERENCES genre (genre_id)
);
