```sql
create database enquiryForm;


use enquiryForm;

create table class(
classId int primary key identity(1,1),
className varchar(50)
);

insert into class values('Play group');
insert into class values('Nursery');
insert into class values('Junior K.G');
insert into class values('Senior K.G');
insert into class values('Day Care');
select * from class;

create table status(
statusId int primary key identity(1,1),
statusName varchar(50)
);
insert into status values('Yes');
insert into status values('No');
insert into status values('Did not connect');


select * from status;



create table reminder(
reminderId int primary key identity(1,1),
reminderName varchar(50)
);

insert into reminder values('2 Days');
insert into reminder values('7 Days');
insert into reminder values('15 Days');
insert into reminder values('1 Month');


select * from reminder;


create table studentInfo(
Id int primary key identity(1,1),
studentName varchar(50),
birthDate date,
studentAge int,
fatherName varchar(50),
fatherPhone varchar(20),
motherName varchar(50),
motherPhone varchar(20),
address varchar(100),
societyName varchar(50),
email varchar(50),
refClass int foreign key references class(classId),
refStatus int foreign key references status(statusId) null,
refReminder int foreign key references reminder(reminderId) null,
comment varchar(255) null,
imageData VARBINARY(MAX) null
);

select * from studentInfo;

insert into studentInfo(studentName,birthDate,studentAge,fatherName,fatherPhone,motherName,motherPhone,address,societyName,email,refClass) values('John Doe','2002-11-15',21,'Jake Doe','1597536842','Jenny Doe','9637412458',
'New York East 4/2','Prime Society','johndoe@gmail.com',1);
```



