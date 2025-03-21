import { NavLink } from 'react-router-dom';
import { NavItem } from './NavItem';
import { NavItems } from './NavItems';
import { NavbarToggler } from './NavbarToggler';
import './Navbar.css';

export const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-expand navbar-expand-fixed-top mt-2 p-2">
    <div className="container-fluid">
      <NavbarToggler />
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <NavLink to="/" className="navbar-brand text-light">
          Mi Portafolio
        </NavLink>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          {NavItems.map((item, index) => (
            <NavItem key={index} path={item.path} label={item.label} />
          ))}
        </ul>
      </div>
    </div>
  </nav>
);