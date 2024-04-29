// Brand.jsx

import React, { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import GreenCheckbox from './GreenCheckbox';

function Brand({ onFilterChange }) {
    const [checkboxes, setCheckboxes] = useState([
        { label: 'AUDI', checked: false },
        { label: 'BMW', checked: false },
        { label: 'CITROEN', checked: false },
        { label: 'DACIA', checked: false },
        { label: 'Hyundai', checked: false },
        { label: 'FIAT', checked: false },
        { label: 'FORD', checked: false }
    ]);


    const handleChange = (index) => (event) => {
        const newCheckboxes = [...checkboxes];
        newCheckboxes[index].checked = event.target.checked;
        setCheckboxes(newCheckboxes);
        const selectedBrands = newCheckboxes.filter(checkbox => checkbox.checked).map(checkbox => checkbox.label);
        onFilterChange({ brand: selectedBrands });
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
                control={<GreenCheckbox checked={checkbox.checked} onChange={handleChange(index)} />}
            />
        </Grid>
    ));

    return (
        <Grid item md={12} sx={{ borderBottom: '1px solid black' }}>
            <Typography component="h1" style={{ fontSize: '12.8px' }}>Marka</Typography>
            <FormControlLabel
                label={
                    <Typography variant="body1" style={{ fontSize: '12.8px' }}>Tümü</Typography>
                }
                control={
                    <GreenCheckbox
                        iconStyle={{ fill: 'red' }}
                        checked={checkboxes.every((checkbox) => checkbox.checked)}
                        indeterminate={!checkboxes.every((checkbox) => checkbox.checked) && checkboxes.some((checkbox) => checkbox.checked)}
                        onChange={handleSelectAll}
                    />
                }
            />
            {renderedCheckboxes}
        </Grid >
    );
}

export default Brand;
