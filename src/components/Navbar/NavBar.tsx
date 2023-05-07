import { PageNavLink } from '../PageNavLink/PageNavLink';

import './Navbar.scss';

export const Navbar = () => {
  return (
    <nav
      className="nav"
      role="navigation"
      aria-label="main navigation"
      data-cy="categoryLinksContainer"
    >
      <ul className="nav__list">
        <PageNavLink to="/living-room" title="Living Room" />

        <PageNavLink to="/dining-room" title="Dining Room" />

        <PageNavLink to="/bedroom" title="Bedroom" />

        <PageNavLink to="/bathroom" title="Bathroom" />
      </ul>
    </nav>
  );
};
