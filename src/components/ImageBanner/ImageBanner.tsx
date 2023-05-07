import { FC, useState } from 'react';
import { Finger } from 'react-finger';
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

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent<HTMLImageElement>) => {
    setTouchEnd(0); // otherwise the swipe is fired even with usual touch events
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
    // add your conditional logic here
  };

  const FingerDiv = Finger('div');

  return (
    <FingerDiv
      // onTap={(e) => {
      //   moveLeft();
      //   console.log(e);
      // }}
      onSwipeRight={(e) => {
        console.log(e);
        moveLeft();
      }}
      onSwipeLeft={() => startBanner()}
    >
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
        // onTouchMove={() => moveLeft()}
      />
    </FingerDiv>
  );
};
