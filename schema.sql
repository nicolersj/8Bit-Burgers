CREATE DATABASE burger_bitdb;

use burger_bitdb;

CREATE TABLE meats
(
id int NOT NULL AUTO_INCREMENT,
product varchar(255) NOT NULL,
price DECIMAL(10,2) NOT NULL,
image BLOB,
PRIMARY KEY (id)
);


CREATE TABLE buns
(
id int NOT NULL AUTO_INCREMENT,
product varchar(255) NOT NULL,
price DECIMAL(10,2) NOT NULL,
image BLOB,
PRIMARY KEY (id)
);


CREATE TABLE cheeses
(
id int NOT NULL AUTO_INCREMENT,
product varchar(255) NOT NULL,
price DECIMAL(10,2) NOT NULL,
image BLOB,
PRIMARY KEY (id)
);


CREATE TABLE veggies
(
id int NOT NULL AUTO_INCREMENT,
product varchar(255) NOT NULL,
price DECIMAL(10,2) NOT NULL,
image BLOB,
PRIMARY KEY (id)
);

CREATE TABLE sides
(
id int NOT NULL AUTO_INCREMENT,
product varchar(255) NOT NULL,
price DECIMAL(10,2) NOT NULL,
image BLOB,
PRIMARY KEY (id)
);

CREATE TABLE drinks
(
id int NOT NULL AUTO_INCREMENT,
product varchar(255) NOT NULL,
price DECIMAL(10,2) NOT NULL,
image BLOB,
PRIMARY KEY (id)
);

CREATE TABLE adds_on
(
id int NOT NULL AUTO_INCREMENT,
product varchar(255) NOT NULL,
price DECIMAL(10,2) NOT NULL,
image BLOB,
PRIMARY KEY (id)
);




