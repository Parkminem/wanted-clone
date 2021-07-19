import React, { useState } from "react";
import {
  MenuItemBusiness,
  MenuItemMedia,
  MenuItemPersonnel,
  MenuItemGame,
  MenuItemFinance,
} from "./MenuItems";
import { Link } from "react-router-dom";
import "./Dropdown.css";

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {MenuItemBusiness.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onclick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}

        {MenuItemMedia.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onclick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
        {MenuItemPersonnel.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onclick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
        {MenuItemGame.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onclick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
        {MenuItemFinance.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onclick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
