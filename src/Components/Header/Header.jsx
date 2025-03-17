export const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm fixed-top mt-2 p-2 position-relative bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-light bg-primary rounded-pill mx-auto p-2"
                  aria-current="page"
                  href="#"
                >
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Proyectos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Habilidades
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
