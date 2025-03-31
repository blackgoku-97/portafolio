import { Box } from '@mui/material';

export const Inicio = () => {

  const title = "👋Hola, soy";
  const nombre = "Ricardo";
  const imagen = "assets/img/coding.png";

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "50%",
          height: "50vh",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "40%",
            textAlign: "center",
            marginRight: 10
          }}
        >
          <h1 style={{ fontSize: 36, marginBottom: 20 }}>{title}</h1>
          <h2 style={{ fontSize: 48, marginBottom: 20 }}>{nombre}</h2>
          <h3 style={{ fontSize: 24, marginBottom: 20 }}>Desarrollador Web</h3>
        </Box>
        <Box
          sx={{
            width: "40%",
            textAlign: "center",
            marginLeft: 10
          }}
        >
          <img src={imagen} alt="img" className="img-fluid" />
        </Box>
      </Box>
    </Box>
  );
};