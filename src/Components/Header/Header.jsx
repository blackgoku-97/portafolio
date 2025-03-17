export const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-light bg-primary rounded-pill mx-auto p-2" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Proyectos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Habilidades</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}