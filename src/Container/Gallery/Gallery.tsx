import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components'
import { images } from '../../constants';
// import { images } from '../../constants';
import './GalleryCss.css';
import '../../somemoreCss.css'

export const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    // if (current !== null){
    // if (direction === 'left') {
    //   current.scrollLeft -= 300;
    // } else {
    //   current.scrollLeft += 300;
    // }
  // }
  }
  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button type="button" className="customButton">View More</button>
      </div>
      <div id="carouselExampleIndicators" className="app__gallery-images" data-bs-ride="carousel"> 
  <div className="app__gallery-images_container" ref={scrollRef}>
    { [images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
          <div className="app__gallery-images_card flex__center"  key={`gallery_image-${index + 1}`}>
          <img
            src={image}
            className=""
            alt="Wild Landscape"
          />
        </div>
    ))

}
  </div>
  <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
</div>
</div>
)}