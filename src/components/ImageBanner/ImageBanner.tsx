import { FC } from 'react';
import classNames from 'classnames';

type Props = {
  activeBanner: number;
  image: string;
  index: number;
};

export const ImageBanner: FC<Props> = ({ activeBanner, image, index }) => {
  // eslint-disable-next-line no-console
  console.log(image);

  return (
    <img
      src="images/photos/25.jpg"
      alt={image}
      className={classNames(
        'banner__img',
        { 'banner__img--active': activeBanner === index },
      )}
    />
  );
};
