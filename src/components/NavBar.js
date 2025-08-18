import React, { useState } from "react";
import SearchInput from "./SearchInput";
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';

export default function NavBar() {
  const [active, setActive] = useState(false);
  return (
    <nav className={`navBar ${active ? "active" : ""}`}>
      <span>
        <button
          className={` hamburger hamburger--squeeze ${
            active ? "is-active" : ""
          } `}
          onClick={() => {
            setActive(!active);
          }}
          type="button">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </span>
      <SearchInput />
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" href="#" aria-current="page">
           <HomeIcon/>
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
           <SettingsIcon/> Settings
          </a>
        </li>
      </ul>
    </nav>
  );
}
