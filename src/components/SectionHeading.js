import { Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const MotionStack = motion.create(Stack);

const SectionHeading = ({ eyebrow, title, subtitle }) => {
  return (
    <MotionStack
      spacing={1}
      sx={{ mb: { xs: 3.5, md: 4.5 } }}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
    >
      <Typography
        variant="overline"
        sx={{
          color: 'primary.main',
          fontWeight: 800,
          letterSpacing: '0.11em'
        }}
      >
        {eyebrow}
      </Typography>

      <Typography
        component="h2"
        sx={{
          fontFamily: 'Fraunces, serif',
          fontWeight: 700,
          fontSize: { xs: '1.85rem', md: '2.35rem' },
          lineHeight: 1.14
        }}
      >
        {title}
      </Typography>

      {subtitle ? (
        <Typography
          variant="body1"
          sx={{ color: 'text.secondary', maxWidth: '68ch', lineHeight: 1.75 }}
        >
          {subtitle}
        </Typography>
      ) : null}
    </MotionStack>
  );
};

export default SectionHeading;
