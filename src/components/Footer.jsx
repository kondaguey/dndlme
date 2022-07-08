/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BsMedium, BsTwitter, BsPeopleFill, BsFillMegaphoneFill } from "react-icons/bs";
import { FaDev } from "react-icons/fa";

const date = new Date();
const year = date.getFullYear();

function Footer() {
  return (
    <div className="footer">
      <ul className="footer__nav">
    
        <li className="footer__nav__item">
          <a
            href="https://dev.to/kondaguey"
            className="footer__nav__item-link"
            target="_blank"
            rel="noreferrer"
          > <span> <FaDev /></span>
            Dev
          </a>
        </li>
        <li className="footer__nav__item">
          <a
            href="https://twitter.com/daniel_nd_lewis"
            target="_blank"
            className="footer__nav__item-link"
            rel="noreferrer"
          > <span> <BsTwitter /></span>
            Twitter
          </a>
        </li>
        <li className="footer__nav__item">
          <a
            href="https://medium.com/@daniel_notday_lewis"
            target="_blank"
            className="footer__nav__item-link"
            rel="noreferrer"
          > <span> <BsMedium /></span>
            
            Medium
          </a>
        </li>
        <li className="footer__nav__item">
          <a href="/collab" className="footer__nav__item-link">
          <span><BsPeopleFill/></span>
            Collab
          </a>
        </li>
        <li className="footer__nav__item">
          <a href="/privacypolicy" className="footer__nav__item-link">
          <span><BsFillMegaphoneFill/></span>
            Disclaimers
          </a>
        </li>
      </ul>

      <div className="footer__copyright">
        <p className="footer__copyright-year">&copy;{year} by Daniel Lewis</p>
        <img
          className="footer__copyright-img"
          src="./img/dndl-logo-white.png"
          alt="logo"
        />
      </div>
    </div>
  );
}

export default Footer;
