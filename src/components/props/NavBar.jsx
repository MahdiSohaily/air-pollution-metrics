import { NavLink, Outlet } from 'react-router-dom';
import open from '../../imgs/open.png';
import close from '../../imgs/close.png';
import '../../styles/nav-banner.css';

function NavBar() {
  return (
    <>
      <header className="bg-dodgerblue">
        <nav className="d-flex navBar">
          <div className="navBrand">
            <p className="text-neutral-100">Air Pollution Metrics</p>
          </div>
          <div>
            <img width={20} height={20} src={open} alt="menu" />
          </div>
        </nav>
      </header>
      <div className="navMenu">
        <img
          style={{ position: 'absolute', right: '1rem' }}
          width={15}
          height={15}
          src={close}
          alt="menu"
        />
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
      <Outlet />
    </>
  );
}

export default NavBar;
