import {
  Box,
  Chip,
  Container,
  List,
  ListItem,
  Paper,
  Stack,
  Typography
} from '@mui/material';
import { motion } from 'framer-motion';
import { experience } from '../data/siteContent';
import SectionHeading from './SectionHeading';

const MotionPaper = motion.create(Paper);

const Experience = () => {
  return (
    <Container
      id="experience"
      maxWidth="lg"
      sx={{ py: { xs: 4.5, md: 7 }, position: 'relative', scrollMarginTop: 100 }}
    >
      <SectionHeading
        eyebrow="Experience"
        title="Professional Experience"
        subtitle="Roles, ownership, and engineering outcomes across product teams"
      />

      <Stack spacing={2}>
        {experience.map((job, index) => (
          <MotionPaper
            key={`${job.company}-${job.duration}`}
            elevation={0}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: 0.48, delay: index * 0.08 }}
            whileHover={{ y: -3 }}
            sx={{
              p: { xs: 2, md: 2.5 },
              borderRadius: 4,
              border: '1px solid rgba(18, 38, 49, 0.1)',
              bgcolor: '#fff'
            }}
          >
            <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" spacing={1.5}>
              <Box>
                <Typography sx={{ fontWeight: 800, fontSize: { xs: '1.08rem', md: '1.2rem' } }}>
                  {job.role}
                </Typography>
                <Typography sx={{ color: 'text.secondary', fontWeight: 700 }}>{job.company}</Typography>
              </Box>
              <Typography sx={{ color: 'text.secondary', fontWeight: 700 }}>{job.duration}</Typography>
            </Stack>

            <Stack direction="row" useFlexGap gap={0.8} sx={{ mt: 1.5, flexWrap: 'wrap' }}>
              {job.stack.map((item) => (
                <Chip key={item} label={item} size="small" variant="outlined" />
              ))}
            </Stack>

            <List sx={{ mt: 0.5, pl: 0.3 }}>
              {job.points.map((point) => (
                <ListItem
                  key={point}
                  sx={{
                    display: 'list-item',
                    p: 0,
                    ml: 2.2,
                    mb: 0.7,
                    color: 'text.secondary',
                    lineHeight: 1.72
                  }}
                >
                  {point}
                </ListItem>
              ))}
            </List>
          </MotionPaper>
        ))}
      </Stack>
    </Container>
  );
};

export default Experience;
