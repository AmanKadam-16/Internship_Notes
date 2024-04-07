import { Button } from '@mui/material';

const ButtonField = ({ ClickItem, Label }) => {
    return (<>
        <Button variant="contained" onClick={ClickItem} sx={{ borderRadius: '5px' }}>{Label}</Button>
    </>)
}

export default ButtonField
