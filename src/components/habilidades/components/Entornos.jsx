import { Card, Grid, Typography } from '@mui/material';
import { Tecnologia } from './Tecnologia';

const entornos = [
  { icon: 'vscode', nombre: 'Visual Studio Code' },
  { icon: 'idea', nombre: 'IntelliJ IDEA' },
];

export const Entornos = () => {
  return (
    <Grid size={{ xs: 12 }}>
      <Typography variant="h3" align="center">
        Entornos de Desarrollo
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2, gap: 2, justifyContent: 'center' }}>
        {entornos.map((entorno, index) => (
          <Grid key={index} size={{ xs: 6, sm: 3, md: 2 }}>
            <Card sx={{ p: 2, mb: 2, borderRadius: 0, boxShadow: "none", border: "none", backgroundColor: "transparent" }}>
              <Tecnologia icon={entorno.icon} nombre={entorno.nombre} />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};