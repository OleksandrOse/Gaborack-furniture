import { FC } from 'react';
import { Finger } from 'react-finger';
import classNames from 'classnames';

type Props = {
  activeBanner: number;
  image: string;
  index: number;
  moveLeft: () => void;
};

export const ImageBanner: FC<Props> = ({
  activeBanner,
  image,
  index,
  moveLeft,
}) => {
  const FingerDiv = Finger('div');

  return (
    <FingerDiv
      onTap={(e) => {
        moveLeft();
        console.log(e);
      }}
      onSwipeRight={(e) => {
        console.log(e);
        moveLeft();
      }}
    >
      <img
        src={image}
        alt={image}
        className={classNames(
          'banner__img',
          { 'banner__img--active': activeBanner === index },
        )}
      />
    </FingerDiv>
  );
};
