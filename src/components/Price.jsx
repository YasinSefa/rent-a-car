import React from 'react'
import { Grid, Typography, TextField } from '@mui/material';

const price = ({ onFilterChange }) => {
    const handleMinPriceChange = (event) => {
        let minPrice = event.target.value;
        // Eğer girilen değer bir tamsayı değilse, boş bırak
        if (!/^\d*$/.test(minPrice)) {
            event.target.value = '';
            return;
        }
        onFilterChange({ minPrice });
    };

    const handleMaxPriceChange = (event) => {
        let maxPrice = event.target.value;
        // Eğer girilen değer bir tamsayı değilse, boş bırak
        if (!/^\d*$/.test(maxPrice)) {
            event.target.value = '';
            return;
        }
        onFilterChange({ maxPrice });
    };
    return (
        <>
            <Typography component="h1" sx={{ fontSize: '12.8px' }}>Fiyat</Typography>
            <Grid item md={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>
                <TextField
                    sx={{ width: '6rem' }}
                    label="Min"
                    id="filled-size-small"
                    variant="filled"
                    size="small"
                    InputProps={{
                        style: { fontSize: '12.8px' },
                        inputProps: { maxLength: 9 }
                    }}
                    InputLabelProps={{ style: { fontSize: '12.8px' } }}
                    onChange={handleMinPriceChange}
                />
                <TextField
                    sx={{ width: '6rem' }}
                    label="Max"
                    id="filled-size-small"
                    variant="filled"
                    size="small"
                    InputProps={{
                        style: { fontSize: '12.8px' },
                        inputProps: { maxLength: 9 }
                    }}
                    InputLabelProps={{ style: { fontSize: '12.8px' } }}
                    onChange={handleMaxPriceChange}
                />
            </Grid>
        </>
    )
}

export default price