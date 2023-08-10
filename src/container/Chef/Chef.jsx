import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img
        src={images.chef}
        alt="chef"
      />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What we believe in</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img
            src={images.quote}
            alt="quote"
          />
          <p className="p__opensans">
            Crafting each dish is a symphony of passion and ingredients,
          </p>
        </div>
        <p className="p__opensans">
         where flavors dance on the palate and memories are plated.
         Embracing culinary artistry, our chef's quote encapsulates
         the heart and soul we infuse into every creation at 'Gericht'.
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img
          src={images.sign}
          alt="sign"
        />
      </div>
    </div>
  </div>
);

export default Chef;
