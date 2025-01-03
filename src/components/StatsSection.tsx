import React from 'react';
import { Box, Container, Grid, Typography, Button, Avatar } from '@mui/material';

const StatsSection: React.FC = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar src="https://via.placeholder.com/50" alt="Avatar" />
              <Box>
                <Typography variant="h4">12m+</Typography>
                <Typography variant="body2">Customers</Typography>
              </Box>
            </Box>
            <Typography variant="h5" sx={{ mt: 3 }}>
              We can combine nature &amp; home comfort
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
            <Button variant="text" sx={{ textTransform: 'none', fontSize: '1rem' }}>
              LEARN MORE &gt;
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default StatsSection;