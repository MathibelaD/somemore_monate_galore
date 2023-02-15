import React from 'react';
import { SubHeading } from '../../components/SubHeadingComponent/SubHeading';


import { images } from '../../constants';
import './headerCss.css';

export const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="text-white">
      <SubHeading title="Monate_Galore" />
      <h1 className="app__header-h1">The joy in FastFood</h1>
      <p className="p__opensans" style={{ margin: '1rem 0' }}>Enjoy the quality life of kota in your hood made with love and a little bit of korobela</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img-reverse h-96 w-80">
      <img src={images.headerImage} alt="header_img" />
    </div>
  </div>
);
