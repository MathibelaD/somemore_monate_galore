import React, { useState } from "react"
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images'

import '../../../src/somemoreCss.css'

export const NavBar = () => {
    const [toggleMenu,setToggleMenu] = useState(false)
    return (
        <nav className="app__navbar">
            <div className="app__navbar_logo">
                {/* <img src={images.SomeMoreLogo} alt="App Logo"/> */}
                <MdOutlineRestaurantMenu color="#fff" fontSize={37} />
                <div className="flex w-3">
                <p className="text-start tabular-nums text-lg">Somemore</p>
                <p className="text-end text-yellow-400 tabular-nums text-sm">Monate_Galore</p>
                </div>
            </div>
            <ul className="app__navbar_links">
                <li className="p__opensans"><a href="#home">Home</a></li>
                <li className="p__opensans"><a href="#about">AboutUs</a></li>
                <li className="p__opensans"><a href="#Menu">Menu</a></li>
                <li className="p__opensans"><a href="#contact">Contact</a></li>
            </ul>
            <div className="app__navbar_login">
                <a href="#login" className="">Log In / Register</a>
                <div />
                <a href="/" className="">Order Food</a>
            </div>
            <div className="app__navbar_smallscreen">
                {<GiHamburgerMenu color="#fff" fontSize={27} onClick={() => {setToggleMenu(true)}} />}
                {toggleMenu && (
                <><div className="app__navbar_smallscreen_overlay flex__center slide-bottom">
                        <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
                    </div>
                    <ul className="app__navbar_smallscreen_links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">AboutUs</a></li>
                            <li><a href="#Menu">Menu</a></li>
                            <li><a href="#contact">Contact</a></li>
                    </ul></>)}
            </div>
        </nav>
    )
}