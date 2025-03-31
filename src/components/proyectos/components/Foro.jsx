import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';

export const Foro = () => {
    return (
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                image="https://topicflower.com/blog/wp-content/uploads/2017/12/Portada-67.png"
                alt="Foro API"
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Foro API
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
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
    )
}