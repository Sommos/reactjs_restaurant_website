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
        Established with a visionary spirit in 2007, Gericht embarked on a
        transformative path, blending tradition and innovation. Evolving
        over time, we've forged a legacy of exceptional dining, honoring
        the art of flavor and hospitality.
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
        Since 2007, 'Gericht' has redefined dining, harmonizing tradition and innovation.
        Our ongoing evolution crafts an exceptional legacy, celebrating the art of flavor
        and hospitality that began when our doors first opened.
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
