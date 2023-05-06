import { Banner } from "../../components/Banner/Banner";
import { ContactUs } from "../../components/ContactUs/ContactUs";

export const LivingRoomPage = () => {
  const imagesForBanner = [
    'images/Living-room/1.jpg',
    'images/Living-room/2.jpg',
    'images/Living-room/3.jpg',
    'images/Living-room/4.jpg',
    'images/Living-room/5.jpg',
    'images/Living-room/6.jpg',
    'images/Living-room/7.jpg',
    'images/Living-room/8.jpg',
    'images/Living-room/9.jpg',
    'images/Living-room/10.jpg',
    'images/Living-room/11.jpg',
    'images/Living-room/12.jpg'
  ];

  return (
    <div className='page'>
      <main className="page__main">
        <section className="page__section about" id="about-us">
          <div className="dining__container">
            <div className="grid grid--tablet grid--dekstop">
              <div className="
            grid__item
            grid__item--tablet-1-6
            grid__item--dekstop-1-12"
              >
                <h2 className="dining__title">
                  Living Room Furniture
                </h2>
              </div>

              <div className="
            grid__item
            grid__item--tablet-1-6
            grid__item--dekstop-1-12"
              >
                <p className="dining__paragraf">
                Looking to upgrade your living room? You&apos;ve come to the right place. Stylish and durable, our extensive collection includes a variety of sofas, sectionals, recliners, coffee tables and decor. Add the finishing touches with expertly designed textiles, rugs, lighting and more! Your living room is the centre of life in your home - let us help you make it look that way!
                </p>
              </div>
            </div>
          </div>
        </section>

        <Banner imagesForBanner={imagesForBanner}/>

        <ContactUs />
      </main>
    </div>
  );
};
