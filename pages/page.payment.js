import { Form, Button, Select } from "antd";
const FormItem = Form.Item;
import React, { useState, useEffect } from "react";
import { EnvironmentOutlined } from "@ant-design/icons";
const { Option } = Select;
import router from "next/router";
import Axios from "axios";

function PaymentPage() {
  const [user, setUser] = useState();
  const [token, setToken] = useState("");
  const [inventory, setInventory] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let token = localStorage.getItem("token");
    let user = JSON.parse(localStorage.getItem("user"));
    //console.log("token", token, user);
    if (token) {
      setUser(user);
      getProductInventory(user);
    } else {
      router.push("/page.login");
    }
  }, []);

  const getProductInventory = (user) => {
    Axios({
      method: "post",
      url: "https://tranquil-beach-43094.herokuapp.com/showInventoryById",
      data: {
        id_user: user._id,
      },
    })
      .then((data) => {
        console.log(data.data);
        if (data.data.code === 100) {
          console.log("1");
          setisLoading(true);
        } else {
          console.log(data);
          setInventory(data.data);
          sumPrice(data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const sumPrice = (value) => {
    var sum = 0;
    let i = 0;
    for (i = 0; i <= value.length - 1; i++) {
      let number = parseInt(value[i].price_product);
      sum = sum + number;
    }
    setPrice(sum);
    setisLoading(true);
    console.log("ค่ารวม", sum);
  };

  const CardShowProduct = (props) => {
    return (
      <div className="pm-product">
        <img className="pm-product-img" src={props.data.image_product} />
        <div className="pm-product-des">
          <h2 style={{ color: "black" }}>{props.data.name_product}</h2>
          <div className="pm-product-des-1">
            <h3 style={{ color: "red" }}>ราคา {props.data.price_product}</h3>
            <h3 style={{ color: "black" }}>จำนวน 1 ชิ้น </h3>
          </div>
        </div>
      </div>
    );
  };

  if (!isLoading) {
    return null;
  } else {
    console.log(inventory);
    if (inventory.length <= 0) {
      return (
        <FormItem style={{ margin: "0px" }}>
          <div className="br">
            <div className="br-header">
              <h1>Header</h1>
            </div>
            <div className="pm-body">
              <div className="pm-back">
                <Button onClick={() => router.push("/page.shop")}>Back</Button>
                <h2 style={{ color: "black" }}>PAYMENT SELL</h2>
                <a style={{ color: "black" }}>Edit</a>
              </div>
              <div className="pm-address" style={{textAlign:"center"}}>
                <h1 style={{color:"black"}}>ตระกร้าของคุณไม่มีสินค้า</h1>
              </div>
            </div>
          </div>
        </FormItem>
      );
    } else {
      return (
        <FormItem style={{ margin: "0px" }}>
          <div className="br">
            <div className="br-header">
              <h1>Header</h1>
            </div>
            <div className="pm-body">
              <div className="pm-back">
                <Button onClick={() => router.push("/page.shop")}>Back</Button>
                <h2 style={{ color: "black" }}>PAYMENT SELL</h2>
                <a style={{ color: "black" }}>Edit</a>
              </div>
              <div className="pm-address">
                <div className="pm-address-1">
                  <EnvironmentOutlined
                    style={{ color: "black", fontSize: "30px" }}
                  />
                  <h2 style={{ color: "black" }}>Address</h2>
                </div>
                <div className="pm-address-2">
                  <h3 style={{ color: "black" }}>โมจิ กิ้นกิ้น 096-0000000</h3>
                  <h3 style={{ color: "black" }}>
                    เอนยูสแคว์ ซอย 3 ม.1 จ.พิษณุโลก 65000
                  </h3>
                </div>
              </div>
              {inventory.map((data) => {
                return <CardShowProduct data={data} />;
              })}
              <div className="pm-option">
                <div className="pm-option-1">
                  <h3 style={{ color: "black" }}>ตัวเลือกการจัดส่ง</h3>
                  <h2 style={{ color: "black" }}>THAI POST (EMS)</h2>
                </div>
                <div className="pm-option-2">100 THB.</div>
              </div>
              <div className="pm-payment">
                <div className="pm-payment-header">
                  <h3 style={{ color: "black" }}>วิธีการชำระเงิน</h3>
                  <Select
                    defaultValue="lucy"
                    style={{ width: "auto" }}
                    //onChange={handleChange}
                  >
                    <Option value="jack">ธนาคารกสิกร</Option>
                    <Option value="lucy">ธนาคารกรุงไทย</Option>
                    <Option value="disabled" disabled>
                      Disabled
                    </Option>
                    <Option value="Yiminghe">ธนาคารกรุงเทพ</Option>
                  </Select>
                </div>
                <div className="pm-payment-body">
                  <div className="pm-payment-body-1">
                    <h3 style={{ color: "black" }}>
                      ยอดการเช่า/ซื้อ ( x3 days )
                    </h3>
                    <h3 style={{ color: "black" }}>{price} THB</h3>
                  </div>
                  <div className="pm-payment-body-1">
                    <h3 style={{ color: "black" }}>ค่าจัดส่ง</h3>
                    <h3 style={{ color: "black" }}>600 THB</h3>
                  </div>
                  <div className="pm-payment-body-1">
                    <h3 style={{ color: "black" }}>
                      ค่ามัดจำสินค้า( ได้คืนหลังการส่งคืนสินค้า )
                    </h3>
                    <h3 style={{ color: "black" }}>600 THB</h3>
                  </div>
                </div>
              </div>
              <div className="pm-footer">
                <h2 style={{ color: "black", margin: "10px" }}>
                  ยอดชำระทั้งหมด
                </h2>
                <h2 style={{ color: "red", margin: "10px" }}>
                  {price + 600 + 600} THB.
                </h2>
                <Button className="pm-footer-btn">BUY</Button>
              </div>
            </div>
          </div>
        </FormItem>
      );
    }
  }
}

export default PaymentPage;
