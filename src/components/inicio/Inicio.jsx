import { Box, Typography } from '@mui/material';

export const Inicio = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h4" align="center" sx={{ marginRight: 20 }}>
          ¡Bienvenido a mi sitio web! 👋 
        </Typography>
        <img src="assets/img/coding.png" alt="Imagen de bienvenida" style={{ width: 400, height: 400, marginLeft: 20 }} />
      </Box>
    </Box>
  );
};