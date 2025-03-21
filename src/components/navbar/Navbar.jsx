import { NavLink } from 'react-router-dom';

export const Navbar = () => {
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
            <NavLink to="/" className="navbar-brand text-light">
              Mi Portafolio
            </NavLink>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link text-light ${isActive ? 'active bg-primary rounded-pill mx-auto p-2' : ''}`}
                  aria-current="page"
                  to="/"
                >
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link text-light ${isActive ? 'active bg-primary rounded-pill mx-auto p-2' : ''}`}
                  to="/proyectos"
                >
                  Proyectos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link text-light ${isActive ? 'active bg-primary rounded-pill mx-auto p-2' : ''}`}
                  to="/habilidades"
                >
                  Habilidades
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link text-light ${isActive ? 'active bg-primary rounded-pill mx-auto p-2' : ''}`}
                  to="/contacto"
                >
                  Contacto
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link text-light ${isActive ? 'active bg-primary rounded-pill mx-auto p-2' : ''}`}
                  to="/curriculum"
                >
                  Perfil profesional
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};