import React from 'react';

import './App.css';
import { Footer } from './components/FooterComponent/Footer';
import { NavBar } from './components/NavBarComponent/NavBar';
import { AboutUs } from './Container/AboutUs/AboutUs';
import { Header } from './Container/Header/header';

const App = () => (
  <div>
    <NavBar />
    <Header />
    <AboutUs />
    {/* <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs /> */}
    <Footer />
  </div>
);

export default App;
