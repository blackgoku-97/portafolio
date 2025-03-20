import axios from 'axios';
import { useEffect, useState } from 'react';

export const Proyectos = () => {
    const [proyectos, setProyectos] = useState([]);
    const [imagenes, setImagenes] = useState([]);

    useEffect(() => {
        axios.get(`https://api.github.com/users/blackgoku-97/repos`)
            .then(response => {
                setProyectos(response.data);
                obtenerImagenes();
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const obtenerImagenes = () => {
        axios.get('https://picsum.photos/v2/list')
            .then(response => {
                setImagenes(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    };

    useEffect(() => {
        if (imagenes.length > 0 && proyectos.length > 0) {
            const imagenesCopia = [...imagenes];
            proyectos.forEach(proyecto => {
                const indiceAleatorio = Math.floor(Math.random() * imagenesCopia.length);
                proyecto.imagen = imagenesCopia.splice(indiceAleatorio, 1)[0];
            });
            setProyectos(proyectos);
        }
    }, [imagenes, proyectos]);

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-5">Proyectos</h1>
            <div className="row">
                {proyectos.map(proyecto => (
                    <div key={proyecto.id} className="col-md-4">
                        <div className="card mb-3">
                            <div className="card-header">
                                <h2 className="card-title text-light">{proyecto.name}</h2>
                            </div>
                            <div className="card-body">
                                {proyecto.imagen && (
                                    <img src={proyecto.imagen.download_url} alt="Imagen aleatoria" className="img-fluid mb-3" />
                                )}
                                <p className="card-text">{proyecto.description}</p>
                                <a href={proyecto.html_url} className="btn btn-primary">Ver en GitHub</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}