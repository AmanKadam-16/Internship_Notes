import { IAddTaskBody, IGetTaskDetailsBody } from "src/interfaces/Task/ITask";
import http from '../../requests/SchoolService/schoolServices';



const GetTaskSubjectListApi = () => {
    return http.post<IAddTaskBody[]>('GetTaskSubjects');
};

const GetTaskTypeListApi = () => {
    return http.post<IAddTaskBody[]>('GetTaskType');
};

const GetTaskDetailsApi = (data: IGetTaskDetailsBody) => {
    return http.post<IAddTaskBody>('GetEmployeeDetails', data);
};

const AddTaskApi = (data: IAddTaskBody) => {
    return http.post<string>('AddTasks', data);
  };

const TaskApi = {
    GetTaskSubjectListApi,
    GetTaskDetailsApi,
    GetTaskTypeListApi,
    AddTaskApi
}

export default TaskApi;