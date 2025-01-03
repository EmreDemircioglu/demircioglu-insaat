import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        background: 'url("https://via.placeholder.com/1600x900") center/cover no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        color: '#fff',
        position: 'relative'
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '4rem' } }}>
          THE PERFECT HOME<sup>®</sup>
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          / We craft custom homes /
        </Typography>

        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ mt: 4, borderRadius: 0, textTransform: 'none' }}
        >
          START
        </Button>
      </Container>

      {/* Optional overlay for a darker background */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.35)'
        }}
      />
    </Box>
  );
};

export default Hero;