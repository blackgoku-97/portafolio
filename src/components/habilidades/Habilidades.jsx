import { Container, Grid, Typography } from '@mui/material';
import { Databases, Entornos, Frameworks, Herramientas, Lenguajes, Sistemas } from './components';

export const Habilidades = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      <Typography variant="h2" align="center" sx={{ mb: 2 }}>
        Habilidades
      </Typography>
      <Grid container spacing={2} sx={{ mb: 5 }}>
        <Lenguajes />
        <Frameworks />
        <Databases />
        <Entornos />
        <Herramientas />
        <Sistemas />
      </Grid>
    </Container>
  );
};
