import React, { useState } from "react";
import "./Description.css";
import { FormControl, Select, Button } from "@material-ui/core";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
import CarouselMultiple from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Product from "../Homepage/Product";
import email from "../../assets/email.png";
import tumblr from "../../assets/tumblr.png";
import facebook from "../../assets/facebook.png";
import google from "../../assets/google-plus.png";
import FavoriteIcon from "@material-ui/icons/Favorite";
import database from "../../data/data-dummy.json";

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

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function DescriptionOfBook() {
  const [amount, setAmount] = useState({ p_amount: "" });
  const classes = useStyles();
  const [data, setdata] = useState(database.BOOKS);
  const [bookId, setBookId] = useState(
    window.location.pathname.split("/").pop()
  );
  const [book, setBook] = useState(
    database.BOOKS.filter((x) => x.id === parseInt(bookId))[0]
  );

  const handleChange = (event) => {
    const select = event.target.value;
    setAmount({ p_amount: select });
  };

  // console.log(database);

  return (
    <div style={{ width: "100vw", paddingTop: "10.2vh" }}>
      <div className="mainBox">
        <img src={book.imagebook} className="main__img" alt="book img" />
        <div className="subBox">
          <h1 style={{ fontWeight: "bolder", marginBottom: "3vh" }}>
            {book.title}
          </h1>
          <p className="des__text">ผู้เขียน : {book.writer}</p>
          <p className="des__text">สำนักพิมพ์ : {book.publisher}</p>
          <p className="des__text">หมวดหมู่ : {book.category}</p>
          <p className="des__text">ประเภทของสินค้า : {book.type}</p>
          <p className="des__text" style={{ paddingBottom: "30px" }}>
            บาร์โค้ด : {book.barcode}
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
              {book.saleprice}
            </h3>
            <h4
              style={{
                paddingLeft: "1vw",
                paddingTop: "7px",
                textDecoration: "line-through",
                color: "#7c7c7c",
              }}
            >
              {book.price}
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
            <img className="icon" src={tumblr} alt="twitter icon" />
            <img className="icon" src={facebook} alt="facebook icon" />
            <img className="icon" src={google} alt="google plus icon" />
          </div>
        </div>
      </div>
      <div className="imgBox">
        <img
          src={book.imagebook}
          alt="book sub img"
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="desSelectBox">
        <p style={{ fontWeight: "bold", cursor: "pointer" }}>เกี่ยวกับสินค้า</p>
        <p style={{ color: "#7c7c7c", marginLeft: "1.5vw", cursor: "pointer" }}>
          รายละเอียด
        </p>
      </div>
      <div
        style={{ backgroundColor: "#d4d4d4", width: "100%", height: "0.2vh" }}
      ></div>
      <div className="desBox">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <h5
            style={{
              fontWeight: "bolder",
              fontSize: "18px",
            }}
          >
            รายละเอียด :
          </h5>
          <h5 style={{ paddingLeft: "1vw", fontSize: "18px" }}>{book.title}</h5>
        </div>
        <div className="desTextBox">
          <p style={{ color: "#8f8f8f" }}>{book.descriptions}</p>
        </div>
      </div>
      <div className="otherBox">
        <div className="HeadBox">
          <h4 className="Header">สินค้าที่เกี่ยวข้อง</h4>
          <Link className="SubHeader" to="#">
            ดูสินค้าทั้งหมด
          </Link>
        </div>
        <CarouselMultiple
          responsive={responsive}
          infinite
          containerClass="container-with-dots"
          keyBoardControl
          draggable
        >
          {data.map((product) => {
            return <Product data={product} />;
          })}
        </CarouselMultiple>
      </div>
    </div>
  );
}

export default DescriptionOfBook;
