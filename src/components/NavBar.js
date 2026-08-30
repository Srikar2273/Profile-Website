import { useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useScrollTrigger
} from '@mui/material';
import { profile, navItems } from '../data/siteContent';

const NavBar = ({ activeSection }) => {
  const [open, setOpen] = useState(false);
  const elevated = useScrollTrigger({ disableHysteresis: true, threshold: 32 });

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backdropFilter: 'blur(18px)',
        backgroundColor: elevated ? 'rgba(247, 250, 249, 0.9)' : 'rgba(247, 250, 249, 0.76)',
        borderBottom: elevated ? '1px solid rgba(18, 38, 49, 0.14)' : '1px solid rgba(18, 38, 49, 0.07)',
        color: 'text.primary',
        transition: 'all 260ms ease'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 76 }, gap: 2 }}>
          <Typography
            component="a"
            href="#top"
            sx={{
              color: 'text.primary',
              textDecoration: 'none',
              fontWeight: 800,
              fontSize: { xs: '1.2rem', md: '1.3rem' },
              letterSpacing: '-0.02em'
            }}
          >
            {profile.shortName}
          </Typography>

          <Box sx={{ flex: 1 }} />

          <Stack
            direction="row"
            spacing={0.5}
            sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
          >
            {navItems.map((item) => (
              <Button
                key={item.id}
                href={`#${item.id}`}
                color="inherit"
                disableRipple
                sx={{
                  px: 1.6,
                  py: 0.85,
                  borderRadius: 999,
                  fontWeight: 700,
                  fontSize: '0.93rem',
                  color: activeSection === item.id ? 'text.primary' : 'text.secondary',
                  backgroundColor:
                    activeSection === item.id ? 'rgba(15, 122, 115, 0.16)' : 'transparent',
                  '&:hover': {
                    backgroundColor: 'rgba(15, 122, 115, 0.1)',
                    transform: 'translateY(-1px)'
                  },
                  transition: 'all 180ms ease'
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>

          <IconButton
            aria-label="Open navigation"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: 'inline-flex', md: 'none' } }}
          >
            <MenuRoundedIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 280, p: 2.25 }} role="presentation">
          <Stack spacing={1}>
            {navItems.map((item) => (
              <Button
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                sx={{
                  justifyContent: 'flex-start',
                  borderRadius: 2,
                  py: 1.2,
                  px: 1.2,
                  color: activeSection === item.id ? 'primary.main' : 'text.primary',
                  backgroundColor:
                    activeSection === item.id ? 'rgba(15, 122, 115, 0.1)' : 'transparent'
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default NavBar;
