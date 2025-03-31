import { Card, Grid, Stack, Typography } from '@mui/material';

export const Databases = () => {
  return (
    <Grid size={{ xs: 12 }}>
      <Typography variant="h3" align="center">
        Bases de Datos
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
                src={`https://skillicons.dev/icons?i=mysql`}
                alt="MySQL"
              />
              <Typography variant="h6" sx={{ mt: 1, color: "white" }}>
                MySQL
              </Typography>
            </Stack>
            <Stack alignItems="center">
              <img
                src={`https://skillicons.dev/icons?i=postgresql`}
                alt="PostgreSQL"
              />
              <Typography variant="h6" sx={{ mt: 1, color: "white" }}>
                PostgreSQL
              </Typography>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  )
}