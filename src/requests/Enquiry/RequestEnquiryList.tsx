import { createSlice } from "@reduxjs/toolkit";
import EnquiryApi from "src/api/Enquiry/ApiEnquiry";
import { IAddEnquiryBody, IGetEnquiryDetailsBody } from "src/interfaces/Enquiry/IEnquiry";
import { AppThunk } from "src/store";
import { getDateFormatted } from 'src/components/Common/Util';

const EnquirySlice = createSlice({
    name: 'Enquiry',
    initialState: {
        AddEnquiryMsg: '',
        EnquiryList: [],
        EnquiryDetails: null,
        updateEnquiryDetailsMsg: '',
        deleteEnquiryDetailsMsg: '',
         Class: [],
        Loading: true
    },
    reducers: {
        getAddStudentMsg(state, action) {
            state.Loading = false;
            state.AddEnquiryMsg = action.payload;
        },
        resetAddEnquiryDetails(state) {
            state.Loading = false;
            state.AddEnquiryMsg = "";
        },
        getEnquiryList(state, action) {
            state.Loading = false;
            state.EnquiryList = action.payload;
        },
        getClass(state, action) {
            state.Loading = false;
            state.Class = action.payload;
        },

        getLoading(state, action) {
            state.Loading = true;
        }
    }
});

export const AddStudentDetails =
    (data: IAddEnquiryBody): AppThunk =>
        async (dispatch) => {
            dispatch(EnquirySlice.actions.getLoading(true));
            const response = await EnquiryApi.AddStudentApi(data);
            dispatch(EnquirySlice.actions.getAddStudentMsg(response.data));
        };

export const resetAddEnquiryDetails =
    (): AppThunk =>
        async (dispatch) => {
            dispatch(EnquirySlice.actions.resetAddEnquiryDetails());
        };

export const getEnquiryList =
    (): AppThunk =>
        async (dispatch) => {
            dispatch(EnquirySlice.actions.getLoading(true));
            // const responseData = response.data.map((Item, i) => {
            //     return {
            //         Id: Item.ID,
            //         Text1: Item.EmployeeName,
            //         Text2: Item.BirthDate,
            //         Text3: Item.EmailId,
            //         Text4: Item.PhoneNo,

            //     };
            const response = await EnquiryApi.GetEnquiryListApi();
            const responseData = response.data.map((Item, i) => {
                return {
                    Id: Item.ID,
                    Text1: Item.StudentName,
                    Text2: Item.ClassName,
                    Text3: getDateFormatted(Item.Birthdate),
                    Text4: Item.Gender.toString() === '1' ? 'Male' : 'Female',
                    Text5: Item.FatherPhoneNo,
                    Text6: Item.SocietyName,
                    Text7: Item.EnquiryDate

                };
            });
            dispatch(EnquirySlice.actions.getEnquiryList(responseData));
        };

        export const getClass =
        (): AppThunk =>
            async (dispatch) => {
                dispatch(EnquirySlice.actions.getLoading(true));
                const response = await EnquiryApi.GetClassApi();
                const responseData = response.data.map((Item, i) => {
                    return {
                        Id: Item.ID,
                        Name: Item.ClassName,
                        Value: Item.ID.toString()
                    };
                });
                dispatch(EnquirySlice.actions.getClass(responseData));
            };


export default EnquirySlice.reducer;
