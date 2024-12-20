import { Box, Container, Typography, Link, Grid } from '@mui/material';

const Footer = () => (
  <Box sx={{ py: 4, backgroundColor: '#2c3e50', color: '#fff', mt:4 }}>
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Demircioğlu İnşaat</Typography>
          <Typography variant="body2">© {new Date().getFullYear()} Tüm hakları saklıdır.</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Bağlantılar</Typography>
          <Link href="#about" color="inherit" underline="hover" display="block">Hakkımızda</Link>
          <Link href="#projects" color="inherit" underline="hover" display="block">Projeler</Link>
          <Link href="#services" color="inherit" underline="hover" display="block">Hizmetler</Link>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">İletişim</Typography>
          <Typography variant="body2">info@demircioglu-insaat.com.tr</Typography>
          <Typography variant="body2">+90 (212) 123 4567</Typography>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default Footer;