import { Box, Typography, Button, Container } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        background: 'url("https://via.placeholder.com/1920x1080") center/cover no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h1" gutterBottom>
          Güvenilir Yapılar, Kaliteli Yaşam Alanları
        </Typography>
        <Typography variant="h5" gutterBottom>
          20+ Yıllık Deneyim ile Modern İnşaat Çözümleri
        </Typography>
        <Button variant="contained" color="secondary" size="large" href="#projects" sx={{ mt: 2 }}>
          Projelerimizi İnceleyin
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;