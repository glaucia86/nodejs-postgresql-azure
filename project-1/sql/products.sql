CREATE TABLE products (
    productId SERIAL PRIMARY KEY,
    productName VARCHAR(255) NOT NULL,
    quantity INTEGER NOT NULL,
    price NUMERIC(5,2)
);