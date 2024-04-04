import { IAddEnquiryBody, IGetEnquiryDetailsBody } from "src/interfaces/Enquiry/IEnquiry"; // Update import to match your Enquiry interfaces
import http from '../../requests/SchoolService/schoolServices';

const AddStudentApi = (data: IAddEnquiryBody) => {
  return http.post<string>('AddStudent', data);
};
const GetEnquiryListApi = () => {
  return http.post<IAddEnquiryBody[]>('GetEnquiryList'); // Assuming 'GetEnquiryList' is the endpoint for fetching the enquiry list
};

const GetClassApi = () => {
  return http.post<IAddEnquiryBody[]>('GetClass');
};




const EnquiryApi = {
  AddStudentApi,
  GetEnquiryListApi,
  GetClassApi
 
};
export default EnquiryApi;
