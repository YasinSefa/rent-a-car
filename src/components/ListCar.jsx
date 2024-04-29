import { Card, CardActionArea, CardContent, CardMedia, Button, Typography, Grid, Box } from '@mui/material';
import { default as InfoOutlinedIcon } from '@mui/icons-material/InfoOutlined';
import { FixedSizeList } from 'react-window';
import StarIcon from '@mui/icons-material/Star';
import React, { useState } from 'react';

function CarCard({ index, style }) {

    const [filled, setFilled] = useState(false);

    const handleClick = () => {
        setFilled((prevFilled) => !prevFilled);
    };

    return (
        <Grid item key={index} style={{ ...style, paddingLeft: '8px', paddingRight: '8px' }}>
            <Card sx={{ maxWidth: 1000, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <CardActionArea>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                            <CardMedia
                                component="img"
                                height="100%"
                                image="https://s3-alpha-sig.figma.com/img/dae8/47aa/62f6ded8ef242419f05689d03e234240?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eRNjD0LHRXwxm8EyjAmgk-7ENFUATr3MHz~WgQJ9kBSM7mTduEPpsgun7b6DGZb6YXOF2RiMuSyN5kewyYAZdnPUViaX4WcTewHXQQV7z4TpdCwpwOwYHK7~fGf8G-vFFnzltqdz7cyvyEY~xPKXlw4WKrNSxUxTOsoB~rRm0KpiwwaVUN2Vn96YkBrULAw0~ZQXNICrNzua1b324drLIo4UYXlOg21AL5oWwAJ-TwtvRAPOsEpkLyXW6sx~11Uqi0JhlNGzcV9HLM0DxDPUgDNLSuf~jpkpNNnXGebsat2u2SFdPWtigtYoHnP2p3o4IIr9eAQcbd4fnHi0uVmiOA__"
                                alt="Car Image"
                            />
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <CardContent>
                                <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Typography gutterBottom variant="h5" component="div" sx={{ marginBottom: '0rem' }}>
                                        RENAULT MEGANE  <StarIcon
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
                                        1.3 Tce Joy EDC
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                                        849.400
                                    </Typography>
                                </Grid>
                                <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0rem' }}>
                                    <Typography gutterBottom component="h6">
                                        2022 | 38.991KM | Otomatik | Benzin | KDV %20
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
                    </Grid>
                </CardActionArea>
            </Card>
        </Grid>
    );
}

export default function VirtualizedList() {
    return (
        <Grid item md={9} sx={{ minHeight: '100vh', position: 'sticky', bottom: 0, zIndex: 1 }}>
            <Box
                bgcolor="#BAD0D5"
                p={2}
                sx={{
                    borderRadius: "15px",
                    marginTop: { xs: "40px", md: "2.5rem" },
                    marginBottom: "10px",
                    width: '100%',
                    marginLeft: '0.5rem'
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
                height={700}
                width={900} // Kart genişliği + 16px boşluk
                itemSize={220} // Kart yüksekliği + 16px boşluk
                itemCount={200}
                overscanCount={5}
                direction="vertical" // Dikey yönde listeleme
            >
                {CarCard}
            </FixedSizeList >
        </Grid>
    );
}
