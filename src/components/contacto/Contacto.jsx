import { Grid, Typography } from '@mui/material';
import { EmpleaOne, GitHub, LinkedIn } from './components';

export const Contacto = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ mt: 5, gap: 2, justifyContent: "center" }}
    >
      <Grid size={{ xs: 12 }}>
        <Typography variant="h3" align="center" sx={{ mt: 5 }}>
          ¡Contáctame!
        </Typography>
        <Typography variant="p" align="center" display={"block"} sx={{ mt: 2 }}>
          Puedes contactarme a través de los siguientes medios:
        </Typography>
      </Grid>
      <Grid
        size={{ xs: 12 }}
        container
        spacing={2}
        sx={{ mt: 5, gap: 2, justifyContent: "center" }}
      >
        <LinkedIn />
        <GitHub />
        <EmpleaOne />
      </Grid>
    </Grid>
  );
};
