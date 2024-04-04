import { Container, Grid } from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { IAddEnquiryBody } from "src/interfaces/Enquiry/IEnquiry"
import ButtonField from "src/libraries/Training/ButtonField"
import CalendarField from "src/libraries/Training/CalendarField"
import Dropdown from "src/libraries/Training/Dropdown"
import InputField from "src/libraries/Training/InputField"
import RadioList from "src/libraries/Training/RadioList"
import PageHeader from "src/libraries/heading/PageHeader"
import { AddStudentDetails, getClass } from "src/requests/Enquiry/RequestEnquiryList"
import { RootState } from "src/store"
import { IsEmailValid, IsPhoneNoValid, calculateAge } from "../Common/Util"

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
            toast.success(AddStudentMsg)
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
        setClassID(value)
    }
    const clickStudentName = (value) => {
        setStudentName(value)
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


    const clickAge = () => {

    };

    const clickGender = (value) => {
        setGender(value)
    }
    const clickFatherName = (value) => {
        setFatherName(value)
    }

    const clickFatherPhoneNo = (value) => {
        // true if its a number, false if not & cannot enter more than 10 digit
        if (!isNaN(+value) && value.length < 11)
            setFatherPhoneNo(value)
    }
    const clickMotherName = (value) => {
        setMotherName(value)
    }
    const clickMotherPhoneNo = (value) => {
        // true if its a number, false if not & cannot enter more than 10 digit
        if (!isNaN(+value) && value.length < 11)
            setMotherPhoneNo(value)
    }
    const clickStudentAddress = (value) => {
        setStudentAddress(value)
    }
    const clickSocietyName = (value) => {
        setSocietyName(value)
    }
    const clickEmailId = (value) => {
        setEmailId(value)
    }

    const BlurPhoneNo = () => {
        setFatherPhoneNoErrorMessage(IsPhoneNoValid(FatherPhoneNo))
        setMotherPhoneNoErrorMessage(IsPhoneNoValid(MotherPhoneNo))
    }
    const BlurEmailId = () => {
        setEmailIdErrorMessage(IsEmailValid(EmailId))
    }
    console.log(Class)

    const IsFormValid = () => {
        let returnVal = true
        if (StudentName == "") {
            setStudentNameErrorMessage("Please enter student's name")
            returnVal = false
        }
        if (BirthDate == "") {
            setBirthDateErrorMessage("Please enter student's Birthdate")
            returnVal = false
        }
        if (Gender == "0") {
            setGenderErrorMessage("Please select gender")
            returnVal = false
        }
        if (FatherName == "") {
            setFatherNameErrorMessage("Please enter Father name")
            returnVal = false
        }
        if (FatherPhoneNoErrorMessage != "" && FatherPhoneNo == "") {
            setFatherPhoneNoErrorMessage("Please enter valid phone number")
            returnVal = false
        }
        if (MotherName == "") {
            setMotherNameErrorMessage("Please enter Mother name")
            returnVal = false
        }
        if (MotherPhoneNoErrorMessage != "" && MotherPhoneNo == "") {
            setMotherPhoneNoErrorMessage("Please enter valid phone number")
            returnVal = false
        }
        if (StudentAddress == "") {
            setStudentAddressErrorMessage("Please enter Residential Address")
            returnVal = false
        }
        if (SocietyName == "") {
            setSocietyNameErrorMessage("Please enter Society Name")
            returnVal = false
        }
        if (EmailIdErrorMessage != "" && EmailId == "") {
            setEmailIdErrorMessage("Please enter valid email-id")
            returnVal = false
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
                EmailId: EmailId

            }
            dispatch(AddStudentDetails(AddStudentBody))
            console.log(AddStudentBody)
        }

    }

    // const clickCancel = () => {
    //     setStudentName(''),
    //         setBirthDate(''),
    //         setAge(''),
    //         setGender('0'),
    //         setFatherName(''),
    //         setFatherPhoneNo(''),
    //         setMotherName(''),
    //         setMotherPhoneNo(''),
    //         setStudentAddress(''),
    //         setSocietyName(''),
    //         setEmailId('')
    // }

    return (
        <Container  >
            <Grid container direction="column" alignItems="center" justifyContent="center">
                <Grid container spacing={2}>
                    <Grid item xs={12} >
                        <PageHeader heading={'Enquiry Form'} subheading={''} />
                    </Grid>
                    <Grid item xs={12}>
                        <Dropdown ItemList={Class} Label={'Class'}
                            DefaultValue={ClassID}
                            ClickItem={clickClass} />
                    </Grid>
                    <Grid item xs={12}>
                        <InputField Item={StudentName} Label={'Student Name'}
                            ClickItem={clickStudentName}
                            ErrorMessage={StudentNameErrorMessage} />
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={2}>
                                <CalendarField Item={BirthDate} Label={'Birth Date'}
                                    ClickItem={clickBirthDate}
                                    ErrorMessage={BirthDateErrorMessage} />
                            </Grid>
                            <Grid item xs={2}>
                                <InputField Item={Age} Label={'Age'} ClickItem={clickAge} />
                            </Grid>
                            <Grid item xs={4}>
                                <RadioList ItemList={GenderList} Label={'Gender'}
                                    DefaultValue={Gender}
                                    ClickItem={clickGender}
                                    ErrorMessage={GenderErrorMessage} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={2}>
                                <InputField Item={FatherName} Label={'Father Name'}
                                    ClickItem={clickFatherName}
                                    ErrorMessage={FatherNameErrorMessage} />
                            </Grid>
                            <Grid item xs={2}>
                                <InputField Item={FatherPhoneNo} Label={'Phone No.'}
                                    ClickItem={clickFatherPhoneNo}
                                    ErrorMessage={FatherPhoneNoErrorMessage}
                                    BlurItem={BlurPhoneNo} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={2}>
                                <InputField Item={MotherName} Label={'Mother Name'}
                                    ClickItem={clickMotherName}
                                    ErrorMessage={MotherNameErrorMessage} />
                            </Grid>
                            <Grid item xs={2}>
                                <InputField Item={MotherPhoneNo} Label={'Phone No.'}
                                    ClickItem={clickMotherPhoneNo}
                                    ErrorMessage={MotherPhoneNoErrorMessage}
                                    BlurItem={BlurPhoneNo} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={2}>
                                <InputField Item={StudentAddress} Label={'Address'}
                                    ClickItem={clickStudentAddress}
                                    ErrorMessage={StudentAddressErrorMessage} />
                            </Grid>
                            <Grid item xs={2}>
                                <InputField Item={SocietyName} Label={'Society Name'}
                                    ClickItem={clickSocietyName}
                                    ErrorMessage={SocietyNameErrorMessage} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <InputField Item={EmailId} Label={'Email Id'}
                            ClickItem={clickEmailId}
                            ErrorMessage={EmailIdErrorMessage}
                            BlurItem={BlurEmailId} />
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={2}>
                                <ButtonField Label={'Submit'} ClickItem={clickSubmit} />
                            </Grid>
                            <Grid item xs={2}>
                                <ButtonField Label={'Cancel'} ClickItem={undefined} />
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </Container>
    )
}

export default AddEnquiry