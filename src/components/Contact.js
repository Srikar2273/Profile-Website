import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import { Container, Grid, Paper, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { profile } from '../data/siteContent';
import SectionHeading from './SectionHeading';

const MotionPaper = motion.create(Paper);

const contactItems = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: EmailRoundedIcon
  },
  {
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, '')}`,
    icon: PhoneRoundedIcon
  },
  {
    label: 'Location',
    value: profile.location,
    icon: PlaceRoundedIcon
  },
  {
    label: 'LinkedIn',
    value: 'View Profile',
    href: profile.linkedin,
    icon: LinkedInIcon,
    external: true
  }
];

const Contact = () => {
  return (
    <Container id="contact" maxWidth="lg" sx={{ py: { xs: 4.5, md: 7 }, scrollMarginTop: 100 }}>
      <SectionHeading
        eyebrow="Contact"
        title="Let us Connect"
        subtitle="Open to discussing engineering opportunities and collaborations"
      />

      <Grid container spacing={1.6}>
        {contactItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <Grid key={item.label} item xs={12} sm={6}>
              <MotionPaper
                component={item.href ? 'a' : 'div'}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                elevation={0}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.34 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                whileHover={{ y: -4 }}
                sx={{
                  p: 2,
                  borderRadius: 3,
                  border: '1px solid rgba(18, 38, 49, 0.1)',
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'block',
                  backgroundColor: '#fff',
                  height: '100%'
                }}
              >
                <Stack direction="row" spacing={1.4} alignItems="center">
                  <Icon color="primary" />
                  <Stack>
                    <Typography variant="caption" sx={{ color: 'text.secondary', letterSpacing: '0.06em' }}>
                      {item.label}
                    </Typography>
                    <Typography sx={{ fontWeight: 800 }}>{item.value}</Typography>
                  </Stack>
                </Stack>
              </MotionPaper>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Contact;
