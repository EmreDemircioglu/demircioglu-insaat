import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';
import EngineeringIcon from '@mui/icons-material/Engineering';
import HomeWorkIcon from '@mui/icons-material/HomeWork';

const services = [
  { icon: <ConstructionIcon fontSize="large" />, title: "İnşaat", description: "Modern ve dayanıklı yapılar" },
  { icon: <EngineeringIcon fontSize="large" />, title: "Proje Yönetimi", description: "Başarılı proje teslimat süreci" },
  { icon: <HomeWorkIcon fontSize="large" />, title: "Renovasyon", description: "Mevcut yapıları yenileme ve iyileştirme" },
];

const ServicesSection = () => (
  <Box id="services" sx={{ py: 8 }}>
    <Container maxWidth="md">
      <Typography variant="h2" gutterBottom align="center">Hizmetlerimiz</Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Sunduğumuz hizmetlerin kısa bir özeti.
      </Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Paper sx={{ p:4, textAlign: 'center' }} elevation={3}>
              {service.icon}
              <Typography variant="h6" sx={{ mt:2 }}>{service.title}</Typography>
              <Typography variant="body2" sx={{ mt:1 }}>{service.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default ServicesSection;