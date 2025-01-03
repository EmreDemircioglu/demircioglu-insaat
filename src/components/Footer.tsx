import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ py: 4, backgroundColor: '#fafafa', mt: 4 }}>
      <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Demircioğlu
        </Typography>

        <Box>
          <Link href="#" sx={{ mr: 2 }}>
            Privacy
          </Link>
          <Link href="#" sx={{ mr: 2 }}>
            Terms
          </Link>
          <Link href="#">Contact</Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;