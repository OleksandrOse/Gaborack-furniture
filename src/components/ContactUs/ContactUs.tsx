/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from 'react';
import { send } from 'emailjs-com';
import classNames from 'classnames';

import './ContactUs.scss';
import { warningTimer } from '../../helpers/warningTimer';

export const ContactUs: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [warning, setWarning] = useState(false);

  const [touched, setToched] = useState({
    name: false,
    email: false,
    body: false,
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    body: false,
  });

  const [values, setValues] = useState({
    name: '',
    email: '',
    body: '',
  });

  const { name, email, body } = values;

  const clearForm = () => {
    setValues({
      name: '',
      email: '',
      body: '',
    });

    setErrors({
      name: false,
      email: false,
      body: false,
    });
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name: field, value } = event.target;

    setValues(current => ({ ...current, [field]: value }));
    setErrors(current => ({ ...current, [field]: false }));
    setToched(current => ({ ...current, [field]: false }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setErrors({
      name: !name,
      email: !email,
      body: !body,
    });

    if (!name.trim() || !email.trim() || !body.trim()) {
      return;
    }

    send(
      "service_8h3lzq6",
      "template_zyfxasb",
      values,
      "Z10Puj4no99H3y9KI",
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSubmitting(true);
      warningTimer(setSubmitting, false, 3000);

      setValues({
        name: '',
        email: '',
        body: '',
      });
    })
    .catch(() => {
      setWarning(true);
      warningTimer(setWarning, false, 3000);

      setValues(current => ({ ...current, body: '' }));
    });
  };

  const handleBlur = (value: string, field: string) => {
    if (!value.trim().length) {
      setToched(current => ({
        ...current,
        [field]: true,
      }));
    }
  };

  const errorName = touched.name || errors.name;
  const errorEmail = touched.email || errors.email;
  const errorBody = touched.body || errors.body;

  const validateFields = (text: string) => {
    // eslint-disable-next-line max-len
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return !pattern.test(text);
  };

  useEffect(() => {
    if (email.length) {
      setIsValidEmail(validateFields(email));
    }
  }, [touched]);

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
              onSubmit={handleSubmit}
              onReset={clearForm}
              className="contact-us__form"
            >
              <input
                name="name"
                type="text"
                className={classNames(
                  "form-field",
                  { 'is-danger': errorName },
                )}
                placeholder="Name"
                value={name}
                onChange={handleChange}
                onBlur={() => handleBlur(name, 'name')}
              />

              <div className="contact-us__distance">
                <p className="help is-danger" data-cy="ErrorMessage">
                  {errorName && 'Name is required'}
                </p>
              </div>

              <input
                name="email"
                type="email"
                className="form-field"
                placeholder="E-mail"
                value={email}
                onChange={handleChange}
                onBlur={() => handleBlur(email, 'email')}
              />

              <div className="contact-us__distance">
                <p className="help is-danger" data-cy="ErrorMessage">
                  {errorEmail && 'Email is required'}
                  {isValidEmail && !errorEmail && 'Email is not valid'}
                </p>
              </div>

              <textarea
                name="body"
                className="
                  form-field
                  form-field-textarea
                "
                placeholder="Message"
                value={body}
                onChange={handleChange}
                onBlur={() => handleBlur(body, 'body')}
              />

              <div className="contact-us__distance contact-us__distance--last">
                <p className="help is-danger" data-cy="ErrorMessage">
                  {errorBody && 'Enter your message'}
                  {warning && 'Something went wrong, try again'}
                </p>
                <p className="help is-danger" data-cy="ErrorMessage">
                  {submitting && 'Your message has been sent, we will definitely contact you.'}
                </p>
              </div>

              <button
                type="submit"
                className={classNames(
                  "button",
                  { 'is-loading': submitting },
                )}
              >
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
