import { Container, Paper, Skeleton, Stack } from '@mui/material';

const LoadingSection = () => {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4.5, md: 6 } }}>
      <Paper
        elevation={0}
        sx={{
          borderRadius: 4,
          border: '1px solid rgba(18, 38, 49, 0.1)',
          p: { xs: 2.2, md: 2.8 },
          backgroundColor: 'rgba(255,255,255,0.84)'
        }}
      >
        <Stack spacing={1.1}>
          <Skeleton variant="text" width="24%" height={24} />
          <Skeleton variant="text" width="46%" height={46} />
          <Skeleton variant="text" width="100%" height={22} />
          <Skeleton variant="text" width="88%" height={22} />
          <Skeleton variant="rounded" width="100%" height={140} sx={{ mt: 1.4 }} />
        </Stack>
      </Paper>
    </Container>
  );
};

export default LoadingSection;
