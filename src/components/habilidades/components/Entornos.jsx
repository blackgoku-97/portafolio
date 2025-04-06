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
        IDEs (Entornos de Desarrollo)
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2, gap: 2, justifyContent: 'center' }}>
        <Grid size={{ xs: 5 }}>
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
            {entornos.map((entorno, index) => (
              <Tecnologia key={index} icon={entorno.icon} nombre={entorno.nombre} />
            ))}
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};