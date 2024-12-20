import { Box, Container, Typography, Grid, TextField, Button } from '@mui/material';

const ContactSection = () => (
  <Box id="contact" sx={{ py: 8 }}>
    <Container maxWidth="md">
      <Typography variant="h2" gutterBottom align="center">İletişim</Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Bizimle iletişime geçin veya ofisimizi ziyaret edin.
      </Typography>
      <Grid container spacing={4} sx={{ mt:4 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Adres</Typography>
          <Typography variant="body2"> İstanbul, Türkiye</Typography>
          <Typography variant="h6" sx={{ mt:2 }}>Telefon</Typography>
          <Typography variant="body2">+90 (xxx) xxx xx xx</Typography>
          <Typography variant="h6" sx={{ mt:2 }}>E-posta</Typography>
          <Typography variant="body2">info@demircioglu-insaat.com.tr</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap:2 }}>
            <TextField label="Adınız" variant="outlined" fullWidth />
            <TextField label="E-posta" variant="outlined" fullWidth />
            <TextField label="Mesajınız" variant="outlined" multiline rows={4} fullWidth />
            <Button variant="contained" color="secondary">Gönder</Button>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ mt:4 }}>
        {/* Static placeholder for map; in production, embed a real Google Map iframe */}
        <Box sx={{ width: '100%', height: '300px', backgroundColor: '#ddd' }}></Box>
      </Box>
    </Container>
  </Box>
);

export default ContactSection;