import { Grid, Typography, Paper } from '@mui/material';

export const Descripcion = () => {
    return (
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3, mb: 5 }}>
            <Typography variant="h3" align="center" sx={{ mb: 2 }}>
              Desarrollador Web Junior: Apasionado por la tecnología y el diseño
            </Typography>
            <Typography variant="body1" align="center" sx={{ mb: 5 }}>
              Desarrollador Web Junior apasionado por el desarrollo web. Con una
              sólida formación en ingeniería informática, me caracterizo por ser
              organizado, responsable y proactivo. Estoy ansioso por unirme a un
              equipo dinámico y desafiante donde pueda aplicar mis habilidades y
              continuar mi aprendizaje como profesional.
            </Typography>
          </Paper>
        </Grid>
    )
}