import { Container, Stack } from "@mui/material";
import { Descripcion, Educacion, Experiencia } from "./components";

export const Curriculum = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Stack spacing={2}>
        <Descripcion />
        <Educacion />
        <Experiencia />
      </Stack>
    </Container>
  );
};