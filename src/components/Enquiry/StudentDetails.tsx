import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import React, { useState } from 'react'
import Dropdown from 'src/libraries/Training/Dropdown'
import InputField from "src/libraries/Training/InputField"
import RadioList from "src/libraries/Training/RadioList"
import PageHeader from "src/libraries/heading/PageHeader"
import EnquiryList from './EnquiryList'
import { Typography } from '@mui/material'

const AddClass = () => {
    
const enquiryList = [{ Id: 1, Name: "Enquiry List", Value: "1" },
{ Id: 2, Name: "Admission List", Value: "2" },
{ Id: 3, Name: "Follow Ups", Value: "3" },];

const [toggleId, setToggleId] = useState('1');

const clickToggle = (value)=>{
    // setToggleId(value);
};
  return (
   <>
    <Container>
        
        <Grid container direction="column" alignItems="center" justifyContent="center">
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{ mt: "30px" }} display={'flex'}  justifyContent={'center'}>
                <Typography variant="h2" gutterBottom >
                        Student Details
                    </Typography></Grid>
                <Grid item xs={12} style={{ textAlign: 'right' }}>
                    <RadioList ItemList={enquiryList} Label={''}
                        DefaultValue={toggleId} ClickItem={clickToggle}
                        ErrorMessage={undefined} />
                </Grid>
            </Grid>
            </Grid>
    </Container><br/><br/><br/>

    <EnquiryList/>
   </>
    
  )
}

export default AddClass

