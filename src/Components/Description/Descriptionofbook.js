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
          <h5 style={{ paddingLeft: "1vw", fontSize: "18px" }}>
            ตัวประกอบสะท้านยุทธภพ
          </h5>
        </div>
        <div className="desTextBox">
          <p style={{ color: "#8f8f8f" }}>
            ฟรีแลนซ์สาวหัวใจวายตายกะทันหัน
            เพราะอินจัดกับนิยายจีนย้อนยุคที่อ่านไปได้ค่อนเรื่อง
            ขณะนั่งเท้าคางรอยมทูตมารับวิญญาณอย่างเบื่อๆ
            องค์เง็กเซียนฮ่องเต้ในชุดเสื้อฮาวายลายสับปะรดก็โผล่มาช่วยส่งเธอทะลุมิติไปเป็นตัวประกอบในนิยายจีนเรื่องนั้น
            ...ไม่ใช่ตัวประกอบธรรมดา หากแต่ยังมีภารกิจอันยิ่งใหญ่
            นั่นคือการปกป้องนางร้ายให้รอดจากคราวเคราะห์
            แต่จะทำเช่นไรเมื่อเรื่องราวกลับวิปริตผิดเพี้ยนไปจากหนังสือ
            ตัวละครทั้งหลายต่างพากันเล่นนอกบท
            โดยเฉพาะบุรุษหนุ่มหล่อเหลาผู้หนึ่งถึงกับเอ่ยคำสารภาพรักกับนาง
            จนคนไร้ประสบการณ์ความรักถึงสองชาติภพต้องสับสนว้าวุ่นใจ
            ...ตัวประกอบหน้าตาบ้านๆ อย่างนางจะมีสิ่งใดไปต้องตาบุรุษผู้นั้นได้
            หรือท่าโบกพัดของนางมันเย้ายวนจนทำให้เขาตกหลุมรัก?
          </p>
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
          {/* {products.map((product) => {
            return <Product data={product} />;
          })} */}
          <p>Item1</p>
          <p>Item2</p>
          <p>Item3</p>
          <p>Item4</p>
          <p>Item5</p>
          <p>Item6</p>
        </CarouselMultiple>
      </div>
    </div>
  );
}

export default DescriptionOfBook;
