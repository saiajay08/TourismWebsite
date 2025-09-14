-- Create database
CREATE DATABASE tourism;

-- Use database
USE tourism;

-- Create bookings table
CREATE TABLE bookings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  destination VARCHAR(100) NOT NULL,
  date DATE NOT NULL
);
