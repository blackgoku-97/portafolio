import { Box } from '@mui/material';

const Styles = {
  header: {
    width: "50%",
    height: "50vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    marginBottom: 20,
  },
  nombre: {
    fontSize: 48,
    marginBottom: 20,
    fontWeight: "bold",
    marginRight: 5,
  },
  imagen: {
    width: "40%",
    textAlign: "center",
    marginLeft: 10,
  },
};

const Imagen = ({ imagen }) => (
  <Box sx={Styles.imagen}>
    <img src={imagen} alt="img" className="img-fluid" />
  </Box>
);

const Header = ({ title, nombre }) => (
  <Box sx={Styles.header}>
    <Box sx={Styles.title}>{title}</Box>
    <Box sx={Styles.nombre}>{nombre}</Box>
  </Box>
);

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