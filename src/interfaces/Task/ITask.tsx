export interface IAddTaskBody {

    ID: number,

    TaskSubjectId: number,

    TaskName: string,

    Tasktime: string,

    TaskTypeId: number,

    IsReminder?: boolean,

    TaskSubjectName?: string,

    TaskTypeName?: string,
}

export interface IGetTaskDetailsBody {
    ID: number,
}


export interface IGetDropdownBody {
    ref_state_id ?: number,
    ref_country_id ?: number,
    country_id  ?: number,
    country_name ?: string,
    state_name ?: string,
    city_name ?: string,
    state_id ?: number,
    city_id  ?:number,
}