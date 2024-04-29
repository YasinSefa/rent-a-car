import { Grid, Typography, TextField } from '@mui/material';


const ModelYear = ({ onFilterChange }) => {
    const handleMinYearChange = (event) => {
        let minYear = event.target.value;
        // Girilen değeri dört rakama sınırla
        minYear = minYear.slice(0, 4);
        // Eğer girilen değer bir tamsayı değilse, boş bırak
        if (!/^\d*$/.test(minYear)) {
            event.target.value = '';
            return;
        }
        onFilterChange({ minYear });
    };

    const handleMaxYearChange = (event) => {
        let maxYear = event.target.value;
        // Girilen değeri dört rakama sınırla
        maxYear = maxYear.slice(0, 4);
        // Eğer girilen değer bir tamsayı değilse, boş bırak
        if (!/^\d*$/.test(maxYear)) {
            event.target.value = '';
            return;
        }
        onFilterChange({ maxYear });
    };

    return (
        <>
            <Typography component="h1" sx={{ borderTop: '1px solid black', marginTop: '1rem', width: '100%', fontSize: '12.8px' }}> Model Yılı</Typography>
            <Grid item md={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >

                <TextField
                    sx={{ width: '6rem' }}
                    label="Örn:2008"
                    id="filled-size-small"
                    variant="filled"
                    size="small"
                    InputProps={{
                        style: { fontSize: '12.8px' },
                        inputProps: { maxLength: 4 }
                    }}
                    InputLabelProps={{ style: { fontSize: '12.8px' } }}
                    onChange={handleMinYearChange}
                />
                <TextField
                    sx={{ width: '6rem' }}
                    label="Örn:2024"
                    id="filled-size-small"
                    variant="filled"
                    size="small"
                    InputProps={{
                        style: { fontSize: '12.8px' },
                        inputProps: { maxLength: 4 }
                    }}
                    InputLabelProps={{ style: { fontSize: '12.8px' } }}
                    onChange={handleMaxYearChange}
                />
            </Grid>
        </>
    )
}

export default ModelYear