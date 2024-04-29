import Checkbox from '@mui/material/Checkbox';
import { styled } from "@mui/system";

const GreenCheckbox = styled(Checkbox)(({ theme }) => ({
    color: "lightgrey", // Unchecked color
    "&.Mui-checked": {
        color: "#09AA59", // Checked color
    },
    "&.Mui-checked:hover": {
        backgroundColor: "transparent",
    },
}));

export default GreenCheckbox;