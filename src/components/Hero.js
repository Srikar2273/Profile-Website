import { useMemo, useState } from 'react';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {
  Alert,
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  Paper,
  Stack,
  Tooltip,
  Typography
} from '@mui/material';
import { motion, useReducedMotion } from 'framer-motion';
import { assets, profile } from '../data/siteContent';
import useAssetAvailability from '../hooks/useAssetAvailability';

const MotionPaper = motion.create(Paper);

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();
  const [imageFailed, setImageFailed] = useState(false);
  const { isAvailable: hasResumePdf, isChecking: resumeLoading } =
    useAssetAvailability(assets.resumePdf);

  const initials = useMemo(
    () =>
      profile.name
        .split(' ')
        .slice(0, 2)
        .map((word) => word[0])
        .join(''),
    []
  );

  return (
    <Container maxWidth="lg" sx={{ pt: { xs: 4.5, md: 7.5 }, pb: { xs: 4.5, md: 6 } }}>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2.2}>
        <MotionPaper
          elevation={0}
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          sx={{
            p: { xs: 2.3, sm: 3, md: 4 },
            borderRadius: 5,
            border: '1px solid rgba(18, 38, 49, 0.09)',
            backgroundColor: 'rgba(255, 255, 255, 0.84)',
            backdropFilter: 'blur(8px)',
            flex: 1.4
          }}
        >
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', letterSpacing: '0.12em', fontWeight: 800 }}
          >
            Software Engineer Portfolio
          </Typography>

          <Typography
            component="h1"
            sx={{
              mt: 1,
              fontSize: { xs: '2.3rem', sm: '3rem', md: '3.8rem' },
              lineHeight: 1,
              letterSpacing: '-0.03em',
              fontFamily: 'Fraunces, serif'
            }}
          >
            {profile.name}
          </Typography>

          <Typography sx={{ mt: 1.4, fontWeight: 800, fontSize: { xs: '1.2rem', md: '1.4rem' } }}>
            {profile.title}
          </Typography>

          <Typography sx={{ mt: 0.8, color: 'text.secondary', fontSize: { xs: '1rem', md: '1.07rem' } }}>
            {profile.tagline}
          </Typography>

          <Typography sx={{ mt: 1.8, lineHeight: 1.85, maxWidth: '62ch', color: 'text.secondary' }}>
            Building scalable web platforms with modern frontend architecture, reliable backend APIs,
            and measurable performance improvements.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.2} sx={{ mt: 2.5 }}>
            <Button size="large" variant="contained" href="#contact">
              Contact Me
            </Button>
            <Button size="large" variant="outlined" href="#projects">
              View Projects
            </Button>

            <Tooltip
              title={
                hasResumePdf
                  ? 'Download resume PDF'
                  : 'Add the resume PDF at public/assets/resume/Bhava_Narayana_Srikar_Kotipalli_Resume.pdf'
              }
            >
              <span>
                <Button
                  size="large"
                  variant="text"
                  href={hasResumePdf ? assets.resumePdf : undefined}
                  download={hasResumePdf ? assets.resumeFileName : undefined}
                  disabled={resumeLoading || !hasResumePdf}
                  startIcon={<DownloadRoundedIcon />}
                >
                  Download Resume
                </Button>
              </span>
            </Tooltip>
          </Stack>

          {!resumeLoading && !hasResumePdf ? (
            <Alert severity="info" sx={{ mt: 2 }}>
              Resume PDF is not in the expected location yet. Add it to
              public/assets/resume/Bhava_Narayana_Srikar_Kotipalli_Resume.pdf.
            </Alert>
          ) : null}
        </MotionPaper>

        <MotionPaper
          elevation={0}
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          sx={{
            p: { xs: 2.1, md: 2.6 },
            borderRadius: 5,
            border: '1px solid rgba(18, 38, 49, 0.1)',
            backgroundColor: 'rgba(255, 255, 255, 0.83)',
            backdropFilter: 'blur(8px)',
            minWidth: { md: 360 },
            maxWidth: { md: 410 },
            width: '100%'
          }}
        >
          <Box
            sx={{
              borderRadius: 4,
              overflow: 'hidden',
              border: '1px solid rgba(18, 38, 49, 0.11)',
              mb: 2,
              aspectRatio: '4 / 5',
              bgcolor: 'grey.100'
            }}
          >
            {imageFailed ? (
              <Stack
                alignItems="center"
                justifyContent="center"
                spacing={1.1}
                sx={{ width: '100%', height: '100%', p: 2 }}
              >
                <Avatar sx={{ width: 72, height: 72, bgcolor: 'primary.main', fontWeight: 800 }}>
                  {initials}
                </Avatar>
                <Typography variant="body2" color="text.secondary" align="center">
                  Profile image missing. Add image to
                  public/assets/images/Bhava_Narayana_Srikar_Kotipalli_Photo.jpg.
                </Typography>
              </Stack>
            ) : (
              <Box
                component={motion.img}
                src={assets.profileImage}
                alt={profile.name}
                loading="eager"
                onError={() => setImageFailed(true)}
                sx={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 14%' }}
                whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            )}
          </Box>

          <Typography variant="h6" sx={{ fontWeight: 800 }}>
            Quick Snapshot
          </Typography>

          <Stack direction="row" useFlexGap gap={1} sx={{ mt: 1.2, flexWrap: 'wrap' }}>
            <Chip label={profile.location} variant="outlined" />
            <Chip label="Microservices" variant="outlined" />
            <Chip label="SaaS Platforms" variant="outlined" />
          </Stack>

          <Button
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<LinkedInIcon />}
            sx={{ mt: 1.6 }}
          >
            Open LinkedIn
          </Button>
        </MotionPaper>
      </Stack>
    </Container>
  );
};

export default Hero;
