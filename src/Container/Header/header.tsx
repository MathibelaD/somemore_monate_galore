import React from 'react';
import { SubHeading } from '../../components/SubHeadingComponent/SubHeading';


import { images } from '../../constants';
import '../../../src/somemoreCss.css'
import './headerCss.css';

export const Header = () => {

  return (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="text-white">
      <SubHeading title="Monate_Galore" />
      <h1 className="app__header-h1">FastFood Resturant</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Enjoy the quality life of kota in your hood made with love and a little bit of korobela</p>
      <button type="button" className="customButton">Explore Menu</button>
    </div>

    <div className=" mt-48 ml-3 border-solid border-4 border-yellow-500">
      <img src={images.headerImage} alt="header_img" />
    </div>
  </div>
  )
  };
