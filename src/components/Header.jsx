import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import React, { useState } from 'react';
import { Link } from "react-router-dom";


const pages = ['Açık Artırma', 'Araç Al', 'Araç Sat', 'Filonu Sat', 'Ekspertiz Al', 'Lojistik Al'];

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [activePage, setActivePage] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <Box sx={{ marginInline: "auto" }}>
            <AppBar position="static" sx={{ backgroundColor: 'white', border: '1px solid black' }}>
                <Container >
                    <Toolbar disableGutters>
                        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'black',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="black"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'black',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', borderRight: '1px solid black', borderLeft: '1px solid black' }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={() => {
                                        handleCloseNavMenu();
                                        setActivePage(page);
                                    }}
                                    sx={{
                                        my: 2,
                                        color: activePage === page ? 'black' : 'black',
                                        display: 'block',
                                        position: 'relative', // Düğme için göreli bir konum belirle
                                        '&::after': { // Düğme altına çizgi ekle
                                            content: '""',
                                            position: 'absolute',
                                            left: 0,
                                            bottom: 0,
                                            width: '100%',
                                            height: '2px',
                                            backgroundColor: activePage === page ? '#057a3e' : 'transparent', // Aktif sayfadaysa çizgi yeşil olsun
                                        },
                                    }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                        <Button
                            component={Link}
                            to="/login" // Yönlendirilecek URL adresi
                            variant="contained" sx={{
                                margin: "1rem",
                                backgroundColor: "#08AA58",
                                '&:hover': {
                                    backgroundColor: '#057a3e',
                                },
                            }}>
                            Giriş Yap
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box >);
}

export default Header;