import React, { useState } from "react";
import "./Nav.css";
import logoApp from "../../../assets/images/logo.jpg";
import questionIcon from "../../../assets/icons/questionIcon.png";
import ChangeLanguage from "../language/ChangeLanguage";
import { Link } from "react-router-dom";
function Nav({ children }) {
  const [activeMenu, setActiveMenu] = useState("Hotel");
  return (
    <>
      <nav className="home-nav">
        <div className="head-nave">
          <Link to="/">
            <img className="logo" src={logoApp} alt="Home" />
          </Link>

          <ChangeLanguage />

          <button className="help-icon-btn">
            <img className="help-icon-image" src={questionIcon} />
          </button>

          <label className="search-nav" htmlFor="site-search">
            <span className="sr-only">Search destinations</span>
            <input
              className="input-search"
              type="text"
              name="search"
              id="site-search"
              placeholder="Search destinations"
            />
            <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
          </label>

          {children}
        </div>

        <div className="menu">
          <button
            className={`menu-btn ${activeMenu === "Trip" ? "active" : ""}`}
            onClick={() => setActiveMenu("Trip")}
          >
            Trip
          </button>

          <button
            className={`menu-btn ${activeMenu === "%Deals" ? "active" : ""}`}
            onClick={() => setActiveMenu("%Deals")}
          >
            %Deals
          </button>

          <button
            className={`menu-btn ${activeMenu === "Hotel" ? "active" : ""}`}
            onClick={() => setActiveMenu("Hotel")}
          >
            Hotel
          </button>

          <button
            className={`menu-btn ${activeMenu === "Flight" ? "active" : ""}`}
            onClick={() => setActiveMenu("Flight")}
          >
            Flight
          </button>

          <button
            className={`menu-btn ${activeMenu === "Apartment" ? "active" : ""}`}
            onClick={() => setActiveMenu("Apartment")}
          >
            Apartment
          </button>

          <button
            className={`menu-btn ${activeMenu === "Camper" ? "active" : ""}`}
            onClick={() => setActiveMenu("Camper")}
          >
            Camper
          </button>
        </div>
      </nav>
    </>
  );
}
export default Nav;
