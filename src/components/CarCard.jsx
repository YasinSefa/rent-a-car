import React, { useState } from "react";
import { Card, CardActionArea, CardContent, CardMedia, Button, Typography, Grid } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

function CarCard({ car, style }) {
    const [filled, setFilled] = useState(false);

    const handleClick = () => {
        setFilled((prevFilled) => !prevFilled);
    };

    return (
        <Grid item style={{ ...style, paddingLeft: '8px', paddingRight: '8px' }}>
            <Card sx={{ maxWidth: 1000, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

                <CardActionArea>
                    <Grid container spacing={2}>
                        <>
                            <Grid item xs={12} sm={4}>
                                <CardMedia
                                    component="img"
                                    height="100%"
                                    image={car?.image}
                                    alt="Car Image"

                                />
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <CardContent>
                                    <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Typography gutterBottom variant="h5" component="div" sx={{ marginBottom: '0rem' }}>
                                            {car?.brand} <StarIcon
                                                sx={{ fontSize: '1.2rem', cursor: 'pointer', color: filled ? '#057a3e' : 'gray' }}
                                                onClick={handleClick}
                                            />
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Satış Fiyatı/TL
                                        </Typography>
                                    </Grid>
                                    <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4rem' }}>
                                        <Typography gutterBottom component="h6">
                                            {car?.model}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                                            {car?.price}
                                        </Typography>
                                    </Grid>
                                    <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0rem' }}>
                                        <Typography gutterBottom component="h6" sx={{ fontSize: '0.9rem' }}>
                                            {car?.year} | {car?.km}KM | {car?.gear} | {car?.fueltype} | {car?.color} | KDV %20
                                        </Typography>
                                        <Button size="small" sx={{
                                            backgroundColor: '#08AA58', color: '#fff',
                                            borderRadius: '2rem',
                                            width: '7rem',
                                            '&:hover': {
                                                backgroundColor: '#057a3e',
                                            },
                                        }} variant="contained">
                                            Hemen Al
                                        </Button>
                                    </Grid>
                                </CardContent>
                            </Grid>
                        </>
                    </Grid>
                </CardActionArea>
            </Card>
        </Grid>
    );
}

export default CarCard;
