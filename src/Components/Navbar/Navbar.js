import React, { useState } from "react";
import "./Navbar.css";
import MenuItems from "./MenuItem";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Badge, Paper, InputBase, Popper, Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

import profile from "../../assets/profile.jpg";

function Navbar() {
  const [isSearching, setisSearching] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const products = useSelector((state) => {
    return state;
  });
  console.log(products);

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
    paper: {
      border: "1px solid",
      paddingTop: 20,
      width: 350,
      textAlign: "center",
      backgroundColor: theme.palette.background.paper,
      borderColor: "#e0e0e0",
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

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

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
                placeholder="?????????????????????????????????"
                inputProps={{ "aria-label": "?????????????????????????????????" }}
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
              aria-describedby={id}
              onClick={() => handleMouseOnClick()}
              style={{ padding: "0", border: "none", background: "none" }}
            >
              {isSearching ? <CloseIcon /> : <SearchIcon />}
            </button>
            <Badge
              badgeContent={products.length}
              color="primary"
              style={{ marginLeft: "1.5vw" }}
              onClick={handleClick}
            >
              <ShoppingCartOutlinedIcon
                style={{
                  WebkitTransform: "scaleX(-1)",
                  transform: "scaleX(-1)",
                  cursor: "pointer",
                }}
              />
            </Badge>
            <Popper
              id={id}
              open={open}
              anchorEl={anchorEl}
              placement="bottom-end"
              disablePortal={true}
              modifiers={{
                flip: {
                  enabled: false,
                },
                preventOverflow: {
                  enabled: true,
                  boundariesElement: "scrollParent",
                },
              }}
            >
              <div className={classes.paper}>
                <h5 style={{ fontWeight: "bold", fontSize: "20px" }}>
                  ???????????????????????????????????????
                </h5>
                <p style={{ fontSize: "15px", color: "#9e9e9e" }}>
                  {products.length} ?????????????????????????????????????????????
                </p>
                <Link className="SubHeader" to="/cart">
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{
                      borderRadius: "50px",
                      borderWidth: "2px",
                      paddingLeft: 50,
                      paddingRight: 50,
                      marginBottom: 10,
                    }}
                  >
                    ?????????????????????????????????????????????????????????????????????
                  </Button>
                </Link>
                {products.map((items) => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        borderTop: "1.5px solid",
                        borderBottom: "1.5px solid",
                        borderColor: "#e0e0e0",
                        paddingTop: 15,
                        paddingBottom: 15,
                      }}
                    >
                      <p
                        style={{
                          flex: 1,
                          textAlign: "right",
                          paddingTop: "20px",
                          paddingRight: "3px",
                        }}
                      >
                        {items.amount} x
                      </p>
                      <div
                        style={{
                          flex: 7,
                          textAlign: "left",
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <img
                          src={items.imagebook}
                          alt="img product"
                          style={{
                            height: "70px",
                            width: "70px",
                            marginRight: "10px",
                          }}
                        />
                        <p>{items.title}</p>
                      </div>
                      <div
                        style={{
                          flex: 2,
                          display: "flex",
                          flexDirection: "column",
                          textAlign: "right",
                        }}
                      >
                        <CloseIcon
                          style={{
                            height: "20px",
                            border: "1px solid",
                            borderRadius: "50%",
                            marginBottom: "3px",
                            cursor: "pointer",
                          }}
                        />
                        <CreateOutlinedIcon
                          style={{
                            height: "20px",
                            border: "1px solid",
                            borderRadius: "50%",
                            cursor: "pointer",
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    textAlign: "center",
                  }}
                >
                  <p style={{ paddingTop: 20, flex: 1 }}>
                    ?????????????????? : <b>THB129.00</b>
                  </p>
                </div>
                <Link className="SubHeader" to="/checkout">
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      borderRadius: "50px",
                      paddingLeft: 50,
                      paddingRight: 50,
                      marginBottom: 10,
                    }}
                  >
                    ??????????????????????????????
                  </Button>
                </Link>
              </div>
            </Popper>
            <img src={profile} alt="Avatar" className="avatar" />
          </div>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
