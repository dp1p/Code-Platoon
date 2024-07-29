DROP DATABASE IF EXISTS ice_cream_store;

CREATE DATABASE ice_cream_store;

\c ice_cream_store;
-- -----------------------------
-- DROP TABLE IF EXISTS store;

-- CREATE TABLE store (
--     store.id SERIAL PRIMARY KEY,
--     store_name VARCHAR(255).
-- );

-- -------- this will keep track of the sales of the store
-- DROP TABLE IF EXISTS total_sales;

-- CREATE TABLE total_sales(
--     total_sales_day SERIAL PRIMARY KEY,
--     total_sales DECIMAL(8,2) NOT NULL, -- this is to keep track how much total sales are there for each day
-- );
DROP TABLE IF EXISTS products CASCADE;-- when we drop products, it should drop any table that references it
DROP TABLE IF EXISTS transactions ;



-------- we have item_pricing as its own data table so we can manipulate the prices of items here


CREATE TABLE products ( 
    id SERIAL PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    base_price DECIMAL(4,2) NOT NULL
);

CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    product_id INT NOT NULL, -- to see what product is being sold
    quantity_sold INT NOT NULL, -- how many products were sold
    FOREIGN KEY (product_id) REFERENCES products(id) -- we will be referencing the product from the products table
);


INSERT INTO products (product_name, base_price)
    VALUES ('Ice Cream', 3.50), 
            ('Cones', 1.75);

-- SELECT * FROM products; -- to display all the products

INSERT INTO transactions (product_id, quantity_sold) -- many to one relationship, you can have many transactions but it is tailored to one product
    VALUES (1, 5), 
            (2, 3),
            (2, 1);