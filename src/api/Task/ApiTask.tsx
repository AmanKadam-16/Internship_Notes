import { IAddTaskBody, IGetTaskDetailsBody } from "src/interfaces/Task/ITask";
import http from '../../requests/SchoolService/schoolServices';



const GetTaskSubjectListApi = () => {
    return http.post<IAddTaskBody[]>('GetTaskSubjects');
};

const GetTaskDetailsApi = (data: IGetTaskDetailsBody) => {
    return http.post<IAddTaskBody>('GetEmployeeDetails', data);
};

const TaskApi = {
    GetTaskSubjectListApi,
    GetTaskDetailsApi,
}

export default TaskApi;