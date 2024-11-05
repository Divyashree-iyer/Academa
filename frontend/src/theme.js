import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976D2', // Blue
      light: '#63a4ff',
      dark: '#004ba0',
    },
    secondary: {
      main: '#4CAF50', // Green
      light: '#80e27e',
      dark: '#087f23',
    },
    warning: {
      main: '#FFC107', // Yellow
    },
    error: {
      main: '#FF5722', // Orange
    },
    info: {
      main: '#9C27B0', // Purple
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F5F5F5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    // Add more typography styles as needed
  },
  // You can add more customizations here
});

export default theme;