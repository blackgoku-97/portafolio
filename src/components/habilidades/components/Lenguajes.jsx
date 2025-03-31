import { Card, Grid, Stack, Typography } from '@mui/material';

export const Lenguajes = () => {
  return (
    <Grid size={{ xs: 12 }}>
      <Typography variant="h3" align="center">
        Lenguajes
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2, gap: 2, justifyContent: 'center' }}>
        <Grid size={{ xs: 7 }}>
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
                src={`https://skillicons.dev/icons?i=html`}
                alt="HTML 5"
              />
              <Typography variant="h6" sx={{ mt: 1, color: "white" }}>
                HTML 5
              </Typography>
            </Stack>
            <Stack alignItems="center">
              <img
                src={`https://skillicons.dev/icons?i=css`}
                alt="CSS 3"
              />
              <Typography variant="h6" sx={{ mt: 1, color: "white" }}>
                CSS 3
              </Typography>
            </Stack>
            <Stack alignItems="center">
              <img
                src={`https://skillicons.dev/icons?i=javascript`}
                alt="JavaScript"
              />
              <Typography variant="h6" sx={{ mt: 1, color: "white" }}>
                JavaScript
              </Typography>
            </Stack>
            <Stack alignItems="center">
              <img
                src={`https://skillicons.dev/icons?i=java`}
                alt="Java"
              />
              <Typography variant="h6" sx={{ mt: 1, color: "white" }}>
                Java
              </Typography>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  )
}