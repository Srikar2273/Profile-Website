import { Container, Grid, List, ListItem, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { certifications, education } from '../data/siteContent';
import SectionHeading from './SectionHeading';

const MotionPaper = motion.create(Paper);

const Education = () => {
  return (
    <Container id="education" maxWidth="lg" sx={{ py: { xs: 4.5, md: 7 }, scrollMarginTop: 100 }}>
      <SectionHeading
        eyebrow="Education"
        title="Education & Certification"
        subtitle="Academic foundation and continuous learning"
      />

      <Grid container spacing={1.8}>
        <Grid item xs={12} md={6}>
          <MotionPaper
            elevation={0}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            sx={{ p: 2.3, borderRadius: 3, border: '1px solid rgba(18, 38, 49, 0.1)', height: '100%' }}
          >
            <Typography sx={{ fontWeight: 800 }}>{education.school}</Typography>
            <Typography sx={{ mt: 1, color: 'text.secondary' }}>{education.degree}</Typography>
            <Typography sx={{ mt: 1.4, color: 'text.secondary' }}>{education.duration}</Typography>
            <Typography sx={{ mt: 0.5, color: 'primary.main', fontWeight: 800 }}>{education.score}</Typography>
          </MotionPaper>
        </Grid>

        <Grid item xs={12} md={6}>
          <MotionPaper
            elevation={0}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            sx={{ p: 2.3, borderRadius: 3, border: '1px solid rgba(18, 38, 49, 0.1)', height: '100%' }}
          >
            <Typography sx={{ fontWeight: 800, mb: 0.8 }}>Certification</Typography>
            <List sx={{ p: 0 }}>
              {certifications.map((certification) => (
                <ListItem
                  key={certification}
                  sx={{ display: 'list-item', ml: 2.1, p: 0, mb: 0.8, color: 'text.secondary' }}
                >
                  {certification}
                </ListItem>
              ))}
            </List>
          </MotionPaper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Education;
