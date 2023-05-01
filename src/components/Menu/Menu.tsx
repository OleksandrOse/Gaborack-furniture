import { FC } from 'react';
import './Menu.scss';
import { Logo } from '../Logo/Logo';

export const Menu: FC = () => {
  return (
    <nav className="page__menu menu" id="menu">
      <div className="menu__container">
        <div className="menu__content">
          <div className="menu__top">
            <div>
            <Logo />
            <svg
                  width="40"
                  height="11"
                  viewBox="0 0 40 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="
          M22.535 5.13333V6.95918H25.1391C24.8099 7.76735 23.867 8.30612
          22.7595 8.30612C21.1731 8.30612 20.1405 7.16871 20.1405
          5.50748C20.1405 3.83129 21.1881 2.69388 22.7595 2.69388C23.8221
          2.69388 24.765 3.26258 25.1391 4.14558H28.1772C27.7282 1.72109
          25.4833 0 22.7296 0C19.5119 0 17.1772 2.31973 17.1772 5.50748C17.1772
          8.69524 19.5568 11 22.7595 11C26.0371 11 28.282 8.56054 28.282
          5.13333H22.535Z
        "
                    fill="#fff"
                  />
                </svg>
            </div>
          

              
          
            

            <a className="icon"></a>

            <a href="#" className="icon icon--vector"></a>
          </div>

          <ul className="menu__list">
            <li className="menu__item">
              <a href="#" className="menu__link">Home</a>
            </li>
            <li className="menu__item">
              <a href="#about-us" className="menu__link">About us</a>
            </li>

            <li className="menu__item">
              <a href="#contact-us" className="menu__link">Contacts</a>
            </li>
          </ul>

          <a
            href="tel: +1 647 773-62-73"
            className="menu__call menu__call--phone"
          >
            +1 647 773-62-73
          </a>

          <a
            href="tel: +1 234 555-55-55"
            className="menu__call menu__call--action"
          >
            book a trial consultation
          </a>
        </div>
      </div>
    </nav>
  );
};
