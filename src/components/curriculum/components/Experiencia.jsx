import { Stack, List, ListItem, ListItemText, Typography, Paper } from '@mui/material';

export const Experiencia = () => {
  return (
    <Paper sx={{ p: 2, mb: 2 }}>
      <Stack spacing={2}>
        <Typography variant="h2" align="center">
          Experiencia laboral
        </Typography>
        <Typography variant="h5" align='center'>Prácticas</Typography>
        <List>
          <ListItem>
            <ListItemText align="center" primary="Practica Empresa Himce (2019)" secondary={
              <Typography variant="body2" sx={{ fontSize: '14px', opacity: 1 }}>
                Desarrollo y diseño de pagina web con framework laravel
              </Typography>
            } />
          </ListItem>
          <ListItem>
            <ListItemText align="center" primary="Practica Empresa BETECH (2022)" secondary={
              <Typography variant="body2" sx={{ fontSize: '14px', opacity: 1 }}>
                Desarrollo y diseño de pagina web con framework laravel para un buen mantenimiento
              </Typography>
            } />
          </ListItem>
          <ListItem>
            <ListItemText align="center" primary="Desarrollador Web, Proyectos de AlumniOne (2024-2025)" secondary={
              <Typography variant="body2" sx={{ fontSize: '14px', opacity: 1 }}>
                Desarrollo de un Conversor de Monedas Utilizando Java y Exchange Rates API. 
                <p></p> 
                Creación de una libreria y autores Utilizando Java y Spring y PostgreSQL. 
                <p></p> 
                Desarrollo de un CRUD utilizando Java y Spring para un foro Utilizando Java, Spring, MySQL
              </Typography>
            } />
          </ListItem>
        </List>
        <Typography variant="h5" align='center'>Logros</Typography>
        <List>
          <ListItem>
            <ListItemText align="center" primary="Conocimientos adquiridos" secondary={
              <Typography variant="body2" sx={{ fontSize: '14px', opacity: 1 }}>
                Conociendo github, framework laravel y aprendiendo a usarlo
              </Typography>
            } />
          </ListItem>
          <ListItem>
            <ListItemText align="center" primary="Habilidad blanda" secondary={
              <Typography variant="body2" sx={{ fontSize: '14px', opacity: 1 }}>
                Conociendo en primer plano de la habilidad blanda: Trabajo en equipo
              </Typography>
            } />
          </ListItem>
        </List>
      </Stack>
    </Paper>
  );
};