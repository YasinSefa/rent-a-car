import { Grid, Typography, TextField } from '@mui/material';

const Km = ({ onFilterChange }) => {
    const handleMinKmChange = (event) => {
        const minKm = event.target.value;
        // Eğer girilen değer bir tamsayı değilse, boş bırak
        if (!/^\d*$/.test(minKm)) {
            event.target.value = '';
            return;
        }
        onFilterChange({ minKm });
    };

    const handleMaxKmChange = (event) => {
        const maxKm = event.target.value;
        // Eğer girilen değer bir tamsayı değilse, boş bırak
        if (!/^\d*$/.test(maxKm)) {
            event.target.value = '';
            return;
        }
        onFilterChange({ maxKm });
    };


    return (
        <>
            <Typography component="h1" sx={{ borderTop: '1px solid black', marginTop: '1rem', width: '100%', fontSize: '12.8px' }}> Km</Typography>
            <Grid item md={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }} >

                <TextField
                    sx={{ width: '6rem' }}
                    label="Min"
                    id="filled-size-small"
                    variant="filled"
                    size="small"
                    InputProps={{
                        style: { fontSize: '12.8px' },
                        inputProps: { maxLength: 7 }
                    }}
                    InputLabelProps={{ style: { fontSize: '12.8px' } }}
                    onChange={handleMinKmChange}
                />
                <TextField
                    sx={{ width: '6rem' }}
                    label="Max"
                    id="filled-size-small"
                    variant="filled"
                    size="small"
                    InputProps={{
                        style: { fontSize: '12.8px' },
                        inputProps: { maxLength: 7 }
                    }}
                    InputLabelProps={{ style: { fontSize: '12.8px' } }}
                    onChange={handleMaxKmChange}
                />
            </Grid>
        </>
    );
};

export default Km;
