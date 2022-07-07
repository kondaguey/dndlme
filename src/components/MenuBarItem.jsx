/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

function MenuBarItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <li className="menu-bar__links__item">
        <a
          href="#"
          className="menu-bar__links__item-button"
          onClick={() => setOpen(!open)}
        >
          {props.icon}
        </a>
        {open && props.children}
      </li>
    </div>
  );
}

export default MenuBarItem;
