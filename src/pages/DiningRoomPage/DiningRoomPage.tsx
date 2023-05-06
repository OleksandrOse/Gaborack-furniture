import React from 'react';
import { Banner } from '../../components/Banner/Banner';
import { ContactUs } from '../../components/ContactUs/ContactUs';
import './DiningRoom.scss';

export const DiningRoomPage: React.FC = () => {
  const imagesForBanner = [
    'images/Dining-room/1.jpg',
    'images/Dining-room/2.jpg',
    'images/Dining-room/3.jpg',
    'images/Dining-room/4.jpg',
    'images/Dining-room/5.jpg',
    'images/Dining-room/6.jpg',
    'images/Dining-room/7.jpg',
    'images/Dining-room/8.jpg',
    'images/Dining-room/9.jpg',
    'images/Dining-room/10.jpg',
    'images/Dining-room/11.jpg',
    'images/Dining-room/12.jpg',
    'images/Dining-room/13.jpg',
    'images/Dining-room/14.jpg',
    'images/Dining-room/15.jpg',
    'images/Dining-room/16.jpg',
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
            grid__item--dekstop-1-6"
              >
                <h2 className="dining__title">
                  Dining Room Furniture
                </h2>
              </div>

              <div className="
            grid__item
            grid__item--tablet-1-6
            grid__item--dekstop-1-12"
              >
                <p className="dining__paragraf">
                  Explore our wide selection of kitchen & dining room furniture including dining chairs and benches, dining tables, bar stools, buffets, bars, cabinets, complete dining sets and more. Whether your interior design style is modern, traditional, or contemporary, Gaborack offers dining room pieces to suit any taste
                </p>
                <p className="dining__paragraf">
                  The dining room is the central meeting place for gathering friends and family, whether casual in nature or more formal, to delight in memorable meals, good conversation, and game nights. Design the inviting dining room of your dreams with luxury dining room furniture from Furniture.ca. Discover a wide selection of dining room tables, chairs, benches, sideboards, and more to wine and dine in style. Serve up your dream space and wow your guests.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Banner imagesForBanner={imagesForBanner}/>

        <section className="page__section about" id="about-us">
          <div className="dining__container">
            <div className="grid grid--tablet grid--dekstop">
              <div className="
            grid__item
            grid__item--tablet-1-6
            grid__item--dekstop-1-12"
              >
                <p className="dining__paragraf">
                  The dining room is the central meeting place for gathering friends and family, whether casual in nature or more formal, to delight in memorable meals, good conversation, and game nights. Design the inviting dining room of your dreams with luxury dining room furniture from Furniture.ca. Discover a wide selection of dining room tables, chairs, benches, sideboards, and more to wine and dine in style. Serve up your dream space and wow your guests.
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
