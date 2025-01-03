import React from 'react';
import { Box, Typography, Container, Card, CardMedia } from '@mui/material';

const Showcase: React.FC = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
        {/* Text area */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Unique design &amp; ergonomics
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            From blueprints to renders. Experience our innovative approach to designing modern living
            spaces that blend seamlessly with nature.
          </Typography>
          {/* This could be a fake "ROOMTOUR" button or embedded video link */}
          <Typography variant="overline" display="block" sx={{ color: 'text.secondary', mt: 2 }}>
            ROOMTOUR &gt;
          </Typography>
        </Box>

        {/* Image area */}
        <Box sx={{ flex: 1 }}>
          <Card elevation={0} sx={{ position: 'relative' }}>
            <CardMedia
              component="img"
              image="https://via.placeholder.com/800x500"
              alt="Modern House"
            />
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default Showcase;