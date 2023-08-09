import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div
    className="app__header app__wrapper section__padding"
    id="home"
  >
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p
        className="p__opensans"
        style={{ margin: '2rem 0' }}
      >
        The artful combination of exquisite flavors, impeccable presentation,
        and impeccable service. It is a harmonious blend of culinary mastery,
        aesthetic elegance, and a refined dining experience that elevates a
        meal to a memorable occasion. Fine dining transcends mere sustenance,
        embracing the nuances of taste, ambiance, and hospitality to create
        an unforgettable culinary journey.
      </p>
      <button
        type="button"
        className="custom__button"
      >
        Explore Menu
      </button>
    </div>
    <div className="app__wrapper_img">
      <img
        src={images.welcome}
        alt="header img"
      />
    </div>
  </div>
);

export default Header;
