import React from "react";
import "./Header.css";
import logo from "../images/logo.png";

const Header = () => {
    return (
        <div className="nav-container">
            <div className="nav-left">
                <img className="flash-logo" src={logo} alt="logo" />
                <p className="flash-logo-text">FlashType</p>
            </div>
            
        </div>
    );
};

export default Header;