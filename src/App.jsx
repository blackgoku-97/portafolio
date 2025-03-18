import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Inicio } from './Components/Inicio/Inicio';
import { Proyectos } from './Components/Projects/Proyectos';

function App() {

    return (
        <>
            <Header />
            
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/proyectos" element={<Proyectos />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>   
    )
}

export default App