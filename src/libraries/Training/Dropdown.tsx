import { NativeSelect, Typography } from "@mui/material";
import { ErrorDetail } from '../styled/ErrormessageStyled';


const Dropdown = ({ ItemList, ClickItem, Label, DefaultValue, ErrorMessage = '', Placeholder = 'select option' }) => {
    return (<>
        <Typography>{Label}</Typography>

        <NativeSelect value={DefaultValue} 
        fullWidth variant="outlined"
         size="small" required
            onChange={(e) => ClickItem(e.target.value)}>
            <option value="0">{Placeholder}</option>
            {ItemList?.map((Item, i) => {
                return (
                    <option value={Item.Value} key={i}>
                        {Item.Name}
                    </option>
                );
            })}
        </NativeSelect>
        <ErrorDetail>{ErrorMessage}</ErrorDetail>
    </>)
}

export default Dropdown