import React, {
  useCallback,
  useEffect,
  useState,
} from 'react';

import { ImageBanner } from '../ImageBanner/ImageBanner';
// import {
//   ButtonBannerPagination,
// } from '../ButtonBannerPagination/ButtonBannerPagination';
import { ArrowLeft } from '../ArrowLeft/ArrowLeft';
import { ArrowRight } from '../ArrowRight/ArrowRight';

import './Banner.scss';

type Props = {
  imagesForBanner: string[];
};

export const Banner: React.FC<Props> = ({ imagesForBanner }) => {
  const [activeBanner, setActiveBanner] = useState(0);
  //const [firstElem, setFirstElem] = useState(0);

  // const visibleButtons = useMemo(() => {
  //   return imagesForBanner.slice(firstElem, firstElem + 5);
  // }, [firstElem]);
  

  const startBanner = useCallback(() => {
    if (activeBanner === imagesForBanner.length - 1) {
      setActiveBanner(0);
    } else {
      setActiveBanner(prev => prev + 1);
    }
  }, [activeBanner]);

  const moveLeft = useCallback(() => {
    if (activeBanner === 0) {
      console.log(activeBanner);
      setActiveBanner(prev => {
        prev = imagesForBanner.length - 1;
        return prev;
      });
    } else {
      console.log(2);
      setActiveBanner(prev => prev - 1);
    }
  }, [activeBanner]);
 
  useEffect(() => {
    const timerId = setInterval(() => {
      startBanner();
    }, 5000);

    return () => {
      clearInterval(timerId);
    };
  }, [activeBanner, startBanner]);

  return (
    <section className="page__section">
      <div className="banner">
        <div className="banner__content">
          <button
            type="button"
            className="banner__button banner__button--left"
            onClick={() => moveLeft()}
          >
            <ArrowLeft />
          </button>

          <div className="banner__image">
            {imagesForBanner.map((image, index) => (
              <ImageBanner
                key={image}
                activeBanner={activeBanner}
                image={image}
                index={index}
                moveLeft={moveLeft}
              />
            ))}
          </div>

          <button
            type="button"
            className="banner__button banner__button--right"
            onClick={() => startBanner()}
          >
            <ArrowRight />
          </button>
        </div>
        {/* <div className="banner__pagination">
          {visibleButtons.map((image, index) => (
            <ButtonBannerPagination
              key={image}
              activeBanner={activeBanner}
              setActiveBanner={setActiveBanner}
              index={index}
              firstElem={firstElem}
              setFirstElem={setFirstElem}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};
