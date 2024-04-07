import { Container, Grid } from "@mui/material"
import Checkbox from "@mui/material/Checkbox"
import FormControlLabel from '@mui/material/FormControlLabel'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { IGetTaskDetailsBody } from "src/interfaces/Task/ITask"
import ButtonField from "src/libraries/Training/ButtonField"
import CalendarField from "src/libraries/Training/CalendarField"
import Dropdown from "src/libraries/Training/Dropdown"
import InputField from "src/libraries/Training/InputField"
import RadioList from "src/libraries/Training/RadioList"
import PageHeader from "src/libraries/heading/PageHeader"
import {
    getTaskDetails,
    getTaskSubjectList
} from "src/requests/Task/RequestTask"
import { RootState } from 'src/store'


const AddTask = () => {
    const dispatch = useDispatch();
    const [Id, setId] = useState('')
    const taskSubjectList = useSelector((state: RootState) => state.Task.TaskSubjectList);

    // const [taskSubjectList, setTaskSubjectList] = useState([
    //     { Id: 1, Name: 'SQL', Value: "1" },
    //     { Id: 2, Name: 'ASP.Net', Value: "2" },
    //     { Id: 3, Name: 'React', Value: "3" }
    // ]
    // )
    const [taskTypeList, setTaskTypeList] = useState([
        { Id: 1, Name: 'Learning', Value: "1" },
        { Id: 2, Name: 'Discussion', Value: "2" },
        { Id: 3, Name: 'Assignment', Value: "3" }
    ]
    )
    const [taskSubjectId, setTaskSubjectId] = useState("0")
    const [taskName, setTask] = useState("")
    const [dateTime, setDateTime] = useState("")
    const [taskType, setTaskType] = useState("")
    const [reminder, setReminder] = useState(false)
    //////


    useEffect(() => {
        dispatch(getTaskSubjectList())
        const GetTaskDetailsBody: IGetTaskDetailsBody = {
            ID: Number(Id)
        }
        dispatch(getTaskDetails(GetTaskDetailsBody))
    }, [Id])

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
        setTaskType(value)
    }
    const handleCheckboxChange = (event) => {
        setReminder(event.target.checked);
    };
    const clickSubmit = () => {
        alert("Task Added Successfully")
    }
    const clickCancel = () => {
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
                            DefaultValue={taskSubjectId} ClickItem={clickTaskSubject} />
                    </Grid>
                    <Grid item xs={12}>
                        <InputField Item={taskName} Label={'Task Name'}
                            ClickItem={clickTaskName} />
                    </Grid>
                    <Grid item xs={12}>
                        <CalendarField Item={dateTime} Label={'Date & Time'}
                            ClickItem={clickDateTime} />
                    </Grid>
                    <Grid item xs={12}>
                        <Dropdown ItemList={taskTypeList} Label={'Task Type'}
                            DefaultValue={taskType}
                            ClickItem={clickTaskType} />
                    </Grid>

                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox checked={reminder} onChange={handleCheckboxChange} />}
                            label="Set Reminder"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <a href="../../AddTask"><ButtonField Label={'Submit'} ClickItem={clickSubmit} /></a> &nbsp;&nbsp;
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
