import React from "react"
import GiForkKnifeSpoon from 'react-icons'
import GiHamburgerMenu from 'react-icons'
import images from '../../constants/images'

import '../../../src/somemoreCss.css'

export const NavBar = () => {
    return (
        <nav className="app__navBar">
            <div className="app__navBar_logo">
                <img src={images.SomeMoreLogo} alt="App Logo"/>
            </div>
            <ul className="app__navar_links">
                <li className=""><a href="#home">Home</a></li>
                <li className=""><a href="#about">AboutUs</a></li>
                <li className=""><a href="#Menu">Menu</a></li>
                <li className=""><a href="#contact">Contact</a></li>
            </ul>
            <div className="">
                <a href="#login" className="">Log In / Register</a>
                <div />
                <a href="/" className="">Order Food</a>
            </div>
            <div className="">
                {/* <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => {}}/> */}
            </div>
        </nav>
    )
}