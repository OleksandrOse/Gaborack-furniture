import React, {
  useCallback,
  useEffect,
  useState,
} from 'react';
import { ImageBanner } from '../ImageBanner/ImageBanner';
import {
  ButtonBannerPagination,
} from '../ButtonBannerPagination/ButtonBannerPagination';
import { ArrowLeft } from '../ArrowLeft/ArrowLeft';
import { ArrowRight } from '../ArrowRight/ArrowRight';

import './Banner.scss';

export const Banner: React.FC = () => {
  const [activeBanner, setActiveBanner] = useState(0);
  const imagesForBanner = [
    'images/photos/25.jpg',
    'images/photos/17-6.jpg',
    'images/photos/21.jpg',
    'images/photos/23-6.jpg',
  ];

  const startBanner = useCallback(() => {
    if (activeBanner === 2) {
      setActiveBanner(0);
    } else {
      setActiveBanner(activeBanner + 1);
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
            onClick={() => startBanner()}
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
        <div className="banner__pagination">
          {imagesForBanner.map((image, index) => (
            <ButtonBannerPagination
              key={image}
              activeBanner={activeBanner}
              setActiveBanner={setActiveBanner}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
