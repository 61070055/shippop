import React, { useState, useEffect } from "react";
import "./Cart.css";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import { grey } from "@material-ui/core/colors";
import { useSelector } from "react-redux";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(grey[900]),
    backgroundColor: grey[900],
    "&:hover": {
      backgroundColor: grey[700],
    },
  },
}))(Button);

function CartEdit() {
  const products = useSelector((state) => {
    return state;
  });

  const [test, setTest] = useState(0);

  useEffect(() => {
    products.map((item) => {
      return setTest(test + parseFloat(item.saleprice.slice(3) * item.amount));
    });
  }, [products, test]);

  return (
    <div style={{ width: "100vw", paddingTop: "10.2vh" }}>
      <div className="cartBox">
        <div className="textBox">
          <div className="headerBox">
            <h5 style={{ fontWeight: "bold", fontSize: "25px" }}>
              ตระกร้าสินค้า
            </h5>
          </div>
          <div className="descrip__head">
            <p style={{ fontWeight: "bold", marginRight: "305px" }}>สินค้า</p>
            <p className="text__des">ราคา</p>
            <p className="text__des">จำนวน</p>
            <p className="text__des">ยอดรวม</p>
          </div>
          {products.map((item) => {
            return (
              <div className="itemsBox">
                <div className="productBox">
                  <img
                    src={item.imagebook}
                    alt="img of Product"
                    style={{ height: "80%", paddingRight: "5px" }}
                  />
                  <p
                    style={{
                      fontWeight: "bold",
                      paddingTop: "0.2vw",
                      paddingLeft: "0.2vw",
                      fontSize: "13px",
                    }}
                  >
                    {item.title}
                  </p>
                </div>
                <div className="priceBox">
                  <p>{item.saleprice}</p>
                </div>
                <div className="amountBox">{item.amount}</div>
                <div className="summary__priceBox">
                  <p>THB{parseFloat(item.saleprice.slice(3) * item.amount)}</p>
                </div>
                <div className="menuBox">
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
          <div className="buttonBox">
            <Button
              variant="outlined"
              style={{
                borderRadius: "50px",
                borderWidth: "2px",
                paddingLeft: 60,
                paddingRight: 60,
                marginBottom: 10,
                marginRight: 20,
              }}
              href="/"
            >
              ซื้อสินค้าต่อไป
            </Button>
            <ColorButton
              variant="contained"
              style={{
                borderRadius: "50px",
                paddingLeft: 60,
                paddingRight: 60,
                marginBottom: 10,
              }}
            >
              ล้างตระกร้าสินค้า
            </ColorButton>
          </div>
        </div>
        <div className="order__summary">
          <div className="descrip__order">
            <p style={{ fontWeight: "bold", fontSize: "25px" }}>
              สรุปคำสั่งซื้อ
            </p>
            <div className="summary__headerBox" style={{ display: "grid" }}>
              <div>
                <p>ยอดรวม</p>
                <p>ค่าส่ง</p>
              </div>
              <div>
                <p>THB{test}</p>
                <p>THB0.00</p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#d4d4d4",
                width: "100%",
                height: "0.2vh",
              }}
            ></div>
            <div
              className="summary__comfirmBox"
              style={{ display: "grid", paddingTop: "30px" }}
            >
              <div>
                <p style={{ paddingTop: "10px" }}>ยอดสุทธิ</p>
              </div>
              <div>
                <p style={{ fontWeight: "bold", fontSize: "25px" }}>
                  THB129.00
                </p>
              </div>
            </div>
            <Button
              variant="contained"
              style={{
                borderRadius: "50px",
                paddingLeft: 60,
                paddingRight: 60,
                marginBottom: 10,
              }}
              color="primary"
              href="/checkout"
            >
              ไปชำระเงิน
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartEdit;
