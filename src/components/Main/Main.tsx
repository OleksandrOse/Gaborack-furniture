import { FC } from 'react';
import { About } from '../About/About';
import { Banner } from '../Banner/Banner';
import { ContactUs } from '../ContactUs/ContactUs';
import { Footer } from '../Footer/Footer';

export const Main: FC = () => {
  return (
    <main className="page__main">
      <About />
      <Banner />
      <ContactUs />
      <Footer />
    </main>
  );
};
