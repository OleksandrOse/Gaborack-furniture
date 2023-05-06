import React from 'react';
import { NavLink } from 'react-router-dom';
import './Logo.scss';

export const Logo: React.FC = () => {
  return (
    <NavLink
    aria-current="page"
    className="logo__link"
    to="/"
  >
    <span className="logo">
      <span className='logo__title'>
        Gaborack
      </span>
      <span className='logo__content'>
        Development
      </span>

    </span>
    </NavLink>
  );
};
