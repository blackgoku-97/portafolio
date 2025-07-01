import { useState } from "react";
import { AppBar, Toolbar, Typography, Tabs, Tab, Box } from "@mui/material";
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="fixed" sx={{ boxShadow: 0, top: 0, left: 0, right: 0 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "center" }} >
            Mundo del Desarrollo Web
          </Typography>
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            textColor="inherit"
            TabIndicatorProps={{ style: { backgroundColor: "white" } }}
          >
            {enlaces.map((enlace, index) => (
              <Tab
                key={enlace.to}
                label={enlace.text}
                component={RouterLink}
                to={enlace.to}
                sx={{
                  color: "white",
                  "&.Mui-selected": {
                    color: "white",
                  },
                }}
              />
            ))}
          </Tabs>
        </Toolbar>
      </AppBar>
      <Box sx={{ height: 64 }} />
    </div>
  );
};