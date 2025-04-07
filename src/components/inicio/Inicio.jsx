import { Box } from "@mui/material";

const Styles = {
  header: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    "@media (max-width: 768px)": {
      justifyContent: "flex-start",
    },
  },
  texto: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    maxWidth: "80%",
    padding: 20,
    "@media (max-width: 768px)": {
      alignItems: "flex-start",
      paddingLeft: 0,
    },
  },
  tituloNombre: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "@media (max-width: 768px)": {
      flexWrap: "wrap",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      width: "100%",
      marginLeft: 0,
      marginBottom: 5,
    },
  },
  title: {
    fontSize: 24,
    "@media (max-width: 768px)": {
      fontSize: 18,
      whiteSpace: "nowrap",
      marginLeft: 10,
    },
  },
  nombre: {
    fontSize: 36,
    fontWeight: "bold",
    marginLeft: 1,
    "@media (max-width: 768px)": {
      fontSize: 24,
      marginLeft: 10,
      textAlign: "left",
    },
  },
  profesion: {
    fontSize: 24,
    color: "#fff",
    marginTop: 5,
    "@media (max-width: 768px)": {
      fontSize: 16,
      marginTop: 5,
    },
  },
  imagen: {
    width: "40%",
    maxWidth: 300,
    textAlign: "center",
    marginLeft: 20,
    "@media (max-width: 768px)": {
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
  <Box sx={{ ...Styles.texto, width: "100%", "@media (max-width: 768px)": { flexDirection: "column", alignItems: "flex-start" } }}>
    <Box sx={{ ...Styles.tituloNombre, "@media (max-width: 768px)": { flexDirection: "column" } }}>
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
