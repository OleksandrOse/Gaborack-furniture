import React from 'react';
import './About.scss';

export const About: React.FC = () => {
  return (
    <section className="page__section about" id="about-us">
      <div className="about__container">
        <div className="grid grid--tablet grid--dekstop">
          <div className="
            grid__item
            grid__item--tablet-1-3
            grid__item--dekstop-1-5"
          >
            <h2 className="about__title">
              Live comfortably
            </h2>
          </div>

          <div className="
            grid__item
            grid__item--tablet-4-6
            grid__item--dekstop-7-12"
          >
            <p className="about__paragraf">
              We make quality furniture for any choice.
              We will welcome new ideas and do everything for your comfort.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
