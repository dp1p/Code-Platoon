-- Scenario 5
-- Find the total number of genre-game associations.
-- "how many games are in a specfic genre"

-- SELECT COUNT(game_id) AS games, genre_id AS genre FROM genre_game GROUP BY genre_id ORDER BY genre_id;

SELECT genre.genre_id, genre.genre_name, game.game_id, game.game_title  -- grabs all the information from game table by their id, same with genre
FROM genre_game --specify which table connects both game and genre id
JOIN genre ON genre_game.genre_id = genre.genre_id -- Join the GENRE table with the genre_game table. Match genre_game.genre_id with genre.genre_id.
JOIN game on genre_game.game_id = game.game_id
GROUP BY genre_id;

-- Scenario 1
-- Retrieve the names of all gaming engines.

-- SELECT engine_name FROM gaming_engine;

-- Scenario 2
-- Find the total quantity of all games in stock.

-- Scenario 6
-- Retrieve the titles of action figures with a price between $20.00 and $50.00.

-- SELECT action_figure_title, price FROM action_figure WHERE price BETWEEN 20.00 AND 50.00;

-- Scenario 19
-- Retrieve the social security numbers and names of employees with salaries over $50,000.


-- SELECT social_security.ssn, employee.employee_name, employee.salary
-- FROM social_security
-- JOIN employee ON social_security.employee_id = employee.id;

-- SELECT social_security.ssn, employee.employee_name, employee.salary
-- FROM social_security
-- LEFT JOIN employee ON social_security.employee_id = employee.id;



-- Scenario 32
-- Get the names and positions of employees working on shifts with a 
-- start time between '2024-02-01' and '2024-03-07 13:00:00'.

-- SELECT employee.employee_name, employee.position, shifts.start_time, shifts.end_time -- what are we selecting?
-- FROM shifts -- where are we putting all the informtion in?
-- JOIN employee ON shifts.employee_id = employee.id; -- where do we want to put all our information from 'employee' table in?


-- SELECT COUNT(id) FROM shifts;







-- Retrieve the social security numbers and names of 
-- employees with salaries over $50,000.


SELECT social_security.ssn, employee.salary
FROM employee
WHERE salary > 50000;













-- SELECT employee.employee_name, employee.salary
-- FROM employee
-- INNER JOIN social_security ON salary >= 50000;


-- Scenario 7
-- List the poster titles and prices for posters with quantities between 15 and 30.

-- SELECT poster_title, price FROM poster WHERE quantity BETWEEN 15 AND 30

-- Scenario 8
-- Get the names and positions of employees earning more than $40,000 per year.

-- SELECT employee_name, position FROM employee WHERE salary > 40000

-- Scenario 13
-- Retrieve the titles of games with the word 'Warzone' in their title.

-- SELECT game_title FROM game WHERE game_title LIKE '%Warzone%'