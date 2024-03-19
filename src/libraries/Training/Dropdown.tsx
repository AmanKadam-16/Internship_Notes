import { NativeSelect, Typography } from "@mui/material";
import { ErrorDetail } from '../styled/ErrormessageStyled';


const Dropdown = ({ ItemList, ClickItem, Label, DefaultValue,ErrorMessage = '',Placeholder='select option' }) => {
    return (<>
        <Typography>{Label}</Typography>
        
        <NativeSelect value={DefaultValue}
            onChange={(e) => ClickItem(e.target.value)}>
                 <option value="">{Placeholder}</option>
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