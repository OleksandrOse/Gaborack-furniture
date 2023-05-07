import { FC, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Header.scss';
import { Logo } from '../Logo/Logo';
import { MenuContext } from '../../helpers/MenuProvider';
import { Navbar } from '../Navbar/NavBar';
import classNames from 'classnames';
import { Breadcrumbs } from '../BreadCrumbs/BreadCrumbs';
import { TouchContext } from '../../helpers/TouchProvider';

export const Header: FC = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);
  const { isTouchOpen } = useContext(TouchContext);
  const { pathname } = useLocation();
  const path = pathname.slice(1);
  const title = path === '' ? 'furniture' : path.split('-').join(' ');

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('page--with-menu');
    } else {
      document.body.classList.remove('page--with-menu');
    }
  }, [isMenuOpen]);

  return (
    <header
      className={classNames(
        "header",
        { 'header--kitchen': path === 'dining-room' },
        { 'header--living': path === 'living-room' },
        { 'header--bedroom': path === 'bedroom' },
        { 'header--bathroom': path === 'bathroom' },
      )}
      hidden={isTouchOpen}
    >
      <div className="header__container">
        <div className="header__content">
          <div className="header__top">
            <div className="header__top-container">
              <div className='header__top-content'>
                <Logo />
                <div className="header__navbar">
                  <Navbar />
                </div>
              </div>

              <a href="tel: +1 647 773-62-73" className="icon icon--phone">
                <div className="icon__tooltip">+1 647 773-62-73</div>
              </a>

              <a
                className="icon icon--menu"
                onClick={() => setIsMenuOpen(prev => !prev)}
              ></a>
            </div>
            {path !== '' && <Breadcrumbs />}
          </div>
          

          <h1 className="header__title">
            Your exclusive {title}
          </h1>
        </div>
      </div>
    </header>
  );
};
