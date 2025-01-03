import { Box, Container, Typography, Grid2 } from '@mui/material';

const AboutSection = () => (
  <Box id="about" sx={{ py: 8 }}>
    <Container maxWidth="md">
      <Typography variant="h2" gutterBottom align="center">
        Hakkımızda
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Demircioğlu İnşaat, 20 yıldır inşaat sektöründe güven, kalite ve estetiği bir araya getirerek konut ve ticari yapılar inşa etmektedir.
      </Typography>
      <Grid2 container spacing={4} sx={{ mt: 4 }}>
        <Grid2 size={{xs: 12, sm: 4}}>
          <Typography variant="h3" align="center">20+</Typography>
          <Typography variant="body1" align="center">Yıl Deneyimi</Typography>
        </Grid2>
        <Grid2 size={{xs: 12, sm: 4}}>
          <Typography variant="h3" align="center">100+</Typography>
          <Typography variant="body1" align="center">Tamamlanan Proje</Typography>
        </Grid2>
        <Grid2 size={{xs: 12, sm: 4}}>
          <Typography variant="h3" align="center">50+</Typography>
          <Typography variant="body1" align="center">Mutlu Müşteri</Typography>
        </Grid2>
      </Grid2>
    </Container>
  </Box>
);

export default AboutSection;