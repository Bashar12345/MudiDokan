import React from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

function Features() {
    return (
        <Box py={5}>
            <Grid container spacing={2}>
                <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            textAlign: 'center',
                        }}
                    >
                        <img
                            src="https://dorkarisamogri.com/wp-content/uploads/2024/07/van.png"
                            alt="van"
                            style={{
                                width: '100%',
                                maxWidth: '200px', // Adjust max width as needed
                                height: 'auto',
                            }}
                        />
                        <Typography variant="h5" style={{ fontFamily: 'SolaimanLipi', marginTop: '16px' }}>
                            Quick Delivery
                        </Typography>
                        <Typography variant="subtitle2" style={{ fontFamily: 'SolaimanLipi' }}>
                            All over Bangladesh
                        </Typography>
                    </Box>
                </Grid>
                <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            textAlign: 'center',
                        }}
                    >
                        <img
                            src="https://dorkarisamogri.com/wp-content/uploads/2024/07/customer-service.png"
                            alt="customer-service"
                            loading="lazy"
                            decoding="async"
                            style={{
                                width: '100%',
                                maxWidth: '200px',
                                height: 'auto',
                            }}
                        />
                        <Typography variant="h5" style={{ fontFamily: 'SolaimanLipi', marginTop: '16px' }}>
                            Dedicated Support
                        </Typography>
                        <Typography variant="subtitle2" style={{ fontFamily: 'SolaimanLipi' }}>
                            Quick response 24/7
                        </Typography>
                    </Box>
                </Grid>
                <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            textAlign: 'center',
                        }}
                    >
                        <img
                            src="https://dorkarisamogri.com/wp-content/uploads/2024/07/money.png"
                            alt="money"
                            loading="lazy"
                            decoding="async"
                            style={{
                                width: '100%',
                                maxWidth: '200px',
                                height: 'auto',
                            }}
                        />
                        <Typography variant="h5" style={{ fontFamily: 'SolaimanLipi', marginTop: '16px' }}>
                            Money Back Guarantee
                        </Typography>
                        <Typography variant="subtitle2" style={{ fontFamily: 'SolaimanLipi' }}>
                            Worry-free shopping
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box >
    );
}

export default Features;
