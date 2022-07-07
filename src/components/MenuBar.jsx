import React from "react";
import MenuBarItem from "./MenuBarItem";
import DropdownMenu from "./DropdownMenu";
import { FiChevronDown } from "react-icons/fi";
// import { BsMedium, BsTwitter, BsStackOverflow } from "react-icons/bs";


function MenuBar(props) {
  return (
    <div className="menu-bar">
      <a href="/">
        <img className="menu-bar__logo" src="./img/dndl-logo.png" alt="logo" />
      </a>

      <div className="menu-bar__header">Daniel (not Day) Lewis
      
        {/* <div className="menu-bar__socials">
          
          <a href="https://medium.com/@daniel_notday_lewis" target="_blank"><BsMedium /></a>
          <a href="https://twitter.com/daniel_nd_lewis" target="_blank"><BsTwitter /></a>
          <a href="https://stackoverflow.com/users/17514943/daniel" target="_blank"><BsStackOverflow /></a>


        </div> */}
      
      </div>



      <ul className="menu-bar__links">
        <MenuBarItem icon={<FiChevronDown />}>
          <DropdownMenu />
        </MenuBarItem>
      </ul>
    </div>
  );
}

export default MenuBar;
