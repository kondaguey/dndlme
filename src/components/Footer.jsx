/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const date = new Date();
const year = date.getFullYear();

function Footer() {
  return (
    <div className="footer">
      <ul className="footer__nav">
    
        <li className="footer__nav__item">
          <a
            href="https://github.com/kondaguey"
            className="footer__nav__item-link"
            target="_blank"
            rel="noreferrer"
          >
            <span className="footer__nav__item-logo">
              <AiFillGithub />
            </span>
            Github
          </a>
        </li>
        <li className="footer__nav__item">
          <a
            href="https://www.linkedin.com/in/daniel-lewis-55a903195/"
            target="_blank"
            className="footer__nav__item-link"
            rel="noreferrer"
          >
            <span className="footer__nav__item-logo">
              <AiFillLinkedin />
            </span>
            LinkedIn
          </a>
        </li>
        <li className="footer__nav__item">
          <a href="/privacypolicy" className="footer__nav__item-link">
            Disclaimers
          </a>
        </li>
        <li className="footer__nav__item">
          <a href="/collab" className="footer__nav__item-link">
            Collab
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
