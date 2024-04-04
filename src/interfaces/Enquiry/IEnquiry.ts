export interface IAddEnquiryBody {
    ID: number,
    StudentName: string,
    Birthdate: string,
    Gender: number,
    FatherName: string,
    MotherName: string,
    FatherPhoneNo: string,
    MotherPhoneNo: string,
    SocietyName: string,
    StudentAddress: string,
    EmailId: string,
    EnquiryDate?: string,
    ClassName?: string,
    ClassId: number
}

export interface IGetEnquiryDetailsBody {
    ID: number
}
