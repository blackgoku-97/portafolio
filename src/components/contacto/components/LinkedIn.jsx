import { Grid, Typography, Card, Stack, Link } from "@mui/material";

export const LinkedIn = () => {
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
                href="https://www.linkedin.com/in/ricardo-perez-a31474229/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://skillicons.dev/icons?i=linkedin"
                  alt="LinkedIn"
                  width={64}
                  height={64}
                />
              </Link>
              <Typography variant="h6" sx={{ mt: 1, color: "white" }}>
                LinkedIn
              </Typography>
            </Stack>
          </Card>
        </Grid>
    )
}
