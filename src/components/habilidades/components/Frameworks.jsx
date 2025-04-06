// Frameworks.js
import { Card, Grid, Stack, Typography } from '@mui/material';
import Tecnologia from './Tecnologia';

const frameworks = [
  { icon: 'react', nombre: 'React' },
  { icon: 'spring', nombre: 'Spring' },
];

export const Frameworks = () => {
  return (
    <Grid container spacing={2} sx={{ mt: 2, gap: 2, justifyContent: 'center' }}>
      <Grid item xs={12}>
        <Typography variant="h5" align="center">
          Frameworks
        </Typography>
      </Grid>
      <Grid item xs={12}>
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
          {frameworks.map((framework, index) => (
            <Tecnologia key={index} icon={framework.icon} nombre={framework.nombre} />
          ))}
        </Card>
      </Grid>
    </Grid>
  );
};