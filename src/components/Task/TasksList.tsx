import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import { Container, Grid } from '@mui/material';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IGetTaskDetailsBody,IAddTaskBody } from 'src/interfaces/Task/ITask';
import DynamicList from 'src/libraries/Training/DynamicList';
import PageHeader from 'src/libraries/heading/PageHeader';
import { deleteTaskDetails, getTasksList, resetDeleteTaskDetails } from "src/requests/Task/RequestTask";
import { RootState } from 'src/store';

const TasksList = ({ ClickItemList }) => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const TasksList = useSelector((state: RootState) => state.Task.TasksList);
    const deleteTaskdetailsMsg = useSelector((state: RootState) =>
        state.Task.deleteTaskdetailsMsg);
    const HeaderList = ["Task Subject", "Task Name", "Day & Time", "Task Type", "Edit", "Delete"]
    const IconList = [
        { Id: 1, Icon: <EditIcon />, Action: 'Edit' },
        { Id: 2, Icon: <CloseIcon />, Action: 'Delete' },
    ];
    useEffect(() => {
        dispatch(getTasksList())
    }, [])
    useEffect(() => {
        if (deleteTaskdetailsMsg != "") {
            toast.success(deleteTaskdetailsMsg);
            dispatch(resetDeleteTaskDetails())
            dispatch(getTasksList())
        }
    }, [deleteTaskdetailsMsg])


    const ClickItem = (value) => {
        if (value.Action == "Delete") {
            if (window.confirm("Are you sure you want to delete this Task?")) {
                const GetTaskDetailsBody: IGetTaskDetailsBody = {
                    ID: value.Id
                }
                dispatch(deleteTaskDetails(GetTaskDetailsBody))
            }
        }
        if (value.Action == "Edit") {
            navigate("../AddTask/" + value.Id)
        }
        if (value.Action == "Edit") {
            ClickItemList(value.Id)
            navigate("../" + value.Id)
        }
    }


    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <PageHeader heading={'Task List'} subheading={''} />
                </Grid>
                <Grid item xs={12}>
                    <DynamicList HeaderList={HeaderList} ItemList={TasksList}
                        IconList={IconList} ClickItem={ClickItem} />
                </Grid>
            </Grid>
        </Container >
    )
}

export default TasksList