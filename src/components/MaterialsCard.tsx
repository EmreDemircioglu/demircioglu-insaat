import React from 'react';
import { Box, Container, Typography, Card, CardContent, CardMedia } from '@mui/material';

const MaterialsCard: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', py: 6 }}>
      <Container maxWidth="md" sx={{ display: 'flex', gap: 4, flexDirection: { xs: 'column', md: 'row' } }}>
        <Card sx={{ maxWidth: 400 }}>
          <CardMedia
            component="img"
            height="300"
            image="https://via.placeholder.com/300x300"
            alt="Material example"
          />
        </Card>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            We use best materials!
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Working with verified suppliers to ensure durability, sustainability, and the finest
            finishes for every custom home we build.
          </Typography>
        </CardContent>
      </Container>
    </Box>
  );
};

export default MaterialsCard;