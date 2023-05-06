import { FC, useContext } from 'react';
import './Menu.scss';
import { Logo } from '../Logo/Logo';
import { MenuContext } from '../../helpers/MenuProvider';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

export const Menu: FC = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);

  const handleClickScrollContact = () => {
    setIsMenuOpen(prev => !prev);
    const element = document.getElementById('contact-us');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClickScroll = () => {
    setIsMenuOpen(prev => !prev);
    const element = document.getElementById('about-us');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={
      classNames(
        "page__menu menu",
        { 'menu--visible': isMenuOpen },
      )}
      id="menu"
    >
      <div className="menu__container">
        <div className="menu__content">
          <div className="menu__top">
            <div>
              <Logo />
            </div>

            <a className="icon"></a>

            <a
              className="icon icon--vector"
              onClick={() => setIsMenuOpen(prev => !prev)}
            ></a>
          </div>

          <ul className="menu__list">
            <li className="menu__item">
              <NavLink
                aria-current="page"
                className="menu__link"
                to="/"
                onClick={() => setIsMenuOpen(prev => !prev)}
              >
                Home
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink
                aria-current="page"
                className="menu__link"
                to="/living-room"
                onClick={() => setIsMenuOpen(prev => !prev)}
              >
                Living Room
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink
                aria-current="page"
                className="menu__link"
                to="/dining-room"
                onClick={() => setIsMenuOpen(prev => !prev)}
              >
                Dining Room
              </NavLink>
            </li>

            <li className="menu__item">
              <NavLink
                aria-current="page"
                className="menu__link"
                to="/bedroom"
                onClick={() => setIsMenuOpen(prev => !prev)}
              >
                Bedroom
              </NavLink>
            </li>

            <li className="menu__item">
              <NavLink
                aria-current="page"
                className="menu__link"
                to="/bathroom"
                onClick={() => setIsMenuOpen(prev => !prev)}
              >
                Bathroom
              </NavLink>
            </li>

            <li className="menu__item">
              <NavLink
                aria-current="page"
                className="menu__link"
                to="/"
                onClick={handleClickScroll}
              >
                About us
              </NavLink>
            </li>

            <li className="menu__item">
              <a
                className="menu__link"
                onClick={handleClickScrollContact}
              >
                Contacts
              </a>
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
