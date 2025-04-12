import { Grid, Typography, Container } from "@mui/material";

export const Inicio = () => {
  return (
    <Container maxWidth="lg" sx={{ height: "80vh", display: "flex", justifyContent: "center", alignItems: "center", marginTop: { xs: 10, md: 0 }, }}
    >
      <Grid container spacing={{ xs: 4, md: 8 }} direction={{ xs: "column", md: "row" }} alignItems="center" justifyContent="center"
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h4" align="center" sx={{ marginBottom: { xs: 4, md: 0 } }}
          >
            ¡Hola Soy Ricardo! 👋 
            Desarrollador Web Junior
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex", justifyContent: "center" }}
        >
          <img src="assets/img/coding.png" alt="Imagen de bienvenida" style={{
              width: "100%",
              maxWidth: 400,
              height: "auto",
              marginLeft: { xs: 0, md: 200 },
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};