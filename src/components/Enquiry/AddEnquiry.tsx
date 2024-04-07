import { Box, Card, Container, Grid, Typography, Divider } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IAddEnquiryBody } from "src/interfaces/Enquiry/IEnquiry";
import ButtonField from "src/libraries/Training/ButtonField";
import CalendarField from "src/libraries/Training/CalendarField";
import Dropdown from "src/libraries/Training/Dropdown";
import InputField from "src/libraries/Training/InputField";
import RadioList from "src/libraries/Training/RadioList";
import { AddStudentDetails, getClass, resetAddEnquiryDetails } from "src/requests/Enquiry/RequestEnquiryList";
import { RootState } from "src/store";
import { IsEmailValid, IsPhoneNoValid, calculateAge } from "../Common/Util";
import PageHeader from "src/libraries/heading/PageHeader";

const AddEnquiry = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [ClassID, setClassID] = useState('0')
    const [StudentName, setStudentName] = useState('')
    const [Age, setAge] = useState('')
    const [BirthDate, setBirthDate] = useState('')
    const [GenderList, setGenderList] = useState([
        { Id: 1, Name: 'Male', Value: "1" },
        { Id: 2, Name: 'Female', Value: "2" }
    ])
    const [Gender, setGender] = useState('0')
    const [FatherName, setFatherName] = useState('')
    const [FatherPhoneNo, setFatherPhoneNo] = useState('');
    const [MotherName, setMotherName] = useState('')
    const [MotherPhoneNo, setMotherPhoneNo] = useState('');
    const [StudentAddress, setStudentAddress] = useState('')
    const [SocietyName, setSocietyName] = useState('')
    const [EmailId, setEmailId] = useState('')

    const [ClassErrorMessage, setClassErrorMessage] = useState('')
    const [StudentNameErrorMessage, setStudentNameErrorMessage] = useState('')
    const [BirthDateErrorMessage, setBirthDateErrorMessage] = useState('')
    const [GenderErrorMessage, setGenderErrorMessage] = useState('')
    const [FatherNameErrorMessage, setFatherNameErrorMessage] = useState('')
    const [FatherPhoneNoErrorMessage, setFatherPhoneNoErrorMessage] = useState('')
    const [MotherNameErrorMessage, setMotherNameErrorMessage] = useState('')
    const [MotherPhoneNoErrorMessage, setMotherPhoneNoErrorMessage] = useState('')
    const [StudentAddressErrorMessage, setStudentAddressErrorMessage] = useState('')
    const [SocietyNameErrorMessage, setSocietyNameErrorMessage] = useState('')
    const [EmailIdErrorMessage, setEmailIdErrorMessage] = useState('')


    const Class = useSelector((state: RootState) => state.Enquiry.Class);
    const AddStudentMsg = useSelector((state: RootState) => state.Enquiry.AddEnquiryMsg)
    console.log(Class)

    useEffect(() => {
        dispatch(getClass())
    }, [])

    useEffect(() => {
        if (AddStudentMsg !== '') {
            toast.success(AddStudentMsg);
            dispatch(resetAddEnquiryDetails);
            clickCancel();
            // navigate("/")

        }
    }, [AddStudentMsg])
    // const AddStudentBody: IAddStudentBody = {
    //     ClassID: 1,
    //     StudentName: "Amit",
    //     Birthdate: "1-1-2000",
    //     Age: 12,
    //     Gender: 1,
    //     FatherName: "Amit",
    //     FatherPhoneNo: "1223344556",
    //     MotherName: "Amit",
    //     MotherPhoneNo: "6554433221",
    //     StudentAddress: "ASD",
    //     SocietyName: "xyz",
    //     EmailId: "mailto:amit@gmail.com",
    //     ClassName: "",
    //     CID: 0
    // }
    // useEffect(() => {
    //     dispatch(AddStudentDetails(AddStudentBody))
    // }, [])




    const clickClass = (value) => {
        setClassID(value);
        setClassErrorMessage("");
    }
    const clickStudentName = (value) => {
        setStudentName(value);
        setStudentNameErrorMessage("");
    }
    // const clickBirthDate = (value) => {
    //     setBirthDate(value)
    //     setAge(calculateAge(value).toString());
    // }
    const clickBirthDate = (value) => {
        const selectedDate = new Date(value);
        const currentDate = new Date();
        const twoYearsAgo = new Date(currentDate.getFullYear() - 2, currentDate.getMonth(), currentDate.getDate());

        // Check if the selected date is in the future
        if (selectedDate > currentDate) {
            setBirthDateErrorMessage("Birth date cannot be in the future");
        } else if (selectedDate > twoYearsAgo) {
            setBirthDateErrorMessage("Child must be at least 2 years old");
        } else {
            // Clear error message if the selected date is valid
            setBirthDateErrorMessage("");
            setBirthDate(value);
            setAge(calculateAge(value).toString());
        }
    };
    const clickCancel = () => {
        setClassID('0')
        setStudentName('')
        setBirthDate('')
        setAge('')
        setGender('0')
        setFatherName('')
        setFatherPhoneNo('')
        setMotherName('')
        setMotherPhoneNo('')
        setStudentAddress('')
        setSocietyName('')
        setEmailId('')
        setEmailIdErrorMessage('')
        setSocietyNameErrorMessage('')
        setStudentAddressErrorMessage('')
        setMotherPhoneNoErrorMessage('')
        setMotherNameErrorMessage('')
        setFatherPhoneNoErrorMessage('')
        setFatherNameErrorMessage('')
        setBirthDateErrorMessage('')
        setGenderErrorMessage('')
        setStudentNameErrorMessage('')
        setClassErrorMessage('')

    }


    const clickAge = () => {

    };

    const clickGender = (value) => {
        setGender(value);
        setGenderErrorMessage("");
    }
    const clickFatherName = (value) => {
        setFatherName(value);
        setFatherNameErrorMessage("");
    }

    const clickFatherPhoneNo = (value) => {
        // true if its a number, false if not & cannot enter more than 10 digit
        if (!isNaN(+value) && value.length < 11)
            setFatherPhoneNo(value);
        setFatherPhoneNoErrorMessage("");
    }
    const clickMotherName = (value) => {
        setMotherName(value);
        setMotherNameErrorMessage("");
    }
    const clickMotherPhoneNo = (value) => {
        // true if its a number, false if not & cannot enter more than 10 digit
        if (!isNaN(+value) && value.length < 11)
            setMotherPhoneNo(value);
        setMotherPhoneNoErrorMessage("");
    }
    const clickStudentAddress = (value) => {
        setStudentAddress(value);
        setStudentAddressErrorMessage("");
    }
    const clickSocietyName = (value) => {
        setSocietyName(value);
        setSocietyNameErrorMessage("");
    }
    const clickEmailId = (value) => {
        setEmailId(value);
        setEmailIdErrorMessage("");
    }

    const BlurFatherPhoneNo = () => {
        setFatherPhoneNoErrorMessage(IsPhoneNoValid(FatherPhoneNo))
    }
    const BlurMotherPhoneNo = () => {
        setMotherPhoneNoErrorMessage(IsPhoneNoValid(FatherPhoneNo))
    }
    const BlurEmailId = () => {
        setEmailIdErrorMessage(IsEmailValid(EmailId.trim()))
    }
    console.log(Class)

    const IsFormValid = () => {
        let returnVal = true
        if (ClassID === "0") {
            setClassErrorMessage("Please select student's class")
            returnVal = false
        } else {
            setClassErrorMessage("")
        }
        if (StudentName === "") {
            setStudentNameErrorMessage("Please enter student's name")
            returnVal = false
        } else {
            setStudentNameErrorMessage("");
        }
        if (BirthDate == "") {
            setBirthDateErrorMessage("Please enter student's Birthdate")
            returnVal = false
        } else {
            setBirthDateErrorMessage("");
        }
        if (Gender === "0") {
            setGenderErrorMessage("Please select gender")
            returnVal = false
        } else {
            setGenderErrorMessage("");
        }
        if (FatherName == "") {
            setFatherNameErrorMessage("Please enter Father name")
            returnVal = false
        } else {
            setFatherNameErrorMessage("");
        }
        if (FatherPhoneNo == "") {
            setFatherPhoneNoErrorMessage("Please enter valid phone number")
            returnVal = false
        } else {
            setFatherPhoneNoErrorMessage("");
        }
        if (MotherName == "") {
            setMotherNameErrorMessage("Please enter Mother name")
            returnVal = false
        } else {
            setMotherNameErrorMessage("");
        }
        if (MotherPhoneNo == "") {
            setMotherPhoneNoErrorMessage("Please enter valid phone number")
            returnVal = false
        } else {
            setMotherPhoneNoErrorMessage("");
        }
        if (StudentAddress == "") {
            setStudentAddressErrorMessage("Please enter Residential Address")
            returnVal = false
        } else {
            setStudentAddressErrorMessage("");
        }
        if (SocietyName == "") {
            setSocietyNameErrorMessage("Please enter Society Name")
            returnVal = false
        } else {
            setSocietyNameErrorMessage("");
        }
        if (EmailId == "") {
            setEmailIdErrorMessage("Please enter valid email-id")
            returnVal = false
        } else {
            setEmailIdErrorMessage("");
        }
        return returnVal
    }



    const clickSubmit = () => {
        if (IsFormValid()) {
            const AddStudentBody: IAddEnquiryBody = {
                ID: 0,
                ClassId: Number(ClassID),
                StudentName: StudentName,
                Birthdate: BirthDate,
                Gender: Number(Gender),
                FatherName: FatherName,
                FatherPhoneNo: FatherPhoneNo,
                MotherName: MotherName,
                MotherPhoneNo: MotherPhoneNo,
                StudentAddress: StudentAddress,
                SocietyName: SocietyName,
                EmailId: EmailId.trim()

            }
            dispatch(AddStudentDetails(AddStudentBody))
            console.log(AddStudentBody)
        }

    }

    return (
        <Container maxWidth="md" sx={{ py: 6 }}>
            <Card variant="outlined">
                <Box p={3}>
                    <Typography variant="h2" gutterBottom align="center">
                        Enquiry Form
                    </Typography>
                    <Divider />
                    <form>
                        <Grid container spacing={2} sx={{ mt: 2 }} >
                            <Grid item xs={6} sm={6}>
                                <InputField
                                    Item={StudentName}
                                    Label="Student Name"
                                    ClickItem={clickStudentName}
                                    ErrorMessage={StudentNameErrorMessage}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <Dropdown
                                    ItemList={Class}
                                    Label=""
                                    DefaultValue={ClassID}
                                    ClickItem={clickClass}
                                    Placeholder="Select Class"
                                    ErrorMessage={ClassErrorMessage}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <CalendarField
                                    Item={BirthDate}
                                    Label="Birth Date *"
                                    ClickItem={clickBirthDate}
                                    ErrorMessage={BirthDateErrorMessage}
                                />

                            </Grid>

                            <Grid item xs={6} sm={6}>
                                <RadioList
                                    ItemList={GenderList}
                                    Label="Gender *"
                                    DefaultValue={Gender}
                                    ClickItem={clickGender}
                                    ErrorMessage={GenderErrorMessage}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <InputField
                                    Item={Age}
                                    Label="Student's Age"
                                    ClickItem={clickAge}
                                    ErrorMessage={undefined}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <InputField
                                    Item={EmailId}
                                    Label="Email Id"
                                    ClickItem={clickEmailId}
                                    ErrorMessage={EmailIdErrorMessage}
                                    BlurItem={BlurEmailId}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <InputField
                                    Item={FatherName}
                                    Label="Father Name"
                                    ClickItem={clickFatherName}
                                    ErrorMessage={FatherNameErrorMessage}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <InputField
                                    Item={FatherPhoneNo}
                                    Label="Phone No."
                                    ClickItem={clickFatherPhoneNo}
                                    ErrorMessage={FatherPhoneNoErrorMessage}
                                    BlurItem={BlurFatherPhoneNo}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <InputField
                                    Item={MotherName}
                                    Label="Mother Name"
                                    ClickItem={clickMotherName}
                                    ErrorMessage={MotherNameErrorMessage}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <InputField
                                    Item={MotherPhoneNo}
                                    Label="Phone No."
                                    ClickItem={clickMotherPhoneNo}
                                    ErrorMessage={MotherPhoneNoErrorMessage}
                                    BlurItem={BlurMotherPhoneNo}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <InputField
                                    Item={StudentAddress}
                                    Label="Address"
                                    ClickItem={clickStudentAddress}
                                    ErrorMessage={StudentAddressErrorMessage}
                                />
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <InputField
                                    Item={SocietyName}
                                    Label="Society Name"
                                    ClickItem={clickSocietyName}
                                    ErrorMessage={SocietyNameErrorMessage}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        gap: 6
                                    }}>
                                    <ButtonField Label="Submit" ClickItem={clickSubmit} />
                                    <ButtonField Label="Cancel" ClickItem={clickCancel} />
                                </Box>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Card>
        </Container>
    );
}

export default AddEnquiry;