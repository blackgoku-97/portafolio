import { useState } from 'react';
import { IconButton, AppBar, Toolbar, Typography, Button, Drawer, List, ListItemButton, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const enlaces = [
  { to: '/', text: 'Inicio' },
  { to: '/proyectos', text: 'Proyectos' },
  { to: '/habilidades', text: 'Habilidades' },
  { to: '/contacto', text: 'Contacto' },
  { to: '/curriculum', text: 'Perfil' },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const renderMenuItems = () => {
    return enlaces.map((enlace) => (
      <ListItemButton component={RouterLink} to={enlace.to} key={enlace.to}>
        {enlace.text}
      </ListItemButton>
    ));
  };

  return (
    <div>
      <AppBar position="fixed" sx={{ boxShadow: 0, top: 0, left: 0, right: 0 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            Mundo del Desarrollo Web
          </Typography>
          <Button onClick={handleDrawerToggle}>
            Menú
          </Button>
          <IconButton color="inherit" aria-label="open drawer" edge="end" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path d="M0 0h24v24H0V0z" fill="none"/>
              <path d="M3 18h18v-2H3v2zm0-8h18v-2H3v2zm0-8h18v-2H3v2z"/>
            </svg>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={handleDrawerToggle} sx={{ width: 250, backgroundColor: '#333' }}>
        <List sx={{ padding: 0, margin: 0 }}>
          {renderMenuItems()}
        </List>
      </Drawer>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
          Mundo del Desarrollo Web
        </Typography>
      </Box>
    </div>
  );
};