# SQL Task | EmployeeDB
# Total 5 Stored Procedures based on task / PDF
##### By Aman Kadam
##### Problem Statement Snapshot
![SS of UI](https://github.com/AmanKadam-16/Internship_Notes/blob/01-SQL-Task-%7C-Notes-%7C-Queries/Task-Practical.jpg)
## Database and Tables Creation

```sql
--- Creating Database
CREATE DATABASE EmployeeDB_1;

--- Use Database
USE EmployeeDB_1;

--- Create Table - 1
CREATE TABLE MasterDesignation(
  ID INT PRIMARY KEY IDENTITY(1,1),
  DesignationName VARCHAR(30),
);

--- Inserting Designations into MasterDesignation Table
INSERT INTO MasterDesignation (DesignationName) VALUES ('Manager');
INSERT INTO MasterDesignation (DesignationName) VALUES ('Developer');
INSERT INTO MasterDesignation (DesignationName) VALUES ('Analyst');

--- Create Table - 2
CREATE TABLE Employee(
  EmpID INT PRIMARY KEY IDENTITY(1,1),
  EmpName VARCHAR(50),
  Birthdate DATE,
  DesignationID INT FOREIGN KEY REFERENCES MasterDesignation(ID),
  Gender INT,
  EmailID VARCHAR(50),
  MobNO VARCHAR(20),
);
```

## Creating Stored Procedures

### Stored Procedure-1 for Inserting Employee Record

```sql
GO
CREATE PROCEDURE Usp_InsertNewRecord
  @EmpName VARCHAR(50),
  @Birthdate DATE,
  @DesignationID INT,
  @Gender INT,
  @EmailID VARCHAR(50),
  @MobNO VARCHAR(20)
AS
BEGIN
--- SQL Query {
INSERT INTO Employee(EmpName, Birthdate, DesignationID, Gender, EmailID, MobNO)
VALUES(@EmpName, @Birthdate, @DesignationID, @Gender, @EmailID, @MobNO);
--- SQL Query Closed }
END;

EXEC Usp_InsertNewRecord @EmpName='Aman', @Birthdate='2002-11-16', @DesignationID=1, @Gender=1, @EmailID='aman@gmail.com', @MobNo='2748731798';
```

### Stored Procedure-2 for Updating Employee Record

```sql
GO
CREATE PROCEDURE Usp_UpdateEmployeeList
  @EmpID INT,
  @EmpName VARCHAR(50) =NULL,
  @BirthDate DATE =NULL,
  @DesignationID INT =NULL,
  @Gender INT =NULL,
  @EmailID VARCHAR(50) =NULL,
  @MobNO VARCHAR(20) =NULL
AS
BEGIN
--- SQL Query {
UPDATE Employee 
SET EmpName=ISNULL(@EmpName,EmpName),BirthDate=ISNULL(@BirthDate,BirthDate),
DesignationID=ISNULL(@DesignationID,DesignationID),
Gender=ISNULL(@Gender,Gender),EmailID=ISNULL(@EmailID,EmailID),MobNO=ISNULL(@MobNO,MobNO)
 WHERE EmpID=@EmpID;
--- SQL Query Closed }
END;

EXEC Usp_UpdateEmployeeList @EmpID=1, @EmpName='Code_RED';
```

### Stored Procedure-3 for Displaying Employee Record

```sql
GO
CREATE PROCEDURE Usp_GetEmployeeDetails
  @EmpID INT
AS
BEGIN
--- SQL Query {
SELECT EmpName, DesignationName, EmailID, MobNO 
FROM Employee
INNER JOIN MasterDesignation ON Employee.DesignationID=MasterDesignation.ID WHERE EmpID=@EmpID;
--- SQL Query Closed }
END;

EXEC Usp_GetEmployeeDetails @EmpID=1;
```

### Stored Procedure-4 for Deleting Employee Record

```sql
GO
CREATE PROCEDURE Usp_DeleteEmployeeDetails 
  @EmployeeID INT
AS
BEGIN
--- SQL Query {
DELETE FROM Employee WHERE EmpID=@EmployeeID;
--- SQL Query Closed }
END;

EXEC Usp_DeleteEmployeeDetails @EmployeeID=1;
```
### Stored Procedure-5 for Dropdown Of Designation Names
``` SQL
GO
CREATE PROCEDURE Usp_MasterDesignation
AS 
BEGIN
SELECT * FROM MasterDesignation;
END
EXEC Usp_MasterDesignation;
```
/ / C O D E  _  R E D
