import { useContext } from 'react';
import { Banner } from "../../components/Banner/Banner";
import { ContactUs } from "../../components/ContactUs/ContactUs";
import { TouchContext } from '../../helpers/TouchProvider';
import classNames from 'classnames';

export const BedRoomPage = () => {
  const { isTouchOpen } = useContext(TouchContext);
  const imagesForBanner = [
    'images/Bedroom/1.jpg',
  ];

  return (
    <div
      className={classNames(
        "page__main",
        { "page__main--touch": isTouchOpen },
      )}
    >
      <main className="page__main">
        <section
          className="page__section about"
          id="about-us"
          hidden={isTouchOpen}
        >
          <div className="dining__container">
            <div className="grid grid--tablet grid--dekstop">
              <div className="
          grid__item
          grid__item--tablet-1-6
          grid__item--dekstop-1-12"
              >
                <h2 className="dining__title">
                  Bedroom Furniture
                </h2>
              </div>

              <div className="
          grid__item
          grid__item--tablet-1-6
          grid__item--dekstop-1-12"
              >
                <p className="dining__paragraf">
                  You spend one third of your life sleeping, so why not transform your bedroom into your sleep sanctuary – a calming and comforting place to unwind and recharge at the end of the day. Choosing bedroom furniture that is comfortable, functional and aesthetically pleasing is key to achieving this tranquil feel.
                </p>

                <p className="dining__paragraf">
                  Turn your dream bedroom into reality with Gaborack – Canada&apos;s leading source for high-end bedroom furniture online. Discover an extensive collection of luxury bedroom furniture to suit your personal style, including beds, headboards, bed frames, dressers, nightstands and more.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Banner imagesForBanner={imagesForBanner}/>

        <section
          className="page__section about"
          id="about-us"
          hidden={isTouchOpen}
        >
          <div className="dining__container">
            <div className="grid grid--tablet grid--dekstop">
              <div className="
          grid__item
          grid__item--tablet-1-6
          grid__item--dekstop-1-12"
              >
                <p className="dining__paragraf">
                  Turn your dream bedroom into reality with Gaborack – Canada&apos;s leading source for high-end bedroom furniture online. Discover an extensive collection of luxury bedroom furniture to suit your personal style, including beds, headboards, bed frames, dressers, nightstands and more.
                </p>
              </div>
            </div>
          </div>
        </section>

        

        <ContactUs />
      </main>
    </div>
  );
};
