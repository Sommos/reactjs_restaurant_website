import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img
        src={images.G}
        alt="g letter"
      />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">
          About Us
        </h1>
        <img
          src={images.spoon}
          alt="about_spoon"
          className="spoon__img"
        />
        <p className="p__opensans">
          At 'The Key to Fine Dining', we are passionate about crafting exceptional
          gastronomic experiences that transcend the ordinary. With a commitment to
          culinary excellence and a dedication to creating unforgettable moments,
          we invite you to indulge in a world of flavors, elegance, and unparalleled
          service.
        </p>
        <button
          type="button"
          className="custom__button"
        >
          Know More
        </button>
      </div>
      <div className="app__aboutus-content_knife flex__center">
        <img
          src={images.knife}
          alt="about_knife"
        />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">
          Our History
        </h1>
        <img
          src={images.spoon}
          alt="history_spoon"
          className="spoon__img"
        />
        <p className="p__opensans">
        Founded with a vision to redefine dining, 'Gericht' opened its
        doors in 2007, setting the stage for a journey that marries tradition with
        innovation. Since then, we have continuously evolved, curating a legacy of
        exceptional dining that celebrates the art of flavor and hospitality.
        </p>
        <button
          type="button"
          className="custom__button"
        >
          Explore Our Journey
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
