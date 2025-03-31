import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";

export const Conversor = () => {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            image="https://flcurrencyexchange.com/wp-content/uploads/2024/06/Best-time-to-exchange-currency_1.jpg"
            alt="Conversor de Monedas"
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              Conversor de Monedas
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" sx={{ mb: 2 }}>
              Proyecto de cambio de monedas.
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <a
                href="https://github.com/blackgoku-97/transformador_monedas"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver más
              </a>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};