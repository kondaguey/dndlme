import React from "react";
import MenuBarItem from "./MenuBarItem";
import DropdownMenu from "./DropdownMenu";
import { FiChevronDown } from "react-icons/fi";

function MenuBar(props) {
  return (
    <div className="menu-bar">
      <a href="/">
        <img className="menu-bar__logo" src="./img/dndl-logo.png" alt="logo" />
      </a>

      <span className="menu-bar__header">Daniel (not Day) Lewis</span>

      <ul className="menu-bar__links">
        <MenuBarItem icon={<FiChevronDown />}>
          <DropdownMenu />
        </MenuBarItem>
      </ul>
    </div>
  );
}

export default MenuBar;
