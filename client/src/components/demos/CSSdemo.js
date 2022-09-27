import React from 'react';
import {
  ps4Controllers,
  joyStickController,
  mineCraft,
  xbox,
  sega,
  arcade,
  pcGamer,
  lanParty,
  gameBoy,
  ps2ConsoleAndGames,
  modernWarfare,
  ps4,
  mobileGaming,
  nintendoSwitch,
} from './externalImages';

import closeIcon from '../../assets/icons/close-icon.svg';
import './CSSdemo.css';

export default function CSSdemo({ setDemoActive, logo }) {
  const handleClose = () => {
    setDemoActive(false);
  };

  return (
    <div className="css-demo-container">
      <header className="css-demo-header">
        <h1 className="css-header-text">CSS Demo</h1>
        <img
          src={closeIcon}
          alt="close"
          className="css-demo-icon"
          onClick={handleClose}
        />
      </header>

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
          <div className="css-demo-gallery-container-outer">
            <div className="css-demo-gallery-container-inner">
              <img
                src={ps4Controllers}
                alt="ps4-controller"
                className="css-demo-img"
              />
              <img
                src={joyStickController}
                alt="joystick"
                className="css-demo-img"
              />
              <img src={mineCraft} alt="minecraft" className="css-demo-img" />
              <img src={xbox} alt="xbox" className="css-demo-img" />
              <img src={sega} alt="sega" className="css-demo-img" />
              <img src={arcade} alt="arcade" className="css-demo-img" />
              <img src={pcGamer} alt="pc gaming" className="css-demo-img" />
              <img src={lanParty} alt="lan party" className="css-demo-img" />
              <img src={gameBoy} alt="gameboy" className="css-demo-img" />
              <img
                src={ps2ConsoleAndGames}
                alt="play-station 2"
                className="css-demo-img"
              />
              <img
                src={modernWarfare}
                alt="modern warfare"
                className="css-demo-img"
              />
              <img src={ps4} alt="play-station 4" className="css-demo-img" />
              <img
                src={mobileGaming}
                alt="mobile gaming"
                className="css-demo-img"
              />
              <img
                src={nintendoSwitch}
                alt="nintendo switch"
                className="css-demo-img"
              />
            </div>
          </div>
        </div>
      </body>
      <footer className="css-demo-footer">
        <img src={logo} alt="logo" className="css-demo-footer-img" />
      </footer>
    </div>
  );
}
