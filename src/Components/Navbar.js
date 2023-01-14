import React from "react";
import useAppContext from "../Hooks/useAppContext";
import logo from "../images/logo.svg";
import { FaBars } from "react-icons/fa";
import Submenu from "./Submenu";

const Navbar = () => {
  const { openSidebar, closeSubmenu, openSubmenu } = useAppContext();

  const subMenuOpen = (e) => {
    // console.log(e);
    const btnText = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;

    openSubmenu(btnText, { center, bottom });
  };

  // const handleSubMenu = (e) => {
  //   if (!e.target.classList.contains("link-btn")) {
  //     closeSubmenu();
  //   }
  // };

  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="stripe" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={subMenuOpen}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={subMenuOpen}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={subMenuOpen}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
