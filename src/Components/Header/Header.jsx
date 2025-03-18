import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-expand navbar-expand-fixed-top mt-2 p-2">
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
                <Link
                  className="nav-link active text-light bg-primary rounded-pill mx-auto p-2"
                  aria-current="page"
                  to="/"
                >
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/proyectos">
                  Proyectos
                </Link>
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
