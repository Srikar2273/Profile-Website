import { Chip, Container, Grid, Paper, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { skills } from '../data/siteContent';
import SectionHeading from './SectionHeading';

const MotionPaper = motion.create(Paper);

const Skills = () => {
  return (
    <Container id="skills" maxWidth="lg" sx={{ py: { xs: 4.5, md: 7 }, scrollMarginTop: 100 }}>
      <SectionHeading
        eyebrow="Skills"
        title="Technical Expertise"
        subtitle="Tools and technologies used across product engineering and delivery"
      />

      <Grid container spacing={1.8}>
        {skills.map((skill, index) => (
          <Grid key={skill.category} item xs={12} sm={6} md={4}>
            <MotionPaper
              elevation={0}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -4 }}
              sx={{
                p: 2,
                borderRadius: 3,
                border: '1px solid rgba(18, 38, 49, 0.1)',
                backgroundColor: '#fff',
                height: '100%'
              }}
            >
              <Typography sx={{ fontWeight: 800, mb: 1.2 }}>{skill.category}</Typography>
              <Stack direction="row" useFlexGap gap={0.85} sx={{ flexWrap: 'wrap' }}>
                {skill.items.map((item) => (
                  <Chip key={item} label={item} variant="outlined" size="small" />
                ))}
              </Stack>
            </MotionPaper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Skills;
