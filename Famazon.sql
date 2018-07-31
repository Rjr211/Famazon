CREATE DATABASE Famazon;

USE Famazon;

CREATE TABLE Products (
ItemID int NOT NULL,
ProductName varchar(50) NOT NULL,
DepartmentName varchar(50) NOT NULL,
Price DECIMAL(4,2) NOT NULL,
StockQuantity int NOT NULL);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
12345,
'Unlocked iPhone 8 Plus',
'Electronics',
99.99,
25);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
67891,
'Whey Protein',
'Wellness',
29.99,
25);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
23456,
'iPhone Charger',
'Electronics',
9.99,
10);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
78912,
'Macbook Charger',
'Electronics',
99.99,
8);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
34567,
'Vitamin B Complex',
'Wellness',
5.99,
30);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
89123,
'Womens Bruce Springsteen Baseball T-shirt',
'Womens Clothing',
25.99,
8);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
45678,
'Axe Body Wash',
'Personal Care',
7.99,
15);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
91234,
'Colgate Toothpaste',
'Personal Care',
3.99,
10);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
56789,
'12-Pack Sprite',
'Grocery',
6.99,
10);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
11234,
'Adobo Seasoning',
'Grocery',
3.99,
5);

USE Famazon;
CREATE TABLE Departments(
DepartmentId int AUTO_INCREMENT,
PRIMARY KEY(DepartmentId),
DepartmentName varchar(50) NOT NULL,
OverHeadCosts DECIMAL(11,2) NOT NULL,
TotalSales DECIMAL(11,2) NOT NULL);


INSERT INTO Departments (DepartmentName, OverHeadCosts, TotalSales) VALUES (
'Wellness',
10000,
0);

INSERT INTO Departments (DepartmentName, OverHeadCosts, TotalSales) VALUES (
'Grocery',
10000,
0);

INSERT INTO Departments (DepartmentName, OverHeadCosts, TotalSales) VALUES (
'Personal Care',
20000,
0);


INSERT INTO Departments (DepartmentName, OverHeadCosts, TotalSales) VALUES (
'Electronics',
50000,
0);



