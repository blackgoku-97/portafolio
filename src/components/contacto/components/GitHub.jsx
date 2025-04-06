import { Grid, Typography, Card, Stack, Link } from '@mui/material';

export const GitHub = () => {
    return (
        <Grid size={{ xs: 4, sm: 2, md: 1 }}>
          <Card
            sx={{
              p: 2,
              mb: 2,
              borderRadius: 0,
              boxShadow: "none",
              border: "none",
              backgroundColor: "transparent",
            }}
          >
            <Stack alignItems="center">
              <Link
                href="https://github.com/blackgoku-97"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://skillicons.dev/icons?i=github"
                  alt="GitHub"
                  width={64}
                  height={64}
                />
              </Link>
              <Typography variant="h6" sx={{ mt: 1, color: "white" }}>
                GitHub
              </Typography>
            </Stack>
          </Card>
        </Grid>
    )
}