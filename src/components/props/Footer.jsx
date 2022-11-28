import React from 'react';
import facebook from '../../imgs/facebook.png';
import twitter from '../../imgs/twitter.png';
import linkedin from '../../imgs/linkedin.png';
import github from '../../imgs/github.png';
import instagram from '../../imgs/instagram.png';
import '../../styles/footer.css';

function Footer() {
  return (
    <div>
      <div className="socials-layer">
        <a href="https://facebook.com/" target="_blank" rel="noreferrer">
          <img src={facebook} alt="" />
        </a>
        <a href="https://twitter.com/Mahdi_Rezaei_AF" target="_blank" rel="noreferrer">
          <img src={twitter} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/rezaei.mahdi" target="_blank" rel="noreferrer">
          <img src={linkedin} alt="" />
        </a>
        <a href="https://github.com/MahdiSohaily" target="_blank" rel="noreferrer">
          <img src={github} alt="" />
        </a>
        <a href="https://instagram.com/" target="_blank" rel="noreferrer">
          <img src={instagram} alt="" />
        </a>
      </div>
      <div className="copyright">
        <h4>©Mahdi Rezaei</h4>
      </div>
    </div>
  );
}

export default Footer;
