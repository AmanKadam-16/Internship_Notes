import React, { useState, useEffect } from 'react'
import { Container, Grid } from "@mui/material"
import ButtonField from "src/libraries/Training/ButtonField"
import CalendarField from "src/libraries/Training/CalendarField"
import Dropdown from "src/libraries/Training/Dropdown"
import InputField from "src/libraries/Training/InputField"
import RadioList from "src/libraries/Training/RadioList"
import PageHeader from "src/libraries/heading/PageHeader"
import { getCalendarFormat } from "../Common/Util"


const FollowUpForm = () => {

    const followUpDetails = {
        classId : '2',
        studentName : 'John Doe',
        fatherName : 'Jake Doe',
        fatherNumber : '1234567895',
        motherName : 'Jenny Doe',
        motherNumber : '4567891234',
        email : 'doe@gmail.com',
        statusId : '0',
        reminder : '',
        comment : ''
    };

    const statusList = [{ Id: 1, Name: "Yes", Value: "1" },
    { Id: 2, Name: "No", Value: "2" },
    { Id: 3, Name: "Did Not Connect", Value: "3" }];

    const classList = [{ Id: 1, Name: "Play Group", Value: "1" },
    { Id: 2, Name: "Nursery", Value: "2" },
    { Id: 3, Name: "Jr. K.G", Value: "3" },
    { Id: 4, Name: "Sr. K.G", Value: "4" },
    { Id: 5, Name: "Day Care", Value: "5" }];

    const [classId, setClassId] = useState('0');
    const [studentName, setStudentName] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [fatherNumber, setFatherNumber] = useState('');
    const [motherName, setMotherName] = useState('');
    const [motherNumber, setMotherNumber] = useState('');
    const [email, setEmail] = useState('');
    const [statusId, setStatusId] = useState('0');
    const [reminder, setReminder] = useState('');
    const [comment, setComment] = useState('');

//     useEffect(()=>{
// if(followUpDetails !=null){
//     setClassId(followUpDetails.classId),
//     setStudentName(followUpDetails.studentName),
//     setFatherName(followUpDetails.fatherName),
//     setFatherNumber(followUpDetails.fatherNumber),
//     setMotherName(followUpDetails.motherName),
//     setMotherNumber(followUpDetails.motherNumber),
//     setEmail(followUpDetails.email),
//     setStatusId(followUpDetails.statusId),
//     setReminder(followUpDetails.reminder),
//     setComment(followUpDetails.comment),
//     console.log(followUpDetails);
// }
//     },[followUpDetails])



    const clickClassId = (value) => {
        setClassId(value)
    };
    const clickStudentName = (value) => {
        setStudentName(value)
    };
    const clickFatherName = (value) =>{
        setFatherName(value)
    };
    const clickFatherNumber = (value) =>{
        setFatherNumber(value)
    };
    const clickMotherName = (value) =>{
        setMotherName(value)
    };
    const clickMotherNumber = (value) =>{
        setMotherNumber(value)
    };
    const clickEmail = (value) =>{
        setEmail(value)
    };
    const clickStatusId = (value) =>{
        setStatusId(value)
    };
    const clickReminder = (value) =>{
        setReminder(value)
    };
    const clickComment = (value) =>{
        setComment(value)
    };


    return (
        <Container>
            <Grid container direction="column" alignItems="center" justifyContent="center">
                <Grid container spacing={2} >
                    <Grid item xs={12}>
                        <PageHeader heading={'Follow Up Form'} subheading={''} />
                    </Grid>
                    <Grid item xs={12}>
                        <Dropdown ItemList={classList} Label={'Class'}
                            DefaultValue={classId} ClickItem={clickClassId}
                            ErrorMessage={undefined} Placeholder={'Select Class'} />
                    </Grid>
                    <Grid item xs={12}>
                        <InputField Item={undefined} Label={'Student Name'}
                            ClickItem={clickStudentName}
                            ErrorMessage={undefined} />
                    </Grid>
                    <Grid item xs={6}>
                        <InputField Item={undefined} Label={'Father Name'}
                            ClickItem={clickFatherName}
                            ErrorMessage={undefined} />
                    </Grid>
                    <Grid item xs={6}>
                        <InputField Item={undefined} Label={'Phone No.'}
                            ClickItem={clickFatherNumber}
                            ErrorMessage={undefined} />
                    </Grid>
                    <Grid item xs={6}>
                        <InputField Item={undefined} Label={'Mother Name'}
                            ClickItem={clickMotherName}
                            ErrorMessage={undefined} />
                    </Grid>
                    <Grid item xs={6}>
                        <InputField Item={undefined} Label={'Phone No.'}
                            ClickItem={clickMotherNumber}
                            ErrorMessage={undefined} />
                    </Grid>
                    <Grid item xs={6}>
                        <InputField Item={undefined} Label={'Email'}
                            ClickItem={clickEmail}
                            ErrorMessage={undefined} />
                    </Grid>
                    <Grid item xs={6}>
                        <RadioList ItemList={statusList} Label={'Status'}
                            DefaultValue={statusId}
                            ClickItem={clickStatusId}
                            ErrorMessage={undefined} />
                    </Grid>
                    <Grid item xs={12}>
                        <CalendarField Item={reminder} Label={'Reminder'}
                            ClickItem={clickReminder}
                            ErrorMessage={undefined} />
                    </Grid>
                    <Grid item xs={12}>
                        <InputField Item={comment} Label={'Comment'}
                            ClickItem={clickComment}
                            ErrorMessage={undefined} />
                    </Grid>
                    <Grid item xs={12}>
                        <ButtonField Label={'Submit'} ClickItem={undefined} /> &nbsp;&nbsp;
                        <ButtonField Label={'Cancel'} ClickItem={undefined} />
                    </Grid>

                </Grid>
            </Grid>
        </Container>
    )
}

export default FollowUpForm
