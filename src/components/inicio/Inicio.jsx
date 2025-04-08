import { Box } from "@mui/material";
import { Header, Imagen, Styles } from './components';

export const Inicio = () => {
  const datos = {
    title: "👋Hola, soy",
    nombre: "Ricardo",
    imagen: "assets/img/coding.png",
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={Styles.header}>
        <Header title={datos.title} nombre={datos.nombre} />
        <Imagen imagen={datos.imagen} />
      </Box>
    </Box>
  );
};
