-- Schema
DROP TABLE IF EXISTS students; -- IF there is already an existing table with the same name, drop it 
DROP TABLE IF EXISTS addresses;
DROP TABLE IF EXISTS classes;
DROP TABLE IF EXISTS enrollments;



CREATE TABLE addresses (
  id           serial PRIMARY KEY,
  line_1       varchar(255),  -- street address
  city         varchar(255),
  state        varchar(255),    -- this will only accept characters that are 50 chars long
  zipcode      integer      -- does not need a comma at the end
);

CREATE TABLE students (
  id           serial PRIMARY KEY,
  first_name   varchar(255) NOT NULL,
  last_name    varchar(255) NOT NULL,
  birthdate    date,
  address_id   integer
);

CREATE TABLE classes (
  id           serial PRIMARY KEY,
  name         varchar(255) NOT NULL,  
  credits      integer     -- will accept integers that are two characters long
);

CREATE TABLE enrollments (
  id           serial PRIMARY KEY,
  student_id   integer,  
  class_id     integer,     -- will accept integers that are two characters long
  grade        varchar(2)
);
-- \COPY students FROM '/Users/danielphanachone/Documents/CodePlatoon/ASSIGNMENTS/WEEK3/sql-basics/students.csv' DELIMITER ',' CSV HEADER;
-- enter these commands in the psql terminal
-- SELECT * FROM students;
-- SELECT * FROM addresses;
-- SELECT * FROM classes;
-- SELECT * FROM enrollments;


-- you must use createdb <db-name> to intialize
-- and use psql <file name> 
-- \i create_schema.sql #this will intialize the table to be created with the values


-- not null means that value can NOT be null

