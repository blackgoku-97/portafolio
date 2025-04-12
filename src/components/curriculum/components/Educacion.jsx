import { Divider, Stack, List, ListItem, ListItemText, Typography, Paper } from "@mui/material";

export const Educacion = () => {
  return (
    <Paper elevation={3} sx={{ p: 3, mb: 5 }}>
      <Stack spacing={2}>
        <Typography variant="h2" align="center">
          Educación
        </Typography>
        <List>
          <ListItem>
            <ListItemText align="center" primary="Técnico en Analista Programador" secondary={
              <Typography variant="body2" sx={{ fontSize: "14px", opacity: 1 }}>
                Instituto Profesional y Centro de Formacion Técnica (INACAP) (2017-2019)
              </Typography>
            } />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText align="center" primary="Ingenieria Informática" secondary={
              <Typography variant="body2" sx={{ fontSize: "14px", opacity: 1 }}>
                Universidad Tecnológica de Chile (INACAP) (2020-2022)
              </Typography>
            } />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText align="center" primary="Programa de AlumniOne" secondary={
              <Typography variant="body2" sx={{ fontSize: "14px", opacity: 1 }}>
                Alianza entre Oracle y Alura (One Next Education) (2024-2025)
              </Typography>
            } />
          </ListItem>
        </List>
      </Stack>
    </Paper>
  );
};
