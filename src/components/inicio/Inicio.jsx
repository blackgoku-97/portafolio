import { Box } from '@mui/material';

const Styles = {
  header: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  texto: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    marginRight: 30,
  },
  tituloNombre: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexWrap: "nowrap",
    gap: 10,
  },
  title: {
    fontSize: 24,
    marginRight: 1,
    '@media (max-width: 768px)': {
      fontSize: 20,
      whiteSpace: "nowrap",
      marginLeft: 10,
    },
  },
  nombre: {
    fontSize: 36,
    fontWeight: "bold",
    '@media (max-width: 768px)': {
      fontSize: 28,
      marginLeft: 20,
    },
  },
  imagen: {
    width: "40%",
    maxWidth: 300,
    textAlign: "center",
    '@media (max-width: 768px)': {
      width: "60%",
    },
  },
};

const Imagen = ({ imagen }) => (
  <Box sx={Styles.imagen}>
    <img src={imagen} alt="img" className="img-fluid" />
  </Box>
);

const Header = ({ title, nombre }) => (
  <Box sx={Styles.texto}>
    <Box sx={Styles.tituloNombre}>
      <Box sx={Styles.title}>{title}</Box>
      <Box sx={Styles.nombre}>{nombre}</Box>
    </Box>
  </Box>
);

export const Inicio = () => {
  const datos = {
    title: "👋Hola, soy",
    nombre: "Ricardo",
    imagen: "assets/img/coding.png",
  };

  return (
    <Box sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Box sx={Styles.header}>
        <Header title={datos.title} nombre={datos.nombre} />
        <Imagen imagen={datos.imagen} />
      </Box>
    </Box>
  );
};