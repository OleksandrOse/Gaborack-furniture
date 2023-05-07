import React, {
  useCallback,
  useEffect,
  useState,
  useContext,
} from 'react';

import { ImageBanner } from '../ImageBanner/ImageBanner';
import { ArrowLeft } from '../ArrowLeft/ArrowLeft';
import { ArrowRight } from '../ArrowRight/ArrowRight';

import './Banner.scss';
import classNames from 'classnames';
import { TouchContext } from '../../helpers/TouchProvider';

type Props = {
  imagesForBanner: string[];
};

export const Banner: React.FC<Props> = ({ imagesForBanner }) => {
  const [activeBanner, setActiveBanner] = useState(0);
  // const [isTouchOpen, setIsTouchOpen] = useState(false);
  const { isTouchOpen, setIsTouchOpen } = useContext(TouchContext);

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

  useEffect(() => {
    if (isTouchOpen) {
      document.body.classList.add('page--with-menu');
    } else {
      document.body.classList.remove('page--with-menu');
    }
  }, [isTouchOpen]);

  return (
    <section className="page__section">
      <div className="banner">
        <div className="banner__content">


          <div
            className={classNames(
              "banner__image",
              { 'banner__image--full': isTouchOpen }
            )}
          >
            <button
              type="button"
              className="banner__button banner__button--left"
              onClick={() => moveLeft()}
            >
              <ArrowLeft />
            </button>

            {imagesForBanner.map((image, index) => (
              <ImageBanner
                key={image}
                activeBanner={activeBanner}
                image={image}
                index={index}
                moveLeft={moveLeft}
                startBanner={startBanner}
              />
            ))}

            <span
              className='banner__resize'
              onClick={() => setIsTouchOpen(prev => !prev)}
            >
              Click to change size
            </span>

            <button
              type="button"
              className="banner__button banner__button--right"
              onClick={() => startBanner()}
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
