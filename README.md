# SQL Script for Creating Database Tables and Stored Procedures

## Create Database and Tables

```sql
-- Create database dropDownTask;
-- use Employee_TaskDB;

create table country (
country_id int primary key identity(1,1),
country_name varchar(255)
);

create table state (
state_id int primary key identity(1,1),
state_name varchar(255),
ref_country_id int foreign key references country(country_id)
);

create table city (
city_id int primary key identity(1,1),
city_name varchar(255),
ref_country_id int foreign key references country(country_id),
ref_state_id int foreign key references state(state_id)
);
```

## Insert Data

```sql
-- Insert data into the country table
INSERT INTO country (country_name) VALUES
('India'), -- Country 1
('United States'), -- Country 2
('Canada'); -- Country 3

-- Insert data for India
INSERT INTO state (state_name, ref_country_id) VALUES
('Karnataka', 1), -- State 1 (India)
('Maharashtra', 1); -- State 2 (India)

INSERT INTO city (city_name, ref_country_id, ref_state_id) VALUES
('Bangalore', 1, 1), -- City 1 (India, Karnataka)
('Mumbai', 1, 2); -- City 2 (India, Maharashtra)

-- Insert data for United States
INSERT INTO state (state_name, ref_country_id) VALUES
('California', 2), -- State 1 (USA)
('New York', 2); -- State 2 (USA)

INSERT INTO city (city_name, ref_country_id, ref_state_id) VALUES
('San Francisco', 2, 3), -- City 1 (USA, California)
('New York City', 2, 4); -- City 2 (USA, New York)

-- Insert data for Canada
INSERT INTO state (state_name, ref_country_id) VALUES
('Ontario', 3), -- State 1 (Canada)
('Quebec', 3); -- State 2 (Canada)

INSERT INTO city (city_name, ref_country_id, ref_state_id) VALUES
('Toronto', 3, 5), -- City 1 (Canada, Ontario)
('Montreal', 3, 6); -- City 2 (Canada, Quebec)
```

## Select Data

```sql
-- Display data from tables
select * from country;
select * from state;
select * from city;
```

## Stored Procedures

### Stored Procedure for Retrieving Country List

```sql
create proc USP_GetCountryList
as
begin
select * from country;
end

exec USP_GetCountryList
```

### Stored Procedure for Retrieving State List

```sql
create proc USP_GetStateList
@Country_id int
as 
begin
select state_id, state_name from state where ref_country_id = @Country_id;
end

exec USP_GetStateList 1;
```

### Stored Procedure for Retrieving City List

```sql
create proc USP_GetCityList
@Country_id int,
@State_id int
as
begin
select city_id, city_name from city where ref_country_id = @Country_id and ref_state_id = @State_id;
end

exec USP_GetCityList 1, 2;
```
