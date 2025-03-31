import { Container, Grid, Typography } from '@mui/material';
import { Databases, Entornos, Frameworks, Herramientas, Lenguajes } from './components';

export const Habilidades = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Typography variant="h1" align="center" sx={{ mb: 2 }}>
        Habilidades
      </Typography>
      <Grid container spacing={2} sx={{ mb: 5 }}>
        <Lenguajes />
        <Frameworks />
        <Databases />
        <Entornos />
        <Herramientas />
      </Grid>
    </Container>
  );
};
