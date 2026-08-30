import { Chip, Container, Grid, Paper, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { projects } from '../data/siteContent';
import SectionHeading from './SectionHeading';

const MotionPaper = motion.create(Paper);

const Projects = () => {
  return (
    <Container id="projects" maxWidth="lg" sx={{ py: { xs: 4.5, md: 7 }, scrollMarginTop: 100 }}>
      <SectionHeading
        eyebrow="Projects"
        title="Project Highlights"
        subtitle="Selected implementations from professional engineering experience"
      />

      <Grid container spacing={1.8}>
        {projects.map((project, index) => (
          <Grid key={project.name} item xs={12} md={4}>
            <MotionPaper
              elevation={0}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              whileHover={{ y: -4 }}
              sx={{
                p: 2.2,
                borderRadius: 3,
                border: '1px solid rgba(18, 38, 49, 0.1)',
                backgroundColor: '#fff',
                height: '100%'
              }}
            >
              <Typography sx={{ fontWeight: 800, mb: 1 }}>{project.name}</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.74, mb: 1.5 }}>
                {project.description}
              </Typography>
              <Stack direction="row" useFlexGap gap={0.75} sx={{ flexWrap: 'wrap' }}>
                {project.tech.map((tech) => (
                  <Chip key={tech} size="small" label={tech} variant="outlined" />
                ))}
              </Stack>
            </MotionPaper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
