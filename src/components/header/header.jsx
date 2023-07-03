import React from 'react';
import './header.css'
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header className='header'>
      <nav className='header_navbar'>
        <ul className='header_links'>
          <li className='header_link'>
            <Link to='/'>Главная</Link>
          </li>
          <li className='header_link'>
            <Link to='/courses'>Все курсы</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;






