import { FC, useState } from 'react';
import classNames from 'classnames';

type Props = {
  activeBanner: number;
  image: string;
  index: number;
  moveLeft: () => void;
  startBanner: () => void;
};

export const ImageBanner: FC<Props> = ({
  activeBanner,
  image,
  index,
  moveLeft,
  startBanner,
}) => {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const minSwipeDistance = 10;

  const onTouchStart = (e: React.TouchEvent<HTMLImageElement>) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const onTouchMove = (e: React.TouchEvent<HTMLImageElement>) => setTouchEnd(e.targetTouches[0].clientX);
  
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      moveLeft();
    }
    if (isRightSwipe) {
      startBanner();
    }
  };

  return (
      <img
        src={image}
        alt={image}
        className={classNames(
          'banner__img',
          { 'banner__img--active': activeBanner === index },
        )}
        onTouchStart={(e) => onTouchStart(e)}
        onTouchMove={(e) => onTouchMove(e)}
        onTouchEnd={onTouchEnd}
      />
  );
};
