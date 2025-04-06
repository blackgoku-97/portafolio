import { Card, Grid, Typography } from '@mui/material';
import { Tecnologia } from './Tecnologia';

const frameworks = [
  { icon: 'react', nombre: 'React' },
  { icon: 'spring', nombre: 'Spring' },
];

export const Frameworks = () => {
  return (
    <Grid size={{ xs: 12 }}>
      <Typography variant="h3" align="center">
        Frameworks
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2, gap: 2, justifyContent: 'center' }}>
        {frameworks.map((framework, index) => (
          <Grid key={index} size={{ xs: 6, sm: 3, md: 2 }}>
            <Card sx={{ p: 2, mb: 2, borderRadius: 0, boxShadow: "none", border: "none", backgroundColor: "transparent" }}>
              <Tecnologia icon={framework.icon} nombre={framework.nombre} />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};