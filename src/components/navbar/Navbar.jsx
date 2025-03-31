import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Drawer, List, ListItem, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const Navbar = () => {

  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mi Portafolio
          </Typography>
          <Button onClick={handleDrawerToggle}>
            Menú
          </Button>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path d="M0 0h24v24H0V0z" fill="none"/>
              <path d="M3 18h18v-2H3v2zm0-8h18v-2H3v2zm0-8h18v-2H3v2z"/>
            </svg>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={open}
        onClose={handleDrawerToggle}
        sx={{ width: 250 }}
      >
        <List>
          <ListItem component={RouterLink} to="/">
            Inicio
          </ListItem>
          <ListItem component={RouterLink} to="/proyectos">
            Proyectos
          </ListItem>
          <ListItem component={RouterLink} to="/habilidades">
            Habilidades
          </ListItem>
          <ListItem component={RouterLink} to="/contacto">
            Contacto
          </ListItem>
          <ListItem component={RouterLink} to="/curriculum">
            Perfil
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};