import { NavLink } from 'react-router-dom';
import Logo from '../../imgs/logo.jpg';
import '../../styles/nav-banner.css';

function NavBar() {
  return (
    <header>
      <nav className="d-flex navBar">
        <div className="navBrand">
          <img
            width={50}
            height={50}
            className="logo"
            src={Logo}
            alt="Site logo"
          />
        </div>
        <div className="d-flex navMenu">
          <NavLink className="text-secondary-400" to="/">
            Home
          </NavLink>
          <NavLink className="text-secondary-400" to="/contact">
            Contact Us
          </NavLink>
          <button className="action-button" type="button">
            Sign-Up for free
          </button>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
