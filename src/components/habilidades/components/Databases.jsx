import { Card, Grid, Typography } from '@mui/material';
import { Tecnologia } from './Tecnologia';

const databases = [
  { icon: 'mysql', nombre: 'MySQL' },
  { icon: 'postgresql', nombre: 'PostgreSQL' },
];

export const Databases = () => {
  return (
    <Grid size={{ xs: 12 }}>
      <Typography variant="h3" align="center">
        Bases de Datos
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2, gap: 2, justifyContent: 'center' }}>
        <Grid size={{ xs: 4 }}>
          <Card
            sx={{
              p: 2,
              mb: 2,
              borderRadius: 0,
              boxShadow: "none",
              border: "none",
              backgroundColor: "transparent",
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {databases.map((database, index) => (
              <Tecnologia key={index} icon={database.icon} nombre={database.nombre} />
            ))}
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};