import { TextField, Typography } from '@mui/material'
import { ErrorDetail } from '../styled/ErrormessageStyled'

const CalendarField = ({ Item, ClickItem, Label, ErrorMessage = '' }) => {
    return (<>
        <Typography>{Label}</Typography>
        <TextField value={Item} type='date'
         fullWidth
         onChange={(e) => { ClickItem(e.target.value) }} size='small' />
        <ErrorDetail>{ErrorMessage}</ErrorDetail>
    </>)
}

export default CalendarField