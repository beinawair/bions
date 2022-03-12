import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 850) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            BIONS
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/videos' className='nav-links' onClick={closeMobileMenu}>
                Videos
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/articles'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Articles
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li>
                <a className='btn btn--outline nav-links-mobile' href="https://github.com" target='_blank' rel="noopener">
                  OUR CHANNEL
                </a>
            </li>
          </ul>
          {button && <a className='btn btn--outline' href="https://github.com" target='_blank' rel="noopener">OUR CHANNEL</a>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;