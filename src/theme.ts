import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000', // Dark text/accents
    },
    secondary: {
      main: '#7c4dff', // Sample accent color
    },
    background: {
      default: '#ffffff'
    },
    text: {
      primary: '#1e1e1e'
    }
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600
    },
    body1: {
      fontSize: '1rem'
    }
  }
});

export default theme;