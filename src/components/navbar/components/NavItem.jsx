import { NavLink } from 'react-router-dom';

export const NavItem = ({ path, label }) => (
  <li className="nav-item">
    <NavLink
      className={({ isActive }) =>
        `nav-link text-light ${
          isActive ? "active bg-primary rounded-pill mx-auto p-2" : ""
        }`
      }
      to={path}
    >
      {label}
    </NavLink>
  </li>
);
