import React from 'react';
import './footer.css';
import logo from '../../assets/image/logoQuery.png';
import playStory from '../../assets/image/baixe nosso app.png'

const Footer = () => {
    return (
        <footer>
          <div className="container-logo-footer">
            <img
              src={logo}
              alt="logo querygames"
              className="logo-footer"
            />
          </div>
          <div className="container-announcement-footer">
            <img
              src={playStory}
              alt="baixe Nosso App"
              className="announcement-img"
            />
          </div>
          <div className="links">
            <ul>
              <li>
                <a href="../index.html">Início</a>
              </li>
              <li>
                <a href="/">Quem Somos?</a>
              </li>
              <li>
                <p>Fale Conosco: <br />querygames@gmail.com</p>
              </li>
            </ul>
          </div>
        </footer>
      );
    };

export default Footer;