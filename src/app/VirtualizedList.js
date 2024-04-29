import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FixedSizeList } from 'react-window';
import { Grid, CircularProgress } from '@mui/material';
import CarCard from '../components/CarCard';
import { fetchCarsRequest, fetchCarsSuccess, fetchCarsFailure } from './CarSlice';
import { Box } from '@mui/material';
import { default as InfoOutlinedIcon } from '@mui/icons-material/InfoOutlined';


const VirtualizedList = ({ filters }) => {
    const dispatch = useDispatch();
    const cars = useSelector((state) => state.car.cars);
    const { loading, error } = useSelector((state) => state.user);

    /*useEffect(() => {
        const fetchData = async () => {
            dispatch(fetchCarsRequest());
            try {
                let url = "http://localhost:8000/cars";
                // Filtreler varsa, filtreleri URL'ye ekliyoruz
                if (filters && Object.keys(filters).length > 0) {
                    console.log(filters)
                    url += `?${Object.entries(filters).map(([key, value]) => `${key}=${value}`).join('&')}`;
                    console.log(url)
                }
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('HTTP error ' + response.status);
                }
                const data = await response.json();
                dispatch(fetchCarsSuccess(data));
            } catch (error) {
                dispatch(fetchCarsFailure(error.message));
            }
        };

        fetchData();
    }, [dispatch, filters]);*/

    useEffect(() => {
        const fetchData = async () => {
            dispatch(fetchCarsRequest());
            try {
                let url = "http://localhost:8000/cars";
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('HTTP error ' + response.status);
                }
                const data = await response.json();
                // Gelen verileri bir array'e atıyoruz
                const allCars = data;
                // Eğer filtreler varsa, filtrelemeyi burada yapıyoruz
                if (filters && Object.keys(filters).length > 0) {
                    const filteredCars = allCars.filter(car => {
                        // Filtreleri uygula
                        let passFilters = true;
                        // Marka filtresi
                        if (filters.brand && filters.brand.length > 0) {
                            passFilters = passFilters && filters.brand.includes(car.brand);

                        }

                        // Renk filtresi
                        if (filters.color && filters.color.length > 0) {
                            passFilters = passFilters && filters.color.includes(car.color);
                        }

                        // Vites tipi filtresi
                        if (filters.gear && filters.gear.length > 0) {
                            passFilters = passFilters && filters.gear.includes(car.gear);
                        }

                        // Yakıt tipi filtresi
                        if (filters.fueltype && filters.fueltype.length > 0) {
                            passFilters = passFilters && filters.fueltype.includes(car.fueltype);
                        }

                        // Lokasyon filtresi
                        if (filters.location && filters.location.length > 0) {
                            passFilters = passFilters && filters.location.includes(car.location);
                        }

                        // Km filtresi
                        if (parseInt(filters.minKm) && car.km < parseInt(filters.minKm)) {
                            passFilters = false;

                        }
                        if (parseInt(filters.maxKm) && car.km > parseInt(filters.maxKm)) {
                            passFilters = false;
                        }

                        // Year filtresi
                        if (parseInt(filters.minYear) && car.year < parseInt(filters.minYear)) {
                            passFilters = false;

                        }
                        if (parseInt(filters.maxYear) && car.year > parseInt(filters.maxYear)) {
                            passFilters = false;
                        }

                        // Price filtresi
                        if (parseInt(filters.minPrice) && car.price < parseInt(filters.minPrice)) {
                            passFilters = false;

                        }
                        if (parseInt(filters.maxPrice) && car.price > parseInt(filters.maxPrice)) {
                            passFilters = false;
                        }

                        return passFilters;
                    });
                    // Filtrelenmiş arabaları dispatch ediyoruz
                    dispatch(fetchCarsSuccess(filteredCars));
                } else {
                    // Filtre yoksa, tüm arabaları dispatch ediyoruz
                    dispatch(fetchCarsSuccess(allCars));
                }
            } catch (error) {
                dispatch(fetchCarsFailure(error.message));
            }
        };

        fetchData();
    }, [dispatch, filters]);

    const handleStarClick = (id) => {
        // Burada yıldıza tıklama işlevselliğini yerine getirin
        console.log(`Star clicked for car id ${id}`);
    };

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return <div>Hata: {error}</div>;
    }

    return (
        <Grid container md={9} sx={{ minHeight: '100vh', position: 'sticky', bottom: 0, zIndex: 1 }}>
            <Box
                bgcolor="#BAD0D5"
                p={2}
                sx={{
                    borderRadius: "15px",
                    marginTop: { xs: "40px", md: "2.5rem" },
                    marginBottom: "10px",
                    width: '100%',
                    marginLeft: '0.5rem',
                    maxHeight: '2rem'
                }}
            >
                <Box
                    color="rgb(9 102 170)"
                    sx={{ display: "flex", alignItems: "center" }}
                >
                    <InfoOutlinedIcon
                        fontSize="small"
                        sx={{
                            marginRight: "15px",
                            boxShadow: "1px 3px 20px 5px rgb(9 102 170)",
                            borderRadius: "50px",
                        }}
                    ></InfoOutlinedIcon>
                    Hemen Al Fiyatlarımıza KDV ve tüm hizmet bedelleri dahildir.
                </Box>
            </Box>
            <FixedSizeList
                height={900}
                width={1000}
                itemSize={210}
                itemCount={cars?.length}
                overscanCount={5}
                direction="vertical"
            >
                {({ index, style }) => (
                    <div style={style} key={index}>
                        <CarCard car={cars[index]} onClick={handleStarClick} />
                    </div>
                )}
            </FixedSizeList>
        </Grid>
    );
};

export default VirtualizedList;
