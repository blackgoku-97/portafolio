import { Card, Grid, Stack, Typography } from '@mui/material';

export const Frameworks = () => {
  return (
    <Grid size={{ xs: 12 }}>
      <Typography variant="h3" align="center">
        Frameworks
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2, gap: 2, justifyContent: 'center' }}>
        <Grid size={{ xs: 4 }}>
          <Card
            sx={{
              p: 2,
              mb: 2,
              borderRadius: 0,
              boxShadow: "none",
              border: "none",
              backgroundColor: "transparent",
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Stack alignItems="center">
              <img
                src={`https://skillicons.dev/icons?i=react`}
                alt="React"
              />
              <Typography variant="h6" sx={{ mt: 1, color: "white" }}>
                React
              </Typography>
            </Stack>
            <Stack alignItems="center">
              <img
                src={`https://skillicons.dev/icons?i=spring`}
                alt="Spring"
              />
              <Typography variant="h6" sx={{ mt: 1, color: "white" }}>
                Spring
              </Typography>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  )
}