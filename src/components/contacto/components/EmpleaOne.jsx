import { Grid, Card, Stack, Link, Typography } from '@mui/material';

export const EmpleaOne = () => {
    return (
        <Grid size={{ xs: 4, sm: 2, md: 1 }}>
          <Card
            sx={{
              p: 2,
              mb: 2,
              borderRadius: 0,
              boxShadow: "none",
              border: "none",
              backgroundColor: "transparent",
            }}
          >
            <Stack alignItems="center">
              <Link
                href="https://app.aluracursos.com/emprega-one/profile/rpe19971210"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://app.aluracursos.com/assets/images/logos/logo-aluraespanhol.png"
                  alt="Alura Latam"
                  width={64}
                  height={64}
                />
              </Link>
              <Typography variant="h6" sx={{ mt: 1, color: "white" }}>
                EmpleaOne
              </Typography>
            </Stack>
          </Card>
        </Grid>
    )
}