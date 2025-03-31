import { Card, Grid, Stack, Typography } from '@mui/material';

export const Entornos = () => {
  return (
    <Grid size={{ xs: 12 }}>
      <Typography variant="h3" align="center">
        IDEs (Entornos de Desarrollo)
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2, gap: 2, justifyContent: 'center' }}>
        <Grid size={{ xs: 5 }}>
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
                src={`https://skillicons.dev/icons?i=vscode`}
                alt="Visual Studio Code"
              />
              <Typography variant="h6" sx={{ mt: 1, color: "white" }}>
                Visual Studio Code
              </Typography>
            </Stack>
            <Stack alignItems="center">
              <img
                src={`https://skillicons.dev/icons?i=idea`}
                alt="IntelliJ IDEA"
              />
              <Typography variant="h6" sx={{ mt: 1, color: "white" }}>
                IntelliJ IDEA
              </Typography>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  )
}