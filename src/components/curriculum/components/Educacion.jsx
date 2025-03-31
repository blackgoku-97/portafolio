import {
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  Paper,
} from "@mui/material";

export const Educacion = () => {
  return (
    <Grid item xs={12} md={6}>
      <Paper elevation={3} sx={{ p: 3, mb: 5 }}>
        <Typography variant="h2" align="center" sx={{ mb: 2 }}>
          Educación
        </Typography>

        <List>
          <ListItem>
            <ListItemText
              primary="Técnico en Analista Programador"
              secondary={
                <Typography
                  variant="body2"
                  sx={{ fontSize: "14px", opacity: 1 }}
                >
                  Instituto Profesional y Centro de Formacion Técnica (INACAP)
                  (2017-2019)
                </Typography>
              }
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary="Ingenieria Informática"
              secondary={
                <Typography
                  variant="body2"
                  sx={{ fontSize: "14px", opacity: 1 }}
                >
                  Universidad Tecnológica de Chile (INACAP) (2020-2022)
                </Typography>
              }
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary="Programa de AlumniOne"
              secondary={
                <Typography
                  variant="body2"
                  sx={{ fontSize: "14px", opacity: 1 }}
                >
                  Alianza entre Oracle y Alura (One Next Education) (2024-2025)
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Paper>
    </Grid>
  );
};
