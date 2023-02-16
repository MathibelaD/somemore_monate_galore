import React from "react"
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { images } from "../../constants";
import "./footerCss.css"

export const Footer = () => {
    const date = new Date();
    return (
        <>
  <div className="app__footer section__padding" id="login">
    {/* <FooterOverlay />
    <Newsletter /> */}

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">233 Block W, Soshanguve 0152</p>
        <p className="p__opensans">+27 61 994 4187</p>
        <img src={images.spoon} className="spoon__img ml-36" style={{ marginTop: 15 }} alt=""/>
        <div className="app__footer-links_icons ml-36 grid-flow-col flex gap-3 md:place-self-center md:justify-self-end">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">10:00 am - 09:00 pm</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">10:00 am - 22:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">{date.getFullYear()} Somem0re. All Rights reserved.</p>
    </div>

  </div>
 </>
    )
}