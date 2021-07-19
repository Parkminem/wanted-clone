import React, { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        wanted
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li
          className="nav-item"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link to="/wdlist" className="nav-links" onClick={closeMobileMenu}>
            탐색
          </Link>
          {dropdown && <Dropdown />}
        </li>
        <li className="nav-item">
          <Link to="/events" className="nav-links">
            커리어 성장
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/salary" className="nav-links">
            직군별 연봉
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/cv" className="nav-links">
            이력서
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/matchup" className="nav-links">
            매치업
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/free" className="nav-links">
            프리랜서
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ai" className="nav-links">
            Ai 합격예측
          </Link>
        </li>
      </ul>
      <ul className="nav-menu2">
        <li className="nav-item">
          <i class="fas fa-search"></i>
          <i class="far fa-bell"></i>
        </li>
        <Button />
      </ul>
    </nav>
  );
}

export default Navbar;
