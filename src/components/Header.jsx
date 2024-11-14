import React from 'react';
import { Typography, Link, IconButton, Box } from '@mui/material';
import Grid from '@mui/material/Grid2'; // Import Grid instead of Grid
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useTheme } from '@mui/material/styles';

const Header = () => {
    const theme = useTheme();
    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: 'background.paper' }}>
            
                <Grid container alignItems="center">
                    <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: "none", md: "flex" }, alignItems: 'center' }}>
                        <Link href="#" color="inherit" underline="none" sx={{ display: 'flex', alignItems: 'center', pr: 2 }}>
                            <PhoneIcon sx={{ pr: 0.5 }} /> +012 345 6789
                        </Link>
                        <Typography variant="body2" sx={{ px: 1 }}>
                            |
                        </Typography>
                        <Link href="#" color="inherit" underline="none" sx={{ display: 'flex', alignItems: 'center', px: 2 }}>
                            <EmailIcon sx={{ pr: 0.5 }} /> techgenz365@gamil.com
                        </Link>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: "none", md: "flex" }, textAlign: { xs: 'left', md: 'right' }, justifyContent: "flex-end" }}>
                        <IconButton color="inherit" size="small">
                            <FacebookIcon />
                        </IconButton>
                        <IconButton color="inherit" size="small">
                            <TwitterIcon />
                        </IconButton>
                        <IconButton color="inherit" size="small">
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton color="inherit" size="small">
                            <InstagramIcon />
                        </IconButton>
                        <IconButton color="inherit" size="small">
                            <YouTubeIcon />
                        </IconButton>
                    </Grid>
                </Grid>
           
        </Box>
    );
};

export default Header;
