import { Navigate, Route, Routes } from 'react-router-dom';
import { Contacto, Habiilidades, Inicio, Navbar, Proyectos } from './components';

export const App = () => {

    return (
        <>
            <Navbar />
            
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/proyectos" element={<Proyectos />} />
                <Route path="/habilidades" element={<Habiilidades />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>   
    )
}