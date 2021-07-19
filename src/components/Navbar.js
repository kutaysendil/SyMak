import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "./pages/SyImg/logo3.png";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img alt="logo" src={Logo}></img>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              ANASAYFA
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/üretimlerimiz"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              ÜRETİMLERİMİZ
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/referanslar"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              REFERANSLAR
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/hakkimizda"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              HAKKIMIZDA
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/iletisim"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              İLETİŞİM
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
