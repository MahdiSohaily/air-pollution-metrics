import { NavLink, Outlet } from 'react-router-dom';
import Logo from '../../imgs/logo.jpg';
import '../../styles/nav-banner.css';

function NavBar() {
  return (
    <>
      <header className="bg-dodgerblue">
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
          <div className="navMenu">
            <ul>
              <li className="nav-link">
                <NavLink className="text-neutral-100" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink className="text-neutral-100" to="/contact">
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <button className="action-button" type="button">
              Sign-Up for free
            </button>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default NavBar;
