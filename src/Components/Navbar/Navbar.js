import React, { useState } from "react";
import "./Navbar.css";
import MenuItems from "./MenuItem";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Badge, Paper, InputBase } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";

import profile from "../../assets/profile.jpg";

function Navbar() {
  const [shoppingCart] = useState({ amount: 1 });
  const [isSearching, setisSearching] = useState(false);

  const useStyles = makeStyles((theme) => ({
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: "65vw",
      borderRadius: "20px",
      backgroundColor: "#e0e0e0",
      height: "50px",
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
  }));

  const classes = useStyles();

  function handleMouseOnClick() {
    if (isSearching === false) {
      setisSearching(true);
    } else {
      setisSearching(false);
    }
  }
  return (
    <nav className="NavbarItems">
      <h1 className="Navbar-Home">
        <Link to="/" className="Home">
          Book
        </Link>
      </h1>
      <ul className="Navbar-url">
        <div className="Menu__box">
          {isSearching ? (
            <Paper component="form" className={classes.root}>
              <InputBase
                className={classes.input}
                placeholder="ค้นหาสินค้า"
                inputProps={{ "aria-label": "ค้นหาสินค้า" }}
              />
              <SearchIcon color="primary" />
            </Paper>
          ) : (
            MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link className={item.cName} to={item.url}>
                    {item.title}
                  </Link>
                </li>
              );
            })
          )}
          <div className="Search__box">
            <button
              onClick={() => handleMouseOnClick()}
              style={{ padding: "0", border: "none", background: "none" }}
            >
              {isSearching ? <CloseIcon /> : <SearchIcon />}
            </button>
            <Badge
              badgeContent={shoppingCart.amount}
              color="primary"
              style={{ marginLeft: "1.5vw" }}
            >
              <ShoppingCartOutlinedIcon
                style={{
                  WebkitTransform: "scaleX(-1)",
                  transform: "scaleX(-1)",
                  cursor: "pointer",
                }}
              />
            </Badge>
            <img src={profile} alt="Avatar" className="avatar" />
          </div>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
