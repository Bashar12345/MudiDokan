import React from 'react';
import Grid from '@mui/material/Grid2';
import {
    Box, Typography, TextField,
    Button, IconButton,
    BottomNavigation, BottomNavigationAction
} from '@mui/material';
import {
    Facebook, Twitter, LinkedIn,
    Instagram, LocationOn, Email, Phone
} from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function Footer() {

    const [value, setValue] = React.useState(0);
    return (
        <Box>

            <Box sx={{ }}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                    <BottomNavigationAction label="Category" icon={<CategoryIcon />} />
                    <BottomNavigationAction label="Cart" icon={<ShoppingCartIcon />} />
                    <BottomNavigationAction label="Account" icon={<AccountCircleIcon />} />
                </BottomNavigation>
            </Box>


            <Box sx={{
                backgroundColor: 'background.paper',
                color: 'text.primary',
                mt: 5,
                py: 5,
                display: { xs: "none", md: "block" }
            }}>

                <Grid container spacing={5}>
                    <Grid item size={{ xs: 12, md: 4, lg: 3 }}>
                        <Typography
                            variant="h5"
                            sx={{
                                textTransform: 'uppercase',
                                borderBottom: 3,
                                borderColor: 'primary.main',
                                mb: 4,
                            }}
                        >
                            Get In Touch
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 4 }}>
                            We're here to help you with any questions or concerns. Reach out to us anytime.
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2 }}>
                            <LocationOn sx={{ color: 'primary.main', mr: 1 }} />
                            123 E-commerce St, Science Lab, BD
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2 }}>
                            <Email sx={{ color: 'primary.main', mr: 1 }} />
                            support@ecommerce.com
                        </Typography>
                        <Typography variant="body2">
                            <Phone sx={{ color: 'primary.main', mr: 1 }} />
                            +88012 345 67890
                        </Typography>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 4, lg: 3 }}>
                        <Typography
                            variant="h5"
                            sx={{
                                textTransform: 'uppercase',
                                borderBottom: 3,
                                borderColor: 'primary.main',
                                mb: 4,
                            }}
                        >
                            Customer Service
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            {['FAQ', 'Shipping & Returns', 'Order Tracking', 'Contact Us', 'Support'].map(
                                (link, index) => (
                                    <Button
                                        key={index}
                                        href="#"
                                        variant="text"
                                        sx={{ color: 'text.secondary', mb: 2, justifyContent: 'flex-start' }}
                                        startIcon={<i className="fa fa-angle-right" />}
                                    >
                                        {link}
                                    </Button>
                                )
                            )}
                        </Box>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 4, lg: 3 }}>
                        <Typography
                            variant="h5"
                            sx={{
                                textTransform: 'uppercase',
                                borderBottom: 3,
                                borderColor: 'primary.main',
                                mb: 4,
                            }}
                        >
                            Company
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            {['About Us', 'Careers', 'Press', 'Affiliate Program', 'Terms & Conditions'].map(
                                (link, index) => (
                                    <Button
                                        key={index}
                                        href="#"
                                        variant="text"
                                        sx={{ color: 'text.secondary', mb: 2, justifyContent: 'flex-start' }}
                                        startIcon={<i className="fa fa-angle-right" />}
                                    >
                                        {link}
                                    </Button>
                                )
                            )}
                        </Box>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 4, lg: 3 }}>
                        <Typography
                            variant="h5"
                            sx={{
                                textTransform: 'uppercase',
                                borderBottom: 3,
                                borderColor: 'primary.main',
                                mb: 4,
                            }}
                        >
                            Newsletter
                        </Typography>
                        <Box component="form" action="#" method="post" sx={{ display: 'flex', mb: 4 }}>
                            <TextField
                                variant="outlined"
                                placeholder="Your Email Address"
                                InputProps={{
                                    sx: {
                                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                        borderRadius: '8px 0 0 8px',
                                    },
                                }}
                            />

                            <Button
                                variant="contained"
                                color="primary"
                                sx={{
                                    textTransform: 'capitalize',
                                    padding: 1,
                                    borderRadius: '0 8px 8px 0'
                                }}
                            >
                                SignUp
                            </Button>
                        </Box>
                        <Typography variant="h6" sx={{ textTransform: 'uppercase', mt: 4, mb: 3 }}>
                            Follow Us
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2, color: "primary.main" }}>
                            {[
                                { icon: <Facebook />, href: '#' },
                                { icon: <Twitter />, href: '#' },
                                { icon: <LinkedIn />, href: '#' },
                                { icon: <Instagram />, href: '#' },
                            ].map((social, index) => (
                                <IconButton
                                    key={index}
                                    color="primary"
                                    href={social.href}
                                    sx={{ backgroundColor: 'primary.main', color: 'white' }}
                                >
                                    {social.icon}
                                </IconButton>
                            ))}
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ backgroundColor: 'background.paper', color: 'text.secondary', borderTop: 1, borderColor: 'primary.main', my: 2 }}>

                    <Grid container spacing={5}>
                        <Grid item size={{ xs: 12, md: 6 }} textAlign={{ xs: 'center', md: 'left' }}>
                            <Typography variant="body2">
                                © {new Date().getFullYear()} <a href="#" style={{ color: 'primary.main', textDecoration: 'none' }}>E-commerce</a>. All Rights Reserved.
                            </Typography>
                        </Grid>
                        <Grid item size={{ xs: 12, md: 6 }} textAlign={{ xs: 'center', md: 'right' }}>
                            <Typography variant="body2">
                                Designed by <a href="#" target="_blank" rel="nofollow noopener" style={{ color: 'primary.main', textDecoration: 'none' }}>Bashar Codex</a>
                            </Typography>
                        </Grid>
                    </Grid>

                </Box>
            </Box>

        </Box>
    );
}

export default Footer;
