import { Container, Grid, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { highlights, profile } from '../data/siteContent';
import SectionHeading from './SectionHeading';

const MotionPaper = motion.create(Paper);

const About = () => {
  return (
    <Container id="about" maxWidth="lg" sx={{ py: { xs: 4.5, md: 7 }, scrollMarginTop: 100 }}>
      <SectionHeading
        eyebrow="About"
        title="Professional Summary"
        subtitle="A concise overview of domain focus and engineering impact"
      />

      <MotionPaper
        elevation={0}
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45 }}
        sx={{
          p: { xs: 2.3, md: 2.8 },
          borderRadius: 4,
          border: '1px solid rgba(18, 38, 49, 0.1)',
          backgroundColor: 'rgba(255,255,255,0.86)',
          lineHeight: 1.85,
          color: 'text.secondary'
        }}
      >
        {profile.summary}
      </MotionPaper>

      <Grid container spacing={1.8} sx={{ mt: 0.8 }}>
        {highlights.map((item, index) => (
          <Grid key={item.title} item xs={12} md={4}>
            <MotionPaper
              elevation={0}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.36 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              sx={{
                p: 2.1,
                borderRadius: 3,
                border: '1px solid rgba(18, 38, 49, 0.1)',
                backgroundColor: '#fff'
              }}
            >
              <Typography sx={{ fontWeight: 800, mb: 0.6 }}>{item.title}</Typography>
              <Typography variant="h6" sx={{ color: 'primary.main', mb: 0.8, fontWeight: 800 }}>
                {item.value}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                {item.detail}
              </Typography>
            </MotionPaper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default About;
