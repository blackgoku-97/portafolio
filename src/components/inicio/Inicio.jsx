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
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    maxWidth: "80%",
    padding: 20,
  },
  tituloNombre: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    '@media (max-width: 768px)': {
      fontSize: 18,
      whiteSpace: "nowrap",
      marginLeft: 10,
    },
  },
  nombre: {
    fontSize: 36,
    fontWeight: "bold",
    marginLeft: 1,
    '@media (max-width: 768px)': {
      fontSize: 24,
      marginLeft: 20,
    },
  },
  profesion: {
    fontSize: 24,
    color: "#fff",
    marginTop: 5,
    '@media (max-width: 768px)': {
      fontSize: 16
    },
  },
  imagen: {
    width: "40%",
    maxWidth: 300,
    textAlign: "center",
    marginLeft: 30,
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
    <Box sx={Styles.profesion} style={{ marginTop: 5 }}>Desarrollador web</Box>
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
}