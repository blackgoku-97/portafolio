import { Container, Grid } from "@mui/material";
import { Descripcion, Educacion, Experiencia } from "./components";

export const Curriculum = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Grid container spacing={2}>
        <Descripcion />
        <Educacion />
        <Experiencia />
      </Grid>
    </Container>
  );
};
