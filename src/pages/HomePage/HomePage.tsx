import React from 'react';
import { Main } from '../../components/Main/Main';

export const HomePage: React.FC = () => {

  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#menu') {
      document.body.classList.add('page--with-menu');
    } else {
      document.body.classList.remove('page--with-menu');
    }
  });
  
  return (
    <div className='page'>
      <Main />
    </div>
  );
};
