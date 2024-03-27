```sql
--- use DB
use enquiryForm;

--- print parent table
select * from studentInfo;

--- create procedure for add student(Enquiry Form), FollowUP Form(for adding status | reminder | comment)
--- Admission Form (for adding the payment proof)
---

alter proc USP_AddStudentInfo
@Id int=0 ,
@studentName varchar(50),
@birthDate date,
@studentAge int,
@fatherName varchar(50),
@fatherPhone varchar(20),
@motherName varchar(50),
@motherPhone varchar(20),
@address varchar(100),
@societyName varchar(50),
@email varchar(50),
@refClass int,
@refStatus int=null,
@refReminder int=null,
@comment varchar(255)=null,
@imageData varchar(255)=null


AS
BEGIN

--- If Id = 0 then the passed data will be inserted as new record into the table

If @Id = 0
begin
insert into studentInfo(studentName,birthDate,studentAge,fatherName,fatherPhone,motherName,motherPhone,
address,societyName,email,refClass) 
values(@studentName,@birthDate,@studentAge,@fatherName,@fatherPhone,@motherName,@motherPhone,
@address,@societyName,@email,@refClass);
end

--- If Id!=0 then the passed data will be overwritten on the record to Existing Id.
else

begin
update studentInfo
set studentName=@studentName ,birthDate=@birthDate,studentAge=@studentAge,fatherName=@fatherName,fatherPhone=@fatherPhone,
motherName=@motherName,motherPhone=@motherPhone,address=@address,societyName=@societyName,email=@email,refClass=@refClass,
refStatus = ISNULL(@refStatus,refStatus), refReminder=ISNULL(@refReminder,refReminder),comment=ISNULL(@comment,comment),
imageData=ISNULL(@imageData,imageData)
where Id = @Id;
end

END


--- This Scenario is for the Enquiry Form |  This also follows for save button in this form. | API Call
exec USP_AddStudentInfo 0,'Bob Smith', '2008-03-25', 14, 
'David Smith', '9876543210', 'Sarah Smith', '0123456789', 
'789 Oak Avenue', 'Maple Heights', 'bob.smith@example.com',
2;

select * from studentInfo;

--- This Scenario is for the Follow Up Form  | The same follow for the Follow Up Form while saving | API Call
exec USP_AddStudentInfo 3,'Bob Smith', '2008-03-25', 14, 
'David Smith', '9876543210', 'Sarah Smith', '0123456789', 
'789 Oak Avenue', 'Maple Heights', 'bob.smith@example.com',
2, 1, 1, 'We will Think';


--- This Scenario is for the Admission Form | This USP will be used in Admission form Submit button | API Call
exec USP_AddStudentInfo 3,'Bob Smith', '2008-03-25', 14, 
'David Smith', '9876543210', 'Sarah Smith', '0123456789', 
'789 Oak Avenue', 'Maple Heights', 'bob.smith@example.com',
2, 1, 1, 'We will Think','C://path/localstorage/imt.jpg';


```
