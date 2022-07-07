/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

function DropdownMenu(props) {
  const [activeMenu, setActiveMenu] = useState("main");

  return (
    <div>
      <ul className="menu-bar__links__item-button-dropdown">
        <li className="menu-bar__links__item-button-dropdown--item">
          <a href="/developer">/developer</a>
        </li>
        <li className="menu-bar__links__item-button-dropdown--item">
          <a href="/actor">/actor</a>
        </li>
        <li className="menu-bar__links__item-button-dropdown--item">
          <a href="/copywriter">/copywriter</a>
        </li>
        <li className="menu-bar__links__item-button-dropdown--item">
          <a href="/">홈</a>
        </li>
      </ul>
    </div>
  );
}

export default DropdownMenu;
