import { FC, Dispatch, SetStateAction } from 'react';
import { Finger } from 'react-finger';
import classNames from 'classnames';

type Props = {
  activeBanner: number;
  image: string;
  index: number;
  setActiveBanner: Dispatch<SetStateAction<number>>
};

export const ImageBanner: FC<Props> = ({ activeBanner, image, index, setActiveBanner }) => {
  // const events = createFingerEvents({
  //   onSwipeLeft: event => {
  //     setActiveBanner(prev => prev + 1);
  //     console.log('onSwipeLeft',event);
  //   },
  // });
const FingerDiv = Finger('div');
  return (
    <FingerDiv
      onTap={(e) => {
        console.log(e);
      }}
      onSwipeRight={() => setActiveBanner(prev => prev + 1)}
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
