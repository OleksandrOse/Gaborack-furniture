/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './ContactUs.scss';

export const ContactUs: React.FC = () => {
  return (
    <section className="page__section contact-us" id="contact-us">
      <div className="contact-us__container">
        <h2 className="page__section-title">
          Contact us
        </h2>

        <div className="grid grid--tablet">
          <div
            className="
              grid__item
              grid__item--tablet-1-3
              grid__item--dekstop-1-5
            "
          >
            <form
              onSubmit={(e) => e.preventDefault()}
              action="#"
              className="contact-us__form"
            >
              <input
                name="name"
                type="text"
                className="contact-us__field form-field"
                placeholder="Name"
                required
              />
              <input
                name="email"
                type="email"
                className="contact-us__field form-field"
                placeholder="E-mail"
                required
              />
              <textarea
                name="message"
                className="
                  contact-us__field
                  contact-us__field--last
                  form-field
                  form-field-textarea
                "
                placeholder="Message"
                required
              />

              <button type="submit" className="button">
                Send
              </button>
            </form>
          </div>

          <div className="
            grid__item
            grid__item--tablet-4-5
            grid__item--dekstop-8-10"
          >
            <div className="contact-us__info">
              <div className="contact-us__info-title">
                Phone
              </div>
              <a href="tel: +1 647 7736273" className="contact-us__info-link">+1 647 773-62-73</a>
              <br />
              <a href="tel: +1 705 9777779" className="contact-us__info-link">+1 705 977-77-79</a>
            </div>

            <div className="contact-us__info">
              <div className="contact-us__info-title">
                E-mail
              </div>
              <a href="mailto: yuriy-1981@ukr.net" className="contact-us__info-link">yuriy-1981@ukr.net</a>
            </div>

            <div className="contact-us__info-title">
              Address
            </div>
            <a
              href="https://goo.gl/maps/zxvsV1WzVcqLoZxt6"
              className="contact-us__info-link"
              target="_blank"
            >
              172 Berry Road
              <br />
              Torronto,
              <br />
              Ontario, M8 Y1WS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
