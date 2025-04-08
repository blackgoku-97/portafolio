import { Box } from '@mui/material';
import { Styles } from './Styles';

export const Header = ({ title, nombre }) => (
  <Box
    sx={{
      ...Styles.texto,
      width: "100%",
      "@media (max-width: 768px)": {
        flexDirection: "column",
        alignItems: "flex-start",
      },
    }}
  >
    <Box
      sx={{
        ...Styles.tituloNombre,
        "@media (max-width: 768px)": {
          flexDirection: "column",
          alignItems: "flex-start",
          marginLeft: 0,
        },
      }}
    >
      <Box
        sx={{ ...Styles.title, "@media (max-width: 768px)": { marginLeft: 0 } }}
      >
        {title}
      </Box>
      <Box
        sx={{
          ...Styles.nombre,
          "@media (max-width: 768px)": { marginLeft: 0 },
        }}
      >
        {nombre}
      </Box>
    </Box>
    <Box
      sx={{
        ...Styles.profesion,
        "@media (max-width: 768px)": { marginLeft: 0 },
      }}
      style={{ marginTop: 5 }}
    >
      Desarrollador web
    </Box>
  </Box>
);