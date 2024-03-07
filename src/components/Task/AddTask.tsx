import { Container, Grid } from "@mui/material"
import Checkbox from "@mui/material/Checkbox"
import FormControlLabel from '@mui/material/FormControlLabel'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import ButtonField from "src/libraries/Training/ButtonField"
import CalendarField from "src/libraries/Training/CalendarField"
import Dropdown from "src/libraries/Training/Dropdown"
import InputField from "src/libraries/Training/InputField"
import RadioList from "src/libraries/Training/RadioList"
import PageHeader from "src/libraries/heading/PageHeader"
import {
    getTaskSubjectList,
    getTaskTypeList
} from "src/requests/Task/RequestTask"
import { RootState } from 'src/store'


const AddTask = () => {
    const dispatch = useDispatch();
    const [Id, setId] = useState('')
    const taskSubjectList = useSelector((state: RootState) => state.Task.TaskSubjectList);
    const taskTypeList = useSelector((state: RootState) => state.Task.TaskTypeList);

    // const [taskSubjectList, setTaskSubjectList] = useState([
    //     { Id: 1, Name: 'SQL', Value: "1" },
    //     { Id: 2, Name: 'ASP.Net', Value: "2" },
    //     { Id: 3, Name: 'React', Value: "3" }
    // ]
    // )
    // const [taskTypeList, setTaskTypeList] = useState([
    //     { Id: 1, Name: 'Learning', Value: "1" },
    //     { Id: 2, Name: 'Discussion', Value: "2" },
    //     { Id: 3, Name: 'Assignment', Value: "3" }
    // ]
    // )
    const [taskSubjectId, setTaskSubjectId] = useState("0")
    const [taskTypeId, setTaskTypeId] = useState("0")
    const [taskName, setTask] = useState("")
    const [dateTime, setDateTime] = useState("")
    const [reminder, setReminder] = useState(false)
    //////
    const [TaskSubjectErrorMessage, setTaskSubjectErrorMessage] = useState('')
    const [TaskTypeErrorMessage, setTaskTypeErrorMessage] = useState('')
    const [dateTimeErrorMessage, setdateTimeErrorMessage] = useState('')
    /////


    useEffect(() => {
        dispatch(getTaskSubjectList())
        dispatch(getTaskTypeList())
        // const GetTaskDetailsBody: IGetTaskDetailsBody = {
        //     ID: Number(Id)
        // }
        // dispatch(getTaskDetails(GetTaskDetailsBody))
    }, [])

    // useEffect(() => {
    //     dispatch(getTaskTypeList())
    //     // const GetTaskDetailsBody: IGetTaskDetailsBody = {
    //     //     ID: Number(Id)
    //     // }
    //     // dispatch(getTaskDetails(GetTaskDetailsBody))
    // }, [])

    ///////
    const clickTaskSubject = (value) => {
        setTaskSubjectId(value)
    }
    const clickTaskName = (value) => {
        setTask(value)
    }
    const clickDateTime = (value) => {
        setDateTime(value)
    }
    const clickTaskType = (value) => {
        setTaskTypeId(value)
    }
    const handleCheckboxChange = (event) => {
        setReminder(event.target.checked);
    };
    // const clickSubmit = () => {
    //     alert("Task Added Successfully")
    // }
    const clickCancel = () => {
    }


    //////
    const IsFormValid = () => {
        let returnVal = true
        if (taskSubjectId == "0") {
            setTaskSubjectErrorMessage("Field is mandatory")
            returnVal = false
        }
        if (taskTypeId == "0") {
            setTaskTypeErrorMessage("Field is mandatory")
            returnVal = false
        }
        if (dateTime == "0") {
            setdateTimeErrorMessage("Field is mandatory")
            returnVal = false
        }
    //     // if (EmailIdErrorMessage != "" && EmailId == "") {
    //     //     setEmailIdErrorMessage("Field is mandatory")
    //     //     returnVal = false
    //     // }
    //     // if (PhoneNoErrorMessage != "" && PhoneNo == "") {
    //     //     setPhoneNoErrorMessage("Field is mandatory")
    //     //     returnVal = false
    //     // }
    //     // if (Gender == "0") {
    //     //     setGenderErrorMessage("Field is mandatory")
    //     //     returnVal = false
    //     // }
    //     // if (BirthDate == "") {
    //     //     setBirthDateErrorMessage("Field is mandatory")
    //     //     returnVal = false
    //     // }
        return returnVal
    }
    const clickSubmit = () => {
        if (IsFormValid()) {
            // const AddEmployeeBody: IAddEmployeeBody = {
            //     ID: Id == undefined ? 0 : Number(Id),
            //     EmployeeName: EmployeeName,
            //     BirthDate: BirthDate,
            //     DesignationId: Number(DesignationId),
            //     Gender: Number(Gender),
            //     EmailId: EmailId,
            //     PhoneNo: PhoneNo,
            // }
            // dispatch(AddEmployeeDetails(AddEmployeeBody))
            alert("Task Created Successfully")
        }


    }
    return (
        <Container>
            <Grid container direction="column" alignItems="center" justifyContent="center">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <PageHeader heading={'Add Task'} subheading={''} />
                    </Grid>
                    <Grid item xs={12}>
                        <RadioList ItemList={taskSubjectList} Label={'Task Subject'}
                            DefaultValue={taskSubjectId} ClickItem={clickTaskSubject} 
                            ErrorMessage={TaskSubjectErrorMessage} />
                    </Grid>
                    <Grid item xs={12}>
                        <InputField Item={taskName} Label={'Task Name'}
                            ClickItem={clickTaskName} />
                    </Grid>
                    <Grid item xs={12}>
                        <CalendarField Item={dateTime} Label={'Date & Time'}
                            ClickItem={clickDateTime} 
                            ErrorMessage={dateTimeErrorMessage} />
                    </Grid>
                    <Grid item xs={12}>
                        <Dropdown ItemList={taskTypeList} Label={'Task Type'}
                            DefaultValue={taskTypeId} ClickItem={clickTaskType} 
                            ErrorMessage={TaskTypeErrorMessage} />
                    </Grid>

                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox checked={reminder} onChange={handleCheckboxChange} />}
                            label="Set Reminder"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <ButtonField Label={'Submit'} ClickItem={clickSubmit} /> &nbsp;&nbsp;
                        <a href="../../AddTask"><ButtonField Label={'Cancel'} ClickItem={clickCancel} /></a>
                    </Grid>
                    <Grid item xs={12}>

                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default AddTask
