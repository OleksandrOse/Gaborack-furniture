import React, { useContext } from "react";
import { Banner } from "../../components/Banner/Banner";
import { ContactUs } from "../../components/ContactUs/ContactUs";
import { TouchContext } from "../../helpers/TouchProvider";

export const KitchenPage: React.FC = () => {
  const { isTouchOpen } = useContext(TouchContext);
  const imagesForBanner = [
    'images/Bathroom/1.jpg',
    'images/Bathroom/2.jpg',
    'images/Bathroom/3.jpg',
    'images/Bathroom/4.jpg',
    'images/Bathroom/5.jpg',
    'images/Bathroom/6.jpg',
    'images/Bathroom/7.jpg',
    'images/Bathroom/8.jpg',
    'images/Bathroom/9.jpg',
    'images/Bathroom/10.jpg',
  ];

  return (
    <div className='page'>
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
                  Bathroom Furniture
                </h2>
              </div>

              <div className="
          grid__item
          grid__item--tablet-1-6
          grid__item--dekstop-1-12"
              >
                <p className="dining__paragraf">
                  Creating the right bathroom furniture can help you pull together a clean and refreshing aesthetic in your home bathroom. A well-designed bathroom is both aesthetically pleasing and functional. We create a wide selection of bathroom furniture, including bathroom vanities, bathroom sets, bathroom shelves and bathroom accessories to help getting ready in the morning a little easier. Your bathroom is one of the most important rooms in your home, which is why we have a large collection of bathroom furniture design that meets every style need, from traditional to modern.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Banner  imagesForBanner={imagesForBanner}/>

        <ContactUs />
      </main>
    </div>
  );
};
