import { Card, Grid, Typography } from '@mui/material';
import { Tecnologia } from './Tecnologia';

const sistemas = [
  { icon: 'windows', nombre: 'Windows' },
  { icon: 'linux', nombre: 'Linux' },
];

export const Sistemas = () => {
  return (
    <Grid size={{ xs: 12 }}>
      <Typography variant="h3" align="center">
        Sistemas Operativos
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2, gap: 2, justifyContent: 'center' }}>
        {sistemas.map((sistema, index) => (
          <Grid key={index} size={{ xs: 6, sm: 3, md: 2 }}>
            <Card sx={{ p: 2, mb: 2, borderRadius: 0, boxShadow: "none", border: "none", backgroundColor: "transparent" }}>
              <Tecnologia icon={sistema.icon} nombre={sistema.nombre} />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};