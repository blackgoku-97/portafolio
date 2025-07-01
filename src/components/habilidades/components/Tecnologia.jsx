import { Stack, Typography } from '@mui/material';

export const Tecnologia = ({ icon, nombre }) => {
  return (
    <Stack alignItems="center">
      <img src={`https://skillicons.dev/icons?i=${icon}`} alt={nombre} />
      <Typography variant="h6" sx={{ mt: 1, color: "white" }}>
        {nombre}
      </Typography>
    </Stack>
  );
};