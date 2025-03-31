import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';

export const Libreria = () => {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            image="https://digitek.cl/cdn/shop/articles/apple_book_iphone_digitek_blog_chile.jpg?v=1720448541&width=1600"
            alt="Libreria"
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              Libreria
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Proyecto de libros y autores.
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <a
                href="https://github.com/blackgoku-97/libreria"
                target="_blank"
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
