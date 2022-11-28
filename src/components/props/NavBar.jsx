import { NavLink } from 'react-router-dom';
import Logo from '../../imgs/logo.jpg';
import '../../styles/nav-banner.css';

function NavBar() {
  return (
    <header>
      <nav className="navBar d-flex wrapper">
        <div className="navBrand d-flex">
          <img
            width={50}
            height={50}
            className="logo"
            src={Logo}
            alt="Site logo"
          />
        </div>
        <ul className="menuNav d-flex">
          <li className="nav-link">
            <NavLink className="text-secondary-400" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink className="text-secondary-400" to="/contact">
              Contact Us
            </NavLink>
          </li>
          <li className="nav-link">
            <button className="action-button free" type="button">
              Sign-Up for free
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
