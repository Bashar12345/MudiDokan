import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import Banner from '../assets/banner2.jpg'; // Import the banner image

const HeroBanner = () => {
    return (
        <Box
            sx={{
                my: 1,
                py: 5,
                // backgroundColor: 'primary.main',
                backgroundImage: `url(${Banner})`,
                backgroundSize: 'cover', // Ensures the image covers the entire area
                backgroundPosition: 'center', // Centers the image
                backgroundRepeat: 'no-repeat', // Prevents the image from repeating
                height: '45vh', // Adjust height as needed (e.g., full viewport height)
                display: { xs: 'none', sm: "block" },// Flexbox for aligning content
                // alignItems: 'center', // Vertically center content
            }}
        >
            <Container>
                <Grid container justifyContent="flex-start" sx={{ px: 2 }}>
                    <Grid item xs={12} lg={8} textAlign={{ xs: 'center', lg: 'left' }}>
                        {/* <Typography
                            variant="h5"
                            component="h5"
                            sx={{
                                display: 'inline-block',
                                color: 'primary.light',
                                textTransform: 'uppercase',
                                borderBottom: 5,
                                borderColor: 'rgba(256,256,256,.3)',
                                pb: 1,
                            }}
                        >
                            Welcome To Medinova
                        </Typography> */}

                        {/* <Typography
                            variant="h1"
                            component="p"
                            color="white"
                            sx={{ mb: { md: 4 }, fontWeight: 'bold' }}
                        >
                            Best Healthcare Solution In Your City
                        </Typography> */}
                        {/* 
                        <Box sx={{ pt: 2 }}>
                            <Button
                                variant="contained"
                                color="secondary"
                                size="large"
                                sx={{ borderRadius: '50px', py: 2, px: 4, mx: 1 }}
                            >
                                Find Doctor
                            </Button>
                            <Button
                                variant="outlined"
                                color="secondary"
                                size="large"
                                sx={{ borderRadius: '50px', py: 2, px: 4, mx: 1 }}
                            >
                                Appointment
                            </Button>
                        </Box> */}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default HeroBanner;
