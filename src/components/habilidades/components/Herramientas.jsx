import { Card, Grid, Stack, Typography } from '@mui/material';

export const Herramientas = () => {
  return (
    <Grid size={{ xs: 12 }}>
      <Typography variant="h3" align="center">
        Herramientas de Desarrollo
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
                src={`https://skillicons.dev/icons?i=git`}
                alt="Git"
              />
              <Typography variant="h6" sx={{ mt: 1, color: "white" }}>
                Git
              </Typography>
            </Stack>
            <Stack alignItems="center">
              <img
                src={`https://skillicons.dev/icons?i=github`}
                alt="GitHub"
              />
              <Typography variant="h6" sx={{ mt: 1, color: "white" }}>
                GitHub
              </Typography>
            </Stack>
            <Stack alignItems="center">
              <img
                src={`https://skillicons.dev/icons?i=vite`}
                alt="Vite"
              />
              <Typography variant="h6" sx={{ mt: 1, color: "white" }}>
                Vite
              </Typography>
            </Stack>
            <Stack alignItems="center">
              <img
                src={`https://skillicons.dev/icons?i=postman`}
                alt="Postman"
              />
              <Typography variant="h6" sx={{ mt: 1, color: "white" }}>
                Postman
              </Typography>
            </Stack>
            <Stack alignItems="center">
              <img
                src={`https://skillicons.dev/icons?i=vitest`}
                alt="Vitest"
              />
              <Typography variant="h6" sx={{ mt: 1, color: "white" }}>
                Vitest
              </Typography>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  )
}