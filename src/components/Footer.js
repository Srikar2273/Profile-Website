import { Box, Container, Typography } from '@mui/material';
import { profile } from '../data/siteContent';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: { xs: 4, md: 6 },
        py: { xs: 3, md: 4 },
        borderTop: '1px solid rgba(18, 38, 49, 0.1)',
        background: 'linear-gradient(180deg, rgba(17, 36, 47, 0.96), rgba(12, 29, 40, 0.98))',
        color: 'rgba(236, 244, 246, 0.92)'
      }}
    >
      <Container maxWidth="lg">
        <Typography sx={{ fontWeight: 800 }}>{profile.name}</Typography>
        <Typography sx={{ mt: 0.6, color: 'rgba(236, 244, 246, 0.78)' }}>
          Software Engineer | .NET, React, Angular, Azure, Microservices
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
