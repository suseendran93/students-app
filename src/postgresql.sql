--CREATE A DB---
CREATE DATABASE students;


-- CREATE A TABLE---
CREATE TABLE students (
  ID SERIAL PRIMARY KEY, 
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  age INT,
  dob DATE
  );

