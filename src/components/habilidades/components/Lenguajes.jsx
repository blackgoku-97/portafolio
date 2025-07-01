import { Card, Grid, Typography } from '@mui/material';
import { Tecnologia } from './Tecnologia';

const tecnologias = [
  { icon: 'html', nombre: 'HTML 5' },
  { icon: 'css', nombre: 'CSS 3' },
  { icon: 'javascript', nombre: 'JavaScript' },
  { icon: 'java', nombre: 'Java' },
  { icon: 'typescript', nombre: 'TypeScript' },
];

export const Lenguajes = () => {
  return (
    <Grid size={{ xs: 12 }}>
      <Typography variant="h3" align="center">
        Lenguajes
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2, gap: 2, justifyContent: 'center' }}>
        {tecnologias.map((tecnologia, index) => (
          <Grid key={index} size={{ xs: 6, sm: 3, md: 2 }}>
            <Card sx={{ p: 2, mb: 2, borderRadius: 0, boxShadow: "none", border: "none", backgroundColor: "transparent" }}>
              <Tecnologia icon={tecnologia.icon} nombre={tecnologia.nombre} />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};