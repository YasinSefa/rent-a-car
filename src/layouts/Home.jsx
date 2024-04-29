import { Box, Grid, Typography } from '@mui/material';
import Header from '../components/Header';
import Brand from '../components/Brand';
import Gear from '../components/Gear';
import FuelType from '../components/FuelType';
import Color from '../components/Color';
import Location from '../components/Location';
import Price from '../components/Price';
import ModelYear from '../components/ModelYear';
import Km from '../components/Km';
import React, { useState, useEffect } from 'react';
import Link from '@mui/material/Link';
import VirtualizedList from '../app/VirtualizedList';
import { useSelector } from 'react-redux';
import Alert from '@mui/material/Alert';


function getUser() {
    let user = localStorage.getItem('user');
    if (user) {
        user = JSON.parse(user);
    } else {
        user = null;
    }
    return user;
}

function Home() {
    const [user, setUser] = useState(getUser());
    const [showWelcome, setShowWelcome] = useState(false);
    const reduxUser = useSelector((state) => state.user);
    const [filters, setFilters] = useState({});

    useEffect(() => {
        if (user) {
            setShowWelcome(true);
            setTimeout(() => {
                setShowWelcome(false);
            }, 3000); // 3 saniye sonra hoşgeldiniz mesajını kapat
        }
    }, [user]);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
    };

    const handleFilterChange = (newFilters) => {
        setFilters({ ...filters, ...newFilters }); // Yeni filtreleri güncelliyoruz
    };

    return (
        <>
            {user ? (
                <Box>
                    <Header />

                    {reduxUser && reduxUser.user && reduxUser.user.length > 0 && showWelcome && (
                        <Alert variant="filled" severity="success" sx={{ position: 'fixed', top: '20px', right: '20px', zIndex: 999 }}>
                            <Box>
                                <Typography variant="body1">Hoşgeldin, {reduxUser.user[0].name}</Typography>
                            </Box>
                        </Alert>
                    )}

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', direction: 'row', minHeight: '100vh', margin: 0, backgroundColor: '#f5f5f5' }}>
                        <Grid container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '2rem' }} maxWidth={'1120px'} >
                            <Grid item md={3}>
                                <Typography component="h1" sx={{ marginBottom: '1rem' }}>69 Otomobil</Typography>
                                <Grid container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid black', padding: '2rem', paddingTop: '1rem' }} minHeight={'100vh'}>
                                    <Brand onFilterChange={handleFilterChange} />
                                    <Gear onFilterChange={handleFilterChange} />
                                    <FuelType onFilterChange={handleFilterChange} />
                                    <Price onFilterChange={handleFilterChange} />
                                    <ModelYear onFilterChange={handleFilterChange} />
                                    <Km onFilterChange={handleFilterChange} />
                                    <Color onFilterChange={handleFilterChange} />
                                    <Location onFilterChange={handleFilterChange} />
                                </Grid>
                            </Grid>
                            <VirtualizedList filters={filters} />
                        </Grid >
                    </Box>

                </Box >
            ) : (
                <Link to="/login" className='btn btn-primary btn-md'>Login</Link>
            )}
        </>
    )
}

export default Home;
