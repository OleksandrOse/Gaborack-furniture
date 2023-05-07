import { Dispatch, FC, SetStateAction } from 'react';
import classNames from 'classnames';

type Props = {
  activeBanner: number;
  setActiveBanner: (activeBanner: number) => void;
  index: number;
  firstElem: number;
  setFirstElem: Dispatch<SetStateAction<number>>
};

export const ButtonBannerPagination: FC<Props> = ({
  activeBanner,
  setActiveBanner,
  index,
  firstElem,
  setFirstElem,
}) => {
  console.log(index);
  console.log(firstElem);
  if(index === firstElem + 5) {
    setFirstElem(prev => prev + 5);
  }
  return(
  <button
    type="button"
    aria-label="banner"
    className={classNames(
      'banner__pagination-item',
      { 'banner__pagination-item--active': activeBanner === index },
    )}
    onClick={() => setActiveBanner(index)}
  />
);
    };
