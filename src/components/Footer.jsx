/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import { BsStackOverflow, BsTwitter, BsMedium } from "react-icons/bs";

const date = new Date();
const year = date.getFullYear();

function Footer() {
  return (
    <div className="footer">
      <ul className="footer__nav">
    
        <li className="footer__nav__item">
          <a
            href="https://stackoverflow.com/users/17514943/daniel"
            className="footer__nav__item-link"
            target="_blank"
            rel="noreferrer"
          >
           
            Stack Overflow
          </a>
        </li>
        <li className="footer__nav__item">
          <a
            href="https://twitter.com/daniel_nd_lewis"
            target="_blank"
            className="footer__nav__item-link"
            rel="noreferrer"
          >
            
            Twitter
          </a>
        </li>
        <li className="footer__nav__item">
          <a
            href="https://medium.com/@daniel_notday_lewis"
            target="_blank"
            className="footer__nav__item-link"
            rel="noreferrer"
          >
            
            Medium
          </a>
        </li>
        <li className="footer__nav__item">
          <a href="/collab" className="footer__nav__item-link">
            Collab
          </a>
        </li>
        <li className="footer__nav__item">
          <a href="/privacypolicy" className="footer__nav__item-link">
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
