import React from "react";
import "./Checkout.css";
import { Button } from "@material-ui/core";
import Form from "react-bootstrap/Form";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

function Checkout() {
  const [value, setValue] = React.useState("KERRY");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div style={{ width: "100vw", paddingTop: "10.2vh" }}>
      <div className="checkoutBox">
        <div className="FormBox">
          <div className="headForm">
            <h5 style={{ fontWeight: "bold", fontSize: "25px" }}>ชำระเงิน</h5>
          </div>
          <div className="subHeadForm">
            <p>ที่อยู่ในการจัดส่ง</p>
          </div>
          <div className="Forms">
            <Form style={{ paddingLeft: "20px" }}>
              <Form.Row>
                <Form.Group style={{ marginRight: "50px" }}>
                  <Form.Label>ชื่อ</Form.Label>
                  <Form.Control
                    name="FirstName"
                    style={{ borderRadius: "40px" }}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>นามสกุล</Form.Label>
                  <Form.Control
                    name="LastName"
                    style={{ borderRadius: "40px" }}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Group>
                <Form.Label>ประเทศ</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue="Thailand"
                  style={{ borderRadius: "40px", width: "550px" }}
                >
                  <option>Thailand</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>
                  ที่อยู่ (บ้านเลขที่ / หมู่บ้าน / หมู่ที่ / ซอย / ถนน)
                </Form.Label>
                <Form.Control
                  style={{ borderRadius: "40px", width: "550px" }}
                />
              </Form.Group>

              <Form.Row>
                <Form.Group style={{ marginRight: "50px" }}>
                  <Form.Label>แขวง/ตำบล</Form.Label>
                  <Form.Control
                    name="District"
                    style={{ borderRadius: "40px" }}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>เขต/อำเภอ</Form.Label>
                  <Form.Control
                    name="County"
                    style={{ borderRadius: "40px" }}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group style={{ marginRight: "50px" }}>
                  <Form.Label>จังหวัด</Form.Label>
                  <Form.Control
                    name="Province"
                    style={{ borderRadius: "40px" }}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>รหัสไปรษณีย์</Form.Label>
                  <Form.Control
                    name="Postalcode"
                    type="number"
                    style={{ borderRadius: "40px" }}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Group>
                <Form.Label>
                  เบอร์ติดต่อ (กรุณาระบุหมายเลขโทรศัพท์ เฉพาะตัวเลขเท่านั้น)
                </Form.Label>
                <Form.Control
                  name="Phone"
                  type="number"
                  style={{ borderRadius: "40px", width: "550px" }}
                />
              </Form.Group>
            </Form>
          </div>
          <div className="subHeadSelect">
            <p>เลือกขนส่ง</p>
          </div>
          <div className="selectTypeTrans">
            <FormControl component="fieldset" style={{ paddingLeft: "20px" }}>
              <RadioGroup
                aria-label="type"
                name="type"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="Free shipping"
                  control={<Radio color="primary" />}
                  label="Free shipping"
                  style={{
                    border: "1px solid",
                    height: "100px",
                    width: "800px",
                    borderRadius: "20px",
                  }}
                />
                <FormControlLabel
                  value="Kerry express"
                  control={<Radio color="primary" />}
                  label="Kerry express"
                  style={{
                    border: "1px solid",
                    height: "100px",
                    width: "800px",
                    borderRadius: "20px",
                  }}
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="subTwoHeadForm">
            <p>วิธีชำระเงิน</p>
          </div>
          <div className="paymentType">
            <FormControl component="fieldset" style={{ paddingLeft: "20px" }}>
              <RadioGroup
                aria-label="type"
                name="type"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="Cash"
                  control={<Radio color="primary" />}
                  label="Cash"
                  style={{
                    border: "1px solid",
                    height: "100px",
                    width: "800px",
                    borderRadius: "20px",
                  }}
                />
                <FormControlLabel
                  value="Credit/Debit"
                  control={<Radio color="primary" />}
                  label="Credit/Debit"
                  style={{
                    border: "1px solid",
                    height: "100px",
                    width: "800px",
                    borderRadius: "20px",
                  }}
                />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
        <div className="SummaryBox">
          <div className="description">
            <p style={{ fontWeight: "bold", fontSize: "25px" }}>
              สรุปคำสั่งซื้อ
            </p>
            <div className="summary__headerBox" style={{ display: "grid" }}>
              <div>
                <p>ยอดรวม</p>
                <p>ค่าส่ง</p>
              </div>
              <div>
                <p>THB129.00</p>
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
            >
              ชำระเงิน
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
