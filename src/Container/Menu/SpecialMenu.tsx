import React from 'react';

import { SubHeading, MenuItem } from '../../components'
import { data } from '../../constants';
import './SpecialMenuCss.css';

export const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding app__bg" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Menu</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_kota">
        <p className="app__specialMenu-menu_heading">Kota</p>
        <div className="app__specialMenu_menu_items">
          {data.Kota.map((kota, index) => (
            <MenuItem key={kota.title + index} title={kota.title} price={kota.price} tags={kota.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_sandwichs">
        <p className="app__specialMenu-menu_heading">Sandwich</p>
        <div className="app__specialMenu_menu_items">
          {data.Sandwich.map((sandwich, index) => (
            <MenuItem key={sandwich.title + index} title={sandwich.title} price={sandwich.price} tags={sandwich.tags} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="customButton">View More</button>
    </div>
  </div>
);
