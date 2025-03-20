import { Navigate, Route, Routes } from 'react-router-dom';
import { Curriculum, Contacto, Habilidades, Inicio, Navbar, Proyectos } from './components';

export const App = () => {

    return (
        <>
            <Navbar />
            
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/proyectos" element={<Proyectos />} />
                <Route path="/habilidades" element={<Habilidades />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/curriculum" element={<Curriculum />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>   
    )
}