import './Proyectos.css';

export const Proyectos = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <h1 className="text-center text-light">Proyectos</h1>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="card">
                                        <img src="https://flcurrencyexchange.com/wp-content/uploads/2024/06/Best-time-to-exchange-currency_1.jpg" alt="Imagen del proyecto" className="card-img-top" />
                                            <div className="card-body">
                                                <h5 className="card-title">Conversor de Monedas</h5>
                                                <p className="card-text">Proyecto de cambio de monedas.</p>
                                                <a href="https://github.com/blackgoku-97/transformador_monedas" className="btn btn-primary" target='_blank'>Ver más</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card">
                                            <img src="https://digitek.cl/cdn/shop/articles/apple_book_iphone_digitek_blog_chile.jpg?v=1720448541&width=1600" alt="Imagen del proyecto" className="card-img-top" />
                                            <div className="card-body">
                                                <h5 className="card-title">Libreria</h5>
                                                <p className="card-text">Proyecto de libros y autores.</p>
                                                <a href="https://github.com/blackgoku-97/java-spring-libreria" className="btn btn-primary" target='_blank'>Ver más</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card">
                                            <img src="https://topicflower.com/blog/wp-content/uploads/2017/12/Portada-67.png" alt="Imagen del proyecto" className="card-img-top" />
                                            <div className="card-body">
                                                <h5 className="card-title">Foro API</h5>
                                                <p className="card-text">Proyecto de crud de topicos.</p>
                                                <a href="https://github.com/blackgoku-97/foroapi" className="btn btn-primary" target='_blank'>Ver más</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}