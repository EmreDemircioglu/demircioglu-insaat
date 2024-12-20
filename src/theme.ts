import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2c3e50' // A deep neutral tone
    },
    secondary: {
      main: '#e67e22' // Accent color for CTAs
    },
    background: {
      default: '#fff'
    },
    text: {
      primary: '#333',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: { fontWeight: 700, fontSize: '2.5rem' },
    h2: { fontWeight: 600, fontSize: '2rem' },
    h3: { fontWeight: 500, fontSize: '1.75rem' },
    body1: { fontSize: '1rem' },
  }
});

export default theme;