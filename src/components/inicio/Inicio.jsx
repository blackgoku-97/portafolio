import { Box, Typography } from '@mui/material';

export const Inicio = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', marginTop: { xs: 10, md: 0 } }}>
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'center', md: 'center' }
      }}>
        <Typography variant="h4" align="center" sx={{ marginBottom: { xs: 2, md: 0 }, marginRight: { md: 20 } }}>
          ¡Bienvenido a mi sitio web! 👋
        </Typography>
        <img src="assets/img/coding.png" alt="Imagen de bienvenida" style={{
          width: { xs: 250, md: 400 },
          height: { xs: 250, md: 400 },
          marginTop: { xs: 2, md: 0 }
        }} />
      </Box>
    </Box>
  );
};