import { Container, Grid } from "@mui/material"
import Checkbox from "@mui/material/Checkbox"
import FormControlLabel from '@mui/material/FormControlLabel'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from 'react-toastify'
import ButtonField from "src/libraries/Training/ButtonField"
import CalendarField from "src/libraries/Training/CalendarField"
import Dropdown from "src/libraries/Training/Dropdown"
import InputField from "src/libraries/Training/InputField"
import RadioList from "src/libraries/Training/RadioList"
import PageHeader from "src/libraries/heading/PageHeader"
import TasksList from "./TasksList"
import { IAddTaskBody,IGetTaskDetailsBody } from "src/interfaces/Task/ITask"
import {
    getTaskSubjectList,
    getTaskTypeList,
    resetAddTaskDetails,
    AddTaskDetails,
    getTasksList,
    getTaskDetails
} from "src/requests/Task/RequestTask"
import { RootState } from 'src/store'
import { useNavigate } from 'react-router-dom'
import {getCalendarFormat } from "../Common/Util"


const AddTask = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [Id, setId] = useState('')
    const taskSubjectList = useSelector((state: RootState) => state.Task.TaskSubjectList);
    const taskTypeList = useSelector((state: RootState) => state.Task.TaskTypeList);
    const AddTaskMsg = useSelector((state: RootState) => state.Task.AddTaskMsg);
    const TaskDetails = useSelector((state: RootState) => state.Task.TaskDetails);


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
    const [TaskSubjectErrorMessage, setTaskSubjectErrorMessage] = useState("")
    const [TaskTypeErrorMessage, setTaskTypeErrorMessage] = useState("")
    const [dateTimeErrorMessage, setdateTimeErrorMessage] = useState("")
    const [TaskNameErrorMessage, setTaskNameErrorMessage] = useState("")
    
    /////


    useEffect(() => {
        dispatch(getTaskSubjectList())
        dispatch(getTaskTypeList())
        const GetTaskDetailsBody: IGetTaskDetailsBody = {
            ID: Number(Id)
        }
        dispatch(getTaskDetails(GetTaskDetailsBody))
    }, [Id])

    useEffect(() => {
            if (AddTaskMsg != "") {

                toast.success(AddTaskMsg)
                dispatch(resetAddTaskDetails())
                // navigate("../../EmployeeList")
                dispatch(getTasksList())
                ClearFormFields();
            }  

    }, [AddTaskMsg])

    // useEffect(() => {
    //     dispatch(getTaskTypeList())
    //     // const GetTaskDetailsBody: IGetTaskDetailsBody = {
    //     //     ID: Number(Id)
    //     // }
    //     // dispatch(getTaskDetails(GetTaskDetailsBody))
    // }, [])

    useEffect(() => {
        if (TaskDetails != null) {
            setTask(TaskDetails.TaskName)
            setDateTime(getCalendarFormat(TaskDetails.Tasktime))
            setTaskSubjectId(TaskDetails.TaskSubjectId)
            setTaskTypeId(TaskDetails.TaskTypeId)
            setReminder(TaskDetails.IsReminder)
        }
    }, [TaskDetails])
    ////////
    const ClearFormFields = () => {
        setTask('')
        setDateTime('')
        setTaskSubjectId('0')
        setTaskTypeId('0')
        setReminder(false)
        setTaskNameErrorMessage('')
        setdateTimeErrorMessage('')
        setTaskTypeErrorMessage('')
        setTaskSubjectErrorMessage('')
    }

    ///////
    const clickTaskSubject = (value) => {
        setTaskSubjectId(value)
    }
    const clickTask = (value) => {
        setId(value)
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
        ClearFormFields();
    }


    // //////
    // const IsFormValid = () => {
    //     let returnVal = true
    //     if (taskSubjectId === "0") {
    //         setTaskSubjectErrorMessage("Field is mandatory")
    //         returnVal = false
    //     } 
    //     if (taskName === "") {
    //         setTaskNameErrorMessage("Field is mandatory")
    //         returnVal = false
    //     }
    //     if (dateTime === "") {
    //         setdateTimeErrorMessage("Field is mandatory")
    //         returnVal = false
    //     }
    //     if (taskTypeId === "0") {
    //         setTaskTypeErrorMessage("Field is mandatory")
    //         returnVal = false
    //     }

    const IsFormValid = () => {
        let returnVal = true;
        if (taskSubjectId === "0") {
            setTaskSubjectErrorMessage("Field is mandatory");
            returnVal = false;
        } else {
            setTaskSubjectErrorMessage("");
        }
        if (taskName === "") {
            setTaskNameErrorMessage("Field is mandatory");
            returnVal = false;
        } else {
            setTaskNameErrorMessage("");
        }
        if (dateTime === "") {
            setdateTimeErrorMessage("Field is mandatory");
            returnVal = false;
        } else {
            setdateTimeErrorMessage("");
        }
        if (taskTypeId === "0") {
            setTaskTypeErrorMessage("Field is mandatory");
            returnVal = false;
        } else {
            setTaskTypeErrorMessage("");
        }
        return returnVal;
    }
    

    //
    // const IsFormValid = () => {
    //     let returnVal = true
    //     if (taskSubjectId == "0" || taskTypeId == "0"
    //     && dateTime == "" || taskName == "") {
    //         setTaskSubjectErrorMessage("Field is mandatory")
    //         setTaskTypeErrorMessage("Field is mandatory")
    //         setdateTimeErrorMessage("Field is mandatory")
    //         setTaskNameErrorMessage("Field is mandatory")
    //         returnVal = false
    //     }
/////////
    
    const clickSubmit = () => {
        if (IsFormValid()) {
            const AddTaskBody: IAddTaskBody = {
                ID: Id == undefined ? 0 : Number(Id),
                TaskName: taskName,
                Tasktime: dateTime,
                TaskSubjectId: Number(taskSubjectId),
                TaskTypeId: Number(taskTypeId),
                IsReminder: reminder
            }
            dispatch(AddTaskDetails(AddTaskBody))
            // ClearFormFields();
            // alert("Task Created Successfully")
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
                            ClickItem={clickTaskName} 
                            ErrorMessage={TaskNameErrorMessage} />
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
                        <ButtonField Label={'Cancel'} ClickItem={clickCancel} />
                    </Grid>
                    <Grid item xs={12}>

                    </Grid>
                </Grid>
                <br /><br /><br />
                <Grid item xs={12} md={6} >
                    <TasksList ClickItemList={clickTask} />

                </Grid>
            </Grid>
        </Container>
    )
}

export default AddTask
