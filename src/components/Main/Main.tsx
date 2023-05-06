import { FC } from 'react';
import { About } from '../About/About';
import { Banner } from '../Banner/Banner';
import { BuyFrom } from '../BuyFrom/BuyFrom';
import { ContactUs } from '../ContactUs/ContactUs';

export const Main: FC = () => {
  const imagesForBanner = [
    // 'images/photos/25.jpg',
    // 'images/photos/17-6.jpg',
    // 'images/photos/21.jpg',
    // 'images/photos/23-6.jpg',
    './images/Living-room/4.jpg',
    'images/Bathroom/2.jpg',
    'images/Bathroom/3.jpg',
    'images/Bathroom/4.jpg',
    'images/Bathroom/5.jpg',
    'images/Bathroom/6.jpg',
    'images/Bathroom/7.jpg',
    'images/Bathroom/8.jpg',
    'images/Bathroom/9.jpg',
    'images/Bathroom/10.jpg',
    'images/Bedroom/1.jpg',
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
    'images/Living-room/12.jpg',
  ];

  return (
    <main className="page__main">
      <About />
      <Banner imagesForBanner={imagesForBanner} />

      <BuyFrom />

      <ContactUs />
    </main>
  );
};
