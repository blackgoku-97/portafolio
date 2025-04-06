import { Card, Grid, Typography } from '@mui/material';
import { Tecnologia } from './Tecnologia';

const herramientas = [
  { icon: 'git', nombre: 'Git' },
  { icon: 'github', nombre: 'GitHub' },
  { icon: 'vite', nombre: 'Vite' },
  { icon: 'postman', nombre: 'Postman' },
  { icon: 'vitest', nombre: 'Vitest' },
];

export const Herramientas = () => {
  return (
    <Grid size={{ xs: 12 }}>
      <Typography variant="h3" align="center">
        Herramientas de Desarrollo
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2, gap: 2, justifyContent: 'center' }}>
        <Grid size={{ xs: 7 }}>
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
            {herramientas.map((herramienta, index) => (
              <Tecnologia key={index} icon={herramienta.icon} nombre={herramienta.nombre} />
            ))}
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};