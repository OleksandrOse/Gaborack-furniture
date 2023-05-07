import { FC, useContext } from 'react';
import './Footer.scss';
import { TouchContext } from '../../helpers/TouchProvider';

export const Footer: FC = () => {
  const { isTouchOpen } = useContext(TouchContext);

  return (
    <div hidden={isTouchOpen}>
      <footer
        className="footer"
      >
      </footer>
    </div>

  );
};
