import React from 'react';
import './header.css'

const Header = () => {
  return (
    <header className='header'>
      <nav className='header_navbar'>
        <ul className='header_links'>
          <li className='header_link'>
            <a href="/">Курсы</a>
          </li>
          <li className='header_link'>
            <a href="/">Мастера</a>
          </li>
          <li className='header_link'>
            <a href="/">Контакты</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;






