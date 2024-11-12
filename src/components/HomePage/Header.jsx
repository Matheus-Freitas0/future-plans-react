import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import React from "react";
import "./Header.css";

function Header() {
  const navigate = useNavigate();

  const goHome = () => navigate("/");
  const goRegister = () => navigate("/register");
  const goFavorites = () => navigate("/movie/details");

  return (
    <div className="header">
      <nav>
        <img
          src={Logo}
          alt="Logo"
          className="navbar-logo-img"
          onClick={goHome}
        />
        <ul className="navbar-links">
          <li>
            <button className="navbar-link" onClick={goHome}>
              Home
            </button>
          </li>
          <li>
            <button className="navbar-link" onClick={goFavorites}>
              Travel
            </button>
          </li>
          <li>
            <button className="navbar-link" onClick={goRegister}>
              Future Plans
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
