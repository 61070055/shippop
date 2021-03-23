import React, { useState } from "react";
import "./Description.css";
import { FormControl, Select, Button } from "@material-ui/core";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";

import book from "../../assets/book01.png";
import email from "../../assets/email.png";
import twitter from "../../assets/twitter.png";
import facebook from "../../assets/facebook.png";
import google from "../../assets/google-plus.png";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  margin: {
    margin: theme.spacing(1),
    width: "8vw",
    marginLeft: "2vw",
  },
}));

const theme = createMuiTheme({
  palette: {
    secondary: orange,
  },
});

function DescriptionOfBook() {
  const [amount, setAmount] = useState({ p_amount: "" });
  const classes = useStyles();

  const handleChange = (event) => {
    const select = event.target.value;
    setAmount({ p_amount: select });
  };

  return (
    <div style={{ width: "100vw", paddingTop: "10.2vh" }}>
      <div className="mainBox">
        <img src={book} className="main__img" alt="book img" />
        <div className="subBox">
          <h1 style={{ fontWeight: "bolder", marginBottom: "3vh" }}>
            ตัวประกอบสะท้านยุทธภพ
          </h1>
          <p className="des__text">ผู้เขียน : จอมยุทธ์สะดุดกระบี่</p>
          <p className="des__text">สำนักพิมพ์ : เป็นหนึ่งสำนักพิมพ์</p>
          <p className="des__text">หมวดหมู่ : นิยายรักจีนโบราณ</p>
          <p className="des__text">ประเภทของสินค้า : Books</p>
          <p className="des__text" style={{ paddingBottom: "30px" }}>
            บาร์โค้ด : 7864513521847
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <h5 style={{ paddingTop: "15px" }}>ราคา</h5>
            <h3
              style={{
                paddingLeft: "2vw",
                fontSize: "35px",
                fontWeight: "bold",
              }}
            >
              THB129.00
            </h3>
            <h4
              style={{
                paddingLeft: "1vw",
                paddingTop: "7px",
                textDecoration: "line-through",
                color: "#7c7c7c",
              }}
            >
              THB259.00
            </h4>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                paddingTop: "4vh",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <FormControl className={classes.formControl}>
                <Select
                  native
                  value={amount.p_amount}
                  onChange={handleChange}
                  inputProps={{
                    name: "Amount",
                    id: "Amout-of-products",
                  }}
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                </Select>
              </FormControl>
              <Button
                variant="contained"
                color="primary"
                className={classes.margin}
              >
                Add
              </Button>
              <ThemeProvider theme={theme}>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.margin}
                  startIcon={<FavoriteIcon />}
                >
                  Wishlish
                </Button>
              </ThemeProvider>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              paddingTop: "5vh",
            }}
          >
            <h5>แชร์ :</h5>
            <img className="icon" src={email} alt="email icon" />
            <img className="icon" src={twitter} alt="twitter icon" />
            <img className="icon" src={facebook} alt="facebook icon" />
            <img className="icon" src={google} alt="google plus icon" />
          </div>
        </div>
      </div>
      <div className="imgBox">
        <img src={book} alt="book sub img" style={{ cursor: "pointer" }} />
      </div>
      <div className="desSelectBox">
        <p style={{ fontWeight: "bold" }}>เกี่ยวกับสินค้า</p>
        <p style={{ color: "#7c7c7c", paddingLeft: "1.5vw" }}>รายละเอียด</p>
      </div>
      <div
        style={{ backgroundColor: "#ebebebe", width: "100%", height: "0.2vh" }}
      ></div>
      <div className="desBox">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <h5>รายละเอียด :</h5>
          <p>ตัวประกอบสะท้านยุทธภพ</p>
        </div>
      </div>
    </div>
  );
}

export default DescriptionOfBook;