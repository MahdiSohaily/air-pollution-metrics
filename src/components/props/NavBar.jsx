/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink, Outlet } from 'react-router-dom';
import { useRef } from 'react';
import open from '../../imgs/open.png';
import close from '../../imgs/close.png';
import '../../styles/nav-banner.css';

function NavBar() {
  const openMenu = useRef();
  const closeMenu = useRef();
  const menu = useRef();

  const handleOpenMenu = () => {
    menu.current.style.width = '200px';
  };
  const handleCloseMenu = () => {
    menu.current.style.width = '0px';
  };
  return (
    <>
      <header className="bg-dodgerblue">
        <nav className="d-flex navBar">
          <div className="navBrand">
            <p className="text-neutral-100">Air Pollution Metrics</p>
          </div>
          <div>
            <a ref={openMenu} href="#" onClick={handleOpenMenu}>
              <img width={20} height={20} src={open} alt="menu" />
            </a>
          </div>
        </nav>
      </header>
      <div ref={menu} className="navMenu">
        <a href="#" ref={closeMenu} onClick={handleCloseMenu}>
          <img
            style={{ position: 'absolute', right: '1rem' }}
            width={15}
            height={15}
            src={close}
            alt="menu"
          />
        </a>
        <ul style={{ paddingTop: '1rem' }}>
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
        <button
          style={{
            position: 'absolute',
            bottom: '1rem',
            left: '1rem',
            width: '160px',
          }}
          className="action-button"
          type="button"
        >
          Sign-Up for free
        </button>
      </div>
      <Outlet />
    </>
  );
}

export default NavBar;
