import { Box } from '@mui/material';
import { Styles } from './Styles';

export const Imagen = ({ imagen }) => (
  <Box sx={Styles.imagen}>
    <img src={imagen} alt="img" className="img-fluid" />
  </Box>
);