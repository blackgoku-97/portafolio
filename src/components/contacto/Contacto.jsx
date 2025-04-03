import { Grid, Typography, Card, Stack, Link } from "@mui/material";

export const Contacto = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ mt: 5, gap: 2, justifyContent: "center" }}
    >
      <Grid size={{ xs: 12 }}>
        <Typography variant="h3" align="center" sx={{ mt: 5 }}>
          ¡Contáctame!
        </Typography>
        <Typography variant="p" align="center" display={"block"} sx={{ mt: 2 }}>
          Puedes contactarme a través de los siguientes medios:
        </Typography>
      </Grid>
      <Grid
        size={{ xs: 12 }}
        container
        spacing={2}
        sx={{ mt: 5, gap: 2, justifyContent: "center" }}
      >
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
                href="https://www.linkedin.com/in/ricardo-perez-a31474229/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://skillicons.dev/icons?i=linkedin"
                  alt="LinkedIn"
                  width={64}
                  height={64}
                />
              </Link>
              <Typography variant="h6" sx={{ mt: 1, color: "white" }}>
                LinkedIn
              </Typography>
            </Stack>
          </Card>
        </Grid>
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
                href="https://github.com/blackgoku-97"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://skillicons.dev/icons?i=github"
                  alt="GitHub"
                  width={64}
                  height={64}
                />
              </Link>
              <Typography variant="h6" sx={{ mt: 1, color: "white" }}>
                GitHub
              </Typography>
            </Stack>
          </Card>
        </Grid>
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
      </Grid>
    </Grid>
  );
};
