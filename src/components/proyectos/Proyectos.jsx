import { Container, Grid } from '@mui/material';
import { Conversor, Libreria, Foro } from './components';

export const Proyectos = () => {
  return (
    <Container maxWidth="lg" sx={{ height: '100vh' }}>
      <Grid container spacing={4} justifyContent="center" alignItems="flex-end" sx={{ height: '50%' }}>
        <Conversor />
        <Libreria />
        <Foro />
      </Grid>
    </Container>
  );
}