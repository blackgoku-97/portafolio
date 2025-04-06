import { Card, Grid, Stack, Typography } from '@mui/material';
import { Tecnologia } from './Tecnologia';

const tecnologias = [
  { icon: 'html', nombre: 'HTML 5' },
  { icon: 'css', nombre: 'CSS 3' },
  { icon: 'javascript', nombre: 'JavaScript' },
  { icon: 'java', nombre: 'Java' },
];

export const Lenguajes = () => {
  return (
    <Grid size={{ xs: 12 }}>
      <Typography variant="h3" align="center">
        Lenguajes
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
            {tecnologias.map((tecnologia, index) => (
              <Tecnologia key={index} icon={tecnologia.icon} nombre={tecnologia.nombre} />
            ))}
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};