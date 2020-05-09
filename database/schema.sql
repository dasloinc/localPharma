-- Drops the animals_db if it exists currently --
DROP DATABASE IF EXISTS `product_db`;

-- Creates the "animals_db" database --
CREATE DATABASE `product_db`;


-- Makes it so all of the following code will affect product_db --
USE product_db;

-- Creates the table "product" within product_db --
CREATE TABLE product (

    id INTEGER(10) AUTO_INCREMENT NOT NULL,
  -- Makes a string column called "brand_name" which cannot contain null --
  brand_name VARCHAR(200) NOT NULL,
   -- Makes a string column called "labeler_name" which cannot contain null --
  labeler_name VARCHAR(200) NOT NULL,
   -- Makes a string column called "marketing_start_date" which cannot contain null --
  marketing_start_date VARCHAR(200) NOT NULL,
  -- Makes a string column called "product_id" which cannot contain null --
  product_id VARCHAR(200) NOT NULL,
    -- Makes a string column called "price" which cannot contain null --
  price VARCHAR(10) NOT NULL,

  PRIMARY KEY(id)
);

CREATE TABLE profile_table (

    id INTEGER(10) AUTO_INCREMENT NOT NULL,
  -- Makes a string column called "brand_name" which cannot contain null --
  first_name VARCHAR(200) NOT NULL,
   -- Makes a string column called "address_name" which cannot contain null --
  address_name VARCHAR(200) NOT NULL,
   -- Makes a string column called "province" which cannot contain null --
  province VARCHAR(200) NOT NULL,
  -- Makes a string column called "postal_code" which cannot contain null --
  postal_code VARCHAR(200) NOT NULL,

   PRIMARY KEY(id)
);

-- Creates new rows containing data in all named columns PRODUCTS --
INSERT INTO product (brand_name, labeler_name, marketing_start_date, product_id)
VALUES ("GINGI-PAK MAX SOFT-TWIST NO 1",  "Gingi-Pak a Division of the Belport", "19870626", "10129-001_7d855c49-3fb3-0059-e053-2a91aa0a40df");

-- Creates new rows containing data in all named columns PROFILE TABLE --

INSERT INTO profile_table (first_name, address_name, province, postal_code)
VALUES ("Daniel", "Yonge st", "ON", "L4C 0Z5");

INSERT INTO profile_table (first_name, address_name, province, postal_code)
VALUES ("Diana", "College st", "ON", "111 111");

INSERT INTO profile_table (first_name, address_name, province, postal_code)
VALUES ("Dmitri", "Wilson st", "ON", "222 222");


SELECT * FROM product;
SELECT * FROM profile_table;
-- Updates the row where the column IS PRODUCT & PROFILE_TABLE--
-- UPDATE 
-- SET 
-- WHERE

-- show ALL product with profile_table
-- INNER JOIN will only return all matching values from both tables
SELECT first_name, brand_name
FROM product
INNER JOIN profile_table ON product.profile_table = profile_table.id;