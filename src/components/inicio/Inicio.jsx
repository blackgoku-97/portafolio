import { Box, Typography } from '@mui/material';

export const Inicio = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center'
      }}>
        <Typography variant="h4" align="center" sx={{
          marginRight: { md: 20 },
          marginBottom: { xs: 20, md: 0 },
          fontSize: { xs: '1.5rem', md: '2.125rem' }
        }}>
          ¡Bienvenido a mi sitio web! 👋
        </Typography>
        <img src="assets/img/coding.png" alt="Imagen de bienvenida" style={{
          width: { xs: 200, md: 400 },
          height: { xs: 200, md: 400 },
          marginLeft: { md: 20 }
        }} />
      </Box>
    </Box>
  );
};