import CallIcon from '@mui/icons-material/Call';
import { Container, Grid } from '@mui/material';
import DynamicList from 'src/libraries/Training/DynamicList';
import PageHeader from 'src/libraries/heading/PageHeader';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { getEnquiryList } from 'src/requests/Enquiry/RequestEnquiryList'; 

const EnquiryList = () => {
    const dispatch = useDispatch();
    const enquiryList = useSelector((state: RootState) => state.Enquiry.EnquiryList);
    useEffect(() => {
       
        dispatch(getEnquiryList());
    }, [dispatch]);

    const HeaderList = ["Name", "Class", "BirthDate", "Gender", "Phone", "Society", "Enquiry Date-Time", "Follow Up"];
    const IconList = [
        { Id: 1, Icon: <CallIcon />, Action: 'Followup' }
    ];
    console.log(enquiryList);

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <PageHeader heading={'Enquiry List'} subheading={''} />
                </Grid>
                <Grid item xs={12}>
                    
                        <DynamicList HeaderList={HeaderList} ItemList={enquiryList} IconList={IconList} ClickItem={undefined} />
                    
                </Grid>
            </Grid>
        </Container>
    );
}

export default EnquiryList;
