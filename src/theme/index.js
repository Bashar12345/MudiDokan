// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5f27b0', // Replace with your primary color
    },
    secondary: {
      main: '#dc004e', // Replace with your secondary color
    },
    background: {
      default: '#f4f6f8', // Custom background color
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Custom font
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Custom button styling
        },
      },
    },
  },
});

export default theme;
