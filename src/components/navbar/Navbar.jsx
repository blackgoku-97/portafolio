import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Box,
  useTheme,
  useMediaQuery
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const enlaces = [
  { to: "/", text: "Inicio" },
  { to: "/proyectos", text: "Proyectos" },
  { to: "/habilidades", text: "Habilidades" },
  { to: "/contacto", text: "Contacto" },
  { to: "/curriculum", text: "Perfil" },
];

export const Navbar = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const esMovil = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const alturaFija = 96; // fija para móvil y evita movimiento

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          height: { xs: `${alturaFija}px`, sm: "64px" },
          minHeight: "unset",
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            flexDirection: esMovil ? "column" : "row",
            alignItems: esMovil ? "flex-start" : "center",
            justifyContent: esMovil ? "flex-start" : "center",
            px: 2,
            py: 1,
            height: "100%",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              width: esMovil ? "100%" : "auto",
              textAlign: esMovil ? "left" : "center",
              mb: esMovil ? 2 : 0,
              lineHeight: 1
            }}
          >
            Mundo del Desarrollo Web
          </Typography>

          <Tabs
            value={value}
            onChange={handleChange}
            variant={esMovil ? "scrollable" : "standard"}
            scrollButtons={esMovil ? "auto" : false}
            centered={!esMovil}
            textColor="inherit"
            TabIndicatorProps={{ style: { backgroundColor: "white" } }}
            sx={{
              width: esMovil ? "100%" : "auto",
              overflowX: esMovil ? "auto" : "visible",
            }}
          >
            {enlaces.map((enlace) => (
              <Tab
                key={enlace.to}
                label={enlace.text}
                component={RouterLink}
                to={enlace.to}
                sx={{
                  color: "white",
                  "&.Mui-selected": { color: "white" },
                }}
              />
            ))}
          </Tabs>
        </Toolbar>
      </AppBar>

      {/* Espaciador del alto exacto para que NUNCA se mueva */}
      <Box sx={{ height: { xs: alturaFija, sm: 64 } }} />
    </>
  );
};