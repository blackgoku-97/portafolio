import { Card, Grid, Typography } from '@mui/material';
import { Tecnologia } from './Tecnologia';

const databases = [
  { icon: 'mysql', nombre: 'MySQL' },
  { icon: 'postgresql', nombre: 'PostgreSQL' },
  { icon: 'mongodb', nombre: 'MongoDB' },
];

export const Databases = () => {
  return (
    <Grid size={{ xs: 12 }}>
      <Typography variant="h3" align="center">
        Bases de Datos
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2, gap: 2, justifyContent: 'center' }}>
        {databases.map((database, index) => (
          <Grid key={index} size={{ xs: 6, sm: 3, md: 2 }}>
            <Card sx={{ p: 2, mb: 2, borderRadius: 0, boxShadow: "none", border: "none", backgroundColor: "transparent" }}>
              <Tecnologia icon={database.icon} nombre={database.nombre} />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};