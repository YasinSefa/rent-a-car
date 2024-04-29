import React, { useState } from 'react';
import Checkbox from './GreenCheckbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Grid, Typography } from '@mui/material';

const Gear = ({ onFilterChange }) => {
    const [checkboxes, setCheckboxes] = useState([
        { label: 'Otomatik', checked: false },
        { label: 'Manuel', checked: false }
    ]);

    const handleChange = (index) => (event) => {
        const newCheckboxes = [...checkboxes];
        newCheckboxes[index].checked = event.target.checked;
        setCheckboxes(newCheckboxes);
        const selectedBrands = newCheckboxes.filter(checkbox => checkbox.checked).map(checkbox => checkbox.label);
        onFilterChange({ gear: selectedBrands });
    };

    const handleSelectAll = () => {
        const allChecked = checkboxes.some((checkbox) => checkbox.checked);
        const newCheckboxes = checkboxes.map((checkbox) => ({ ...checkbox, checked: !allChecked }));
        setCheckboxes(newCheckboxes);
    };

    const renderedCheckboxes = checkboxes.map((checkbox, index) => (
        <Grid item md={12} key={index}>
            <FormControlLabel
                label={<Typography sx={{ fontSize: 12 }}>{checkbox.label}</Typography>}
                control={<Checkbox checked={checkbox.checked} onChange={handleChange(index)} />}
            />
        </Grid>
    ));

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Grid item md={12} >
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'f5f5f5', borderBottom: '1px solid black' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                <ListItemButton onClick={handleClick}>
                    <ListItemText primary="Vites Tipi" primaryTypographyProps={{ style: { fontSize: '12.8px' } }} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <FormControlLabel
                            label={
                                <Typography variant="body1" style={{ fontSize: '12.8px' }}>Tümü</Typography>
                            }
                            control={
                                <Checkbox
                                    labelStyle={{ color: 'white' }}
                                    iconStyle={{ fill: 'white' }}
                                    checked={checkboxes.every((checkbox) => checkbox.checked)}
                                    indeterminate={!checkboxes.every((checkbox) => checkbox.checked) && checkboxes.some((checkbox) => checkbox.checked)}
                                    onChange={handleSelectAll}
                                />
                            }
                        />
                    </List>
                    {renderedCheckboxes}
                </Collapse>
            </List>

        </Grid>
    )
}

export default Gear