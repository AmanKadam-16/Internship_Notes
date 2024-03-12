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
    






    const [reminder, setReminder] = useState(false)




    
    

    return (
        <Container>
            <Grid container direction="column" alignItems="center" justifyContent="center">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <PageHeader heading={'Add Task'} subheading={''} />
                    </Grid>
                    <Grid item xs={12}>
                        <RadioList ItemList={} Label={'Task Subject'}
                            DefaultValue={} ClickItem={} 
                            ErrorMessage={} />
                    </Grid>
                    <Grid item xs={12}>
                        <InputField Item={} Label={'Task Name'}
                            ClickItem={} 
                            ErrorMessage={} />
                    </Grid>
                    <Grid item xs={12}>
                        <CalendarField Item={} Label={'Date & Time'}
                            ClickItem={} 
                            ErrorMessage={} />
                    </Grid>
                    <Grid item xs={12}>
                        <Dropdown ItemList={} Label={'Task Type'}
                            DefaultValue={} ClickItem={} 
                            ErrorMessage={} />
                    </Grid>

                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox checked={reminder} onChange={handleCheckboxChange} />}
                            label="Set Reminder"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <ButtonField Label={'Submit'} ClickItem={} /> &nbsp;&nbsp;
                        <ButtonField Label={'Cancel'} ClickItem={} />
                    </Grid>
                    <Grid item xs={12}>

                    </Grid>
                </Grid>
                <br /><br /><br />
                <Grid item xs={12} md={6} >
                    <TasksList taskId={} />

                </Grid>
            </Grid>
        </Container>
    )
}

export default AddTask
