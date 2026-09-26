import React, { useState } from "react";
import "./LoginNav.css";
import ChangeLanguage from "../language/ChangeLanguage";
import logoApp from "../../../assets/images/logo.jpg";
import { Link } from "react-router-dom";

 function LoginNav() {
   return (
    <nav className="login-nav">
      <Link to="/">
        <img className="logo" src={logoApp} alt="Home" />
      </Link>

      <ChangeLanguage />
    </nav>
   )
 }
 
 export default LoginNav

