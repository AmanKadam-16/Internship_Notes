import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import { Container, Grid } from '@mui/material';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IGetTaskDetailsBody,IAddTaskBody } from 'src/interfaces/Task/ITask';
import DynamicList from 'src/libraries/Training/DynamicList';
import PageHeader from 'src/libraries/heading/PageHeader';
import AddTask from 'src/components/Task/AddTask'
import { deleteTaskDetails, getTasksList, resetDeleteTaskDetails } from "src/requests/Task/RequestTask";
import { RootState } from 'src/store';

const TasksList = ({}) => {




    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <PageHeader heading={'Task List'} subheading={''} />
                </Grid>
                <Grid item xs={12}>
                    <DynamicList HeaderList={} ItemList={}
                        IconList={} ClickItem={} />
                </Grid>
            </Grid>
        </Container >
    )
}

export default TasksList