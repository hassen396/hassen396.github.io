// import React from "react";
import "./header.css";
import HeaderImage from "../assets/images/logo1.jpg";
import MenuIcon from "../assets/images/menu-icon.png"; // Correctly import the menu icon

export default function Header() {
  function toggleMenu() {
    const navbarList = document.querySelector(".navbar-list");
    navbarList.style.display =
      navbarList.style.display === "flex" ? "none" : "flex";
  }

  return (
    <header className="header-row">
      <div className="logo-container">
        <img src={HeaderImage} alt="Logo" className="logo-image" />
        <img
          src={MenuIcon}
          alt="Menu"
          className="menu-icon"
          onClick={toggleMenu}
        />
      </div>
      <ul className="navbar-list">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>
    </header>
  );
}
