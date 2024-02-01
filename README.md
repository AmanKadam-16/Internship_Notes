# SQL Task | Task Assignment Module
# Total 5 Stored Procedures based on task / PDF
##### By Aman Kadam
##### Problem Statement Snapshot
![SS of UI](https://github.com/AmanKadam-16/Internship_Notes/blob/02-SQL-Task-%7C-Notes-%7C-Queries/Task-Practical.jpg)
## Tables Schema
![SS of Schema](https://github.com/AmanKadam-16/Internship_Notes/blob/02-SQL-Task-%7C-Notes-%7C-Queries/Database-Diagram.jpg)

## Creating Database
```sql
CREATE DATABASE TaskDB;
```

## Use Database
```sql
USE TaskDB;
```

## TaskSubject Table - 1
```sql
CREATE TABLE TaskSubject(
    TaskSub_ID INT PRIMARY KEY IDENTITY(1,1),
    TaskSubName VARCHAR(50)
);

-- Populating TaskSubject Table
INSERT INTO TaskSubject VALUES('SQL');
INSERT INTO TaskSubject VALUES('ASP.NET');
INSERT INTO TaskSubject VALUES('React');

-- Displaying TaskSubject Table Data
SELECT * FROM TaskSubject;
```

## TaskType Table - 2
```sql
CREATE TABLE TaskType(
    TaskType_ID INT PRIMARY KEY IDENTITY(1,1),
    TaskTypeName VARCHAR(50)
);

-- Populating TaskType Table
INSERT INTO TaskType VALUES('Learning');
INSERT INTO TaskType VALUES('Discussion');
INSERT INTO TaskType VALUES('Assignment');

-- Displaying TaskType Table Data
SELECT * FROM TaskType;
```

## TaskModule Table - 3
```sql
CREATE TABLE TaskModule(
    ID INT PRIMARY KEY IDENTITY(1,1),
    TaskName VARCHAR(100),
    RefTaskSub_ID INT FOREIGN KEY REFERENCES TaskSubject(TaskSub_ID),
    RefTaskType_ID INT FOREIGN KEY REFERENCES TaskType(TaskType_ID),
    Date_Time DATETIME
);

-- Displaying TaskModule Table Data
SELECT * FROM TaskModule;

-- Populating TaskModule Table
INSERT INTO TaskModule VALUES('Database Introduction',1,1,'2024-02-01 16:00:00');
-- Inserting TaskModule records (truncated for brevity)

```

# Stored Procedures

## Usp_AddTaskDetails
```sql
CREATE PROCEDURE Usp_AddTaskDeatils
    @TaskName VARCHAR(50),
    @RefTaskSub_ID INT,
    @RefTaskType_ID INT,
    @Date_Time Datetime
AS
BEGIN
    INSERT INTO TaskModule VALUES(@TaskName,@RefTaskSub_ID,@RefTaskType_ID,@Date_Time)
END;

-- Example of executing the stored procedure
EXEC Usp_AddTaskDeatils @TaskName='SQL',@RefTaskSub_ID=1,@RefTaskType_ID=2,@Date_Time='2024-02-10 05:30:00';
```

## Usp_ViewSavedTask
```sql
CREATE PROCEDURE Usp_ViewSavedTask
AS
BEGIN
    SELECT ID,TaskSubName,TaskName,Date_Time,TaskTypeName 
    FROM ((TaskModule
    INNER JOIN TaskSubject ON TaskModule.RefTaskSub_ID=TaskSubject.TaskSub_ID)
    INNER JOIN TaskType ON TaskModule.RefTaskType_ID=TaskType.TaskType_ID);
END;

-- Example of executing the stored procedure
EXEC Usp_ViewSavedTask;
```

## Usp_EditSavedTask
```sql
ALTER PROCEDURE Usp_EditSavedTask
    @ID INT,
    @RefTaskSub_ID INT = NULL ,
    @TaskName VARCHAR = NULL,
    @Date_Time DATETIME = NULL,
    @RefTaskType_ID INT = NULL
AS
BEGIN
    UPDATE TaskModule SET TaskName=ISNULL(@TaskName, TaskName),
    RefTaskSub_ID=ISNULL(@RefTaskSub_ID,RefTaskSub_ID),
    RefTaskType_ID=ISNULL(@RefTaskType_ID,RefTaskType_ID),
    Date_Time=ISNULL(@Date_Time,Date_Time) WHERE ID=@ID;
END;

-- Example of executing the stored procedure
EXEC Usp_EditSavedTask @ID=2,@TaskName='XJUK';
```

## Usp_DeleteTaskRecord
```sql
ALTER PROCEDURE Usp_DeleteTaskRecord 
  @ID INT
AS
BEGIN
    DELETE FROM TaskModule WHERE ID=@ID;
END;

-- Example of executing the stored procedure
EXEC Usp_DeleteTaskRecord @ID=2;
```

The provided documentation outlines the creation of a database, table schema, and stored procedures in Markdown format for better readability and understanding.
```
/ / C O D E  _  R E D
