import { NavLink } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {

  const navItems = [
    { to: '/', text: 'Inicio' },
    { to: '/proyectos', text: 'Proyectos' },
    { to: '/habilidades', text: 'Habilidades' },
    { to: '/contacto', text: 'Contacto' },
    { to: '/curriculum', text: 'Perfil profesional' },
  ];

  return (
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
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link text-light ${isActive ? 'active bg-primary rounded-pill mx-auto p-2' : ''}`}
                  to={item.to}
                >
                  {item.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};