import React from 'react';
import {
  arcade,
  boraBora,
  hamburg,
  castle,
  stoneBridgePanorama,
  fireworksAsia,
  waterfall,
  london,
  mountains,
  temple,
  rainbow,
  swimmingInOcean,
  mosque,
  trainInScotland,
  beachFootPrints,
  archesNationalPark,
  iceland,
  venice,
  greekMonastery,
  monument,
  operaHouse,
  copenhagen,
  lightHouse,
  acropolis,
  osaka,
  newZealand,
  miamiPanrama,
} from './externalImages';

import closeIcon from '../../assets/icons/close-icon.svg';
import './CSSdemo.css';

export default function CSSdemo({ setDemoActive, logo }) {
  const handleClose = () => {
    setDemoActive(false);
  };

  const CssDemoGallery = () => (
    <div className="css-demo-gallery-container-outer">
      <div className="css-demo-gallery-container-inner">
        <img src={boraBora} alt="bora bora" className="css-demo-img" />
        <img src={hamburg} alt="hamburg" className="css-demo-img" />
        <img src={castle} alt="castle" className="css-demo-img" />
        <img src={waterfall} alt="waterfall" className="css-demo-img" />
        <img src={london} alt="london" className="css-demo-img" />
        <img src={mountains} alt="mountains" className="css-demo-img" />
        <img src={temple} alt="temple" className="css-demo-img" />
        <img src={rainbow} alt="rainbow" className="css-demo-img" />
        <img
          src={swimmingInOcean}
          alt="swimming in ocean"
          className="css-demo-img"
        />
        <img src={mosque} alt="mosque" className="css-demo-img" />
        <img src={trainInScotland} alt="train" className="css-demo-img" />
        <img src={copenhagen} alt="copenhagen" className="css-demo-img" />
        <img src={monument} alt="monument" className="css-demo-img" />
        <img src={fireworksAsia} alt="fireworks" className="css-demo-img" />
      </div>
    </div>
  );

  const CssDemoHero = () => (
    <div className="css-demo-hero-container">
      <div className="css-demo-hero-inner">
        {/* <img src={miamiPanrama} alt="miami" className="css-demo-hero-image" /> */}
        <h2 className="css-demo-hero-text">CSS Travel Demo</h2>
      </div>
    </div>
  );

  const CssDemoHeader = () => {
    return (
      <header className="css-demo-header">
        <h1 className="css-header-text">CSS Demo</h1>
        <img
          src={closeIcon}
          alt="close"
          className="css-demo-icon"
          onClick={handleClose}
        />
      </header>
    );
  };

  const CssDemoBody = () => {
    return (
      <body className="css-demo-body">
        <div className="css-demo-body-left-side">
          <div className="css-demo-text-container-one">
            <h2 className="css-demo-section-title">Video Games</h2>
            <span className="css-demo-body-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              delectus maxime iure et quae autem hic obcaecati. Veniam molestias
              quia cumque maiores odio magni porro error iste, vitae
              voluptatibus facere?
            </span>
          </div>
          <div className="css-left-body-image-wrapper">
            <img src={arcade} alt="arcade" className="css-demo-body-image" />
          </div>
        </div>

        <div className="css-demo-body-right-side">
          {/* <CssDemoGallery /> */}
        </div>
      </body>
    );
  };

  const CssDemoFooter = () => {
    return (
      <footer className="css-demo-footer">
        <img src={logo} alt="logo" className="css-demo-footer-img" />
      </footer>
    );
  };

  return (
    <div className="css-demo-container">
      <CssDemoHero />
      {/* <CssDemoHeader /> */}
      {/* <CssDemoBody /> */}
      {/* <CssDemoFooter /> */}
    </div>
  );
}
