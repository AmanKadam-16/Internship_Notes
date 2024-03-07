import { createSlice } from "@reduxjs/toolkit";
import TaskApi from "src/api/Task/ApiTask";
import { IGetTaskDetailsBody,IAddTaskBody } from "src/interfaces/Task/ITask";
import { AppThunk } from "src/store";


const Taskslice = createSlice({
    name: 'Task',
    initialState: {
        AddTaskMsg: '',
        TaskList: [],
        TaskDetails: null,
        updateTaskdetailsMsg: '',
        deleteTaskdetailsMsg: '',
        TaskSubjectList: [],
        TaskTypeList: [],
        Loading: true
    },
    reducers: {
        getAddTaskMsg(state, action) {
            state.Loading = false;
            state.AddTaskMsg = action.payload;
        },
        resetAddTaskDetails(state) {
            state.Loading = false;
            state.AddTaskMsg = "";
        },
        getTaskSubjectList(state, action) {
            state.Loading = false;
            state.TaskSubjectList = action.payload;
        },
        getTaskTypeList(state, action) {
            state.Loading = false;
            state.TaskTypeList = action.payload;
        },
        getLoading(state, action) {
            state.Loading = true;
        },
        getTaskDetails(state, action) {
            state.Loading = false;
            state.TaskDetails = action.payload;
        },
    }
});

export const AddTaskDetails =
    (data: IAddTaskBody): AppThunk =>
        async (dispatch) => {
            dispatch(Taskslice.actions.getLoading(true));
            const response = await TaskApi.AddTaskApi(data);
            dispatch(Taskslice.actions.getAddTaskMsg(response.data));
        };

        export const resetAddTaskDetails =
    (): AppThunk =>
        async (dispatch) => {
            dispatch(Taskslice.actions.resetAddTaskDetails());
        };
        
export const getTaskDetails =
    (data: IGetTaskDetailsBody): AppThunk =>
        async (dispatch) => {
            dispatch(Taskslice.actions.getLoading(true));
            const response = await TaskApi.GetTaskDetailsApi(data);

            dispatch(Taskslice.actions.getTaskDetails(response.data));
        };

export const getTaskSubjectList =
    (): AppThunk =>
        async (dispatch) => {
            dispatch(Taskslice.actions.getLoading(true));
            const response = await TaskApi.GetTaskSubjectListApi();
            const responseData = response.data.map((Item, i) => {
                return {
                    Id: Item.TaskSubjectId,
                    Name: Item.TaskSubjectName,
                    Value: Item.TaskSubjectId.toString()
                };
            });
            dispatch(Taskslice.actions.getTaskSubjectList(responseData));
        };

export const getTaskTypeList =
    (): AppThunk =>
        async (dispatch) => {
            dispatch(Taskslice.actions.getLoading(true));
            const response = await TaskApi.GetTaskTypeListApi();
            const responseData = response.data.map((Item, i) => {
                return {
                    Id: Item.TaskTypeId,
                    Name: Item.TaskTypeName,
                    Value: Item.TaskTypeId.toString()
                };
            });
            dispatch(Taskslice.actions.getTaskTypeList(responseData));
        };

export default Taskslice.reducer;