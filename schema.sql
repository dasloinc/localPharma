
DROP DATABASE IF EXISTS product_db;

CREATE DATABASE product_db;

DROP DATABASE IF EXISTS product_db_development;

CREATE DATABASE product_db_development;

DROP DATABASE IF EXISTS product_db_test;

CREATE DATABASE product_db_test;

-- create user for product_db_test DB
create user 'newuser'@'localhost' IDENTIFIED WITH mysql_native_password BY 'eblan1';
GRANT ALL ON product_db_development.* TO 'newuser'@'localhost';

