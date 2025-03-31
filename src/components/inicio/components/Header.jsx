import { Box } from '@mui/material';
import { Styles } from './Styles';

export const Header = ({ title, nombre }) => (
  <Box sx={Styles.header}>
    <Box sx={Styles.title}>{title}</Box>
    <Box sx={Styles.nombre}>{nombre}</Box>
  </Box>
);
