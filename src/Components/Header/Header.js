import { Button } from "@material-ui/core";
import React from "react";
import "./Header.css";
import image from "./images.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__image">
        <img className="image" src={image} alt="" />
        <h1>lyngva</h1>
      </div>
      <nav className="header__navbar">
        <ul className="header-navbar__list">
          <li className="header-navbar__item">
            <a href="#">Home &#9662;</a>
            <ul className="dropdown">
              <li>
                <a href="#">Laptops</a>
              </li>
              <li>
                <a href="#">Monitors</a>
              </li>
              <li>
                <a href="#">Printers</a>
              </li>
            </ul>
          </li>
          <li className="header-navbar__item">
            <a href="#">Services &#9662;</a>
            <ul className="dropdown">
              <li>
                <a href="#">Laptops</a>
              </li>
              <li>
                <a href="#">Monitors</a>
              </li>
              <li>
                <a href="#">Printers</a>
              </li>
            </ul>
          </li>
          <li className="header-navbar__item">
            <a href="#">About Us &#9662;</a>
            <ul className="dropdown">
              <li>
                <a href="#">Laptops</a>
              </li>
              <li>
                <a href="#">Monitors</a>
              </li>
              <li>
                <a href="#">Printers</a>
              </li>
            </ul>
          </li>
          <li className="header-navbar__item">
            <a href="#">Features &#9662;</a>
            <ul className="dropdown">
              <li>
                <a href="#">Laptops</a>
              </li>
              <li>
                <a href="#">Monitors</a>
              </li>
              <li>
                <a href="#">Printers</a>
              </li>
            </ul>
          </li>
          <li className="header-navbar__item">
            <a href="#">News &#9662;</a>
            <ul className="dropdown">
              <li>
                <a href="#">Laptops</a>
              </li>
              <li>
                <a href="#">Monitors</a>
              </li>
              <li>
                <a href="#">Printers</a>
              </li>
            </ul>
          </li>
          <li className="header-navbar__item">
            <a href="#">Contacts &#9662;</a>
            <ul className="dropdown">
              <li>
                <a href="#">Laptops</a>
              </li>
              <li>
                <a href="#">Monitors</a>
              </li>
              <li>
                <a href="#">Printers</a>
              </li>
            </ul>
          </li>
        </ul>
        <button className="button" variant="contained" className="button">
          Get a Quote
        </button>

        {/* <ul className="header-navbar__list">
          <li className="header-navbar__item">
            <a href="www.google.com">
              Homes
            </a>
          </li>
          <li className="header-navbar__item">
            <a href="www.google.com">Services</a>
          </li>
          <li className="header-navbar__item">
            <a href="www.google.com">About Us</a>
          </li>
          <li className="header-navbar__item">
            <a href="www.google.com">Features</a>
          </li>
          <li className="header-navbar__item">
            <a href="www.google.com">News</a>
          </li>
          <li className="header-navbar__item">
            <a href="www.google.com">Contacts</a>
          </li>
          <li className="header-navbar__item">
            <button className="button" variant="contained" className="button">
              Get a Quote
            </button>
          </li>
        </ul> */}
      </nav>
    </header>
  );
};

export default Header;
