import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';

export const Foro = () => {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardActionArea sx={{ height: '100%' }}>
          <CardMedia
            component="img"
            image="https://topicflower.com/blog/wp-content/uploads/2017/12/Portada-67.png"
            alt="Foro API"
            sx={{ height: '100%', objectFit: 'cover' }}
          />
          <CardContent sx={{ flexGrow: 1, padding: 2 }}>
            <Typography variant="h5" component="h2" sx={{ mb: 1 }}>
              Foro API
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" sx={{ mb: 2 }}>
              Proyecto de topicos de un foro.
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <a href="https://github.com/blackgoku-97/foroapi" target="_blank">
                Ver más
              </a>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};