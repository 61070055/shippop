import React from "react";
import "./Navbar.css";
import MenuItems from "./MenuItem";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

function Navbar() {
  return (
    <nav className="NavbarItems">
      <h1 className="Navbar-Home">
        <Link to="/" className="Home">
          Book
        </Link>
      </h1>
      <ul className="Navbar-url">
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                {item.title}
              </Link>
            </li>
          );
        })}
        <div className="Search__box">
          <SearchIcon />
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
