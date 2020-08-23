import { Form, Button, Select, InputNumber } from "antd";
const FormItem = Form.Item;
import React, { useState, useEffect } from "react";
import { EnvironmentOutlined } from "@ant-design/icons";
const { Option } = Select;
import router from "next/router";
import Axios from "axios";
import LoadingComponent from "./components/component.loading";

function PaymentPage() {
  const [user, setUser] = useState();
  const [token, setToken] = useState("");
  const [inventory, setInventory] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [fetchLoading, setfetchLoading] = useState(false);
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [dayforrent, setDayForRent] = useState(7);

  useEffect(() => {
    let token = localStorage.getItem("token");
    let user = JSON.parse(localStorage.getItem("user"));
    let typePage = localStorage.getItem("type");
    setType(typePage);
    console.log("token", token, user, typePage);
    if (typePage) {
      if (token) {
        setUser(user);
        getProductInventory(user);
      } else {
        router.push("/page.login");
      }
    }
  }, []);

  const getProductInventory = (user) => {
    if (type === "Shop") {
      Axios({
        method: "post",
        url: "https://tranquil-beach-43094.herokuapp.com/showInventoryById",
        data: {
          id_user: user._id,
        },
      })
        .then((data) => {
          console.log(data);
          if (data.data.code === 100) {
            console.log("1");
            setisLoading(true);
          } else {
            setInventory(data.data);
            sumPrice(data.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      let idproduct = JSON.parse(localStorage.getItem("itemforrent"));
      Axios({
        method: "post",
        url: "http://localhost:5000/productrentbyid",
        data: { id: idproduct._id },
      })
        .then((productpost) => {
          console.log(productpost.data);
          setInventory(productpost.data);
          setisLoading(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
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

  const valuedayforrent = (value) => {
    setDayForRent(value);
    console.log("changed", value);
  };

  const CardShowProduct = (props) => {
    console.log("DAY", dayforrent);
    return (
      <div className="pm-product">
        <img className="pm-product-img" src={props.data.image_product} />
        <div className="pm-product-des">
          <h2 style={{ color: "black" }}>{props.data.name_product}</h2>
          <div className="pm-product-des-1">
            <div>
              <h3 style={{ color: "red" }}>ราคา {props.data.price_product}</h3>
              {type === "Shop" ? null : (
                <h3 style={{ color: "black" }}>
                  สถานะ :{" "}
                  {inventory.status_product
                    ? "พร้อมให้เช่า"
                    : "ไม่พร้อมให้เช่า"}
                </h3>
              )}
            </div>
            <div style={{ textAlign: "center" }}>
              {type === "Shop" ? (
                <Button
                  onClick={() => {
                    deleteProductInventory(props.data._id);
                  }}
                >
                  เอาออกจากตระกร้า
                </Button>
              ) : null}
              <h3 style={{ color: "black" }}>จำนวนวันที่เช่า </h3>
              <InputNumber
                min={7}
                defaultValue={dayforrent}
                onChange={valuedayforrent}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const postBuyProduct = () => {
    setfetchLoading(true);
    let data = {
      id_product: inventory,
    };
    Axios({
      method: "post",
      url: "https://tranquil-beach-43094.herokuapp.com/soldproduct",
      data,
    })
      .then((data) => {
        setfetchLoading(false);
        console.log("ทำการซื้อสำเร็จแล้ว", data);
        alert("ทำรายการซื้อสำเร็จแล้ว");
        router.push("/page.shop");
      })
      .catch((error) => {
        console.log("ทำรายการซื้อไม่สำเร็จ", error);
      });
  };

  const postRentProduct = () => {
    console.log("check", inventory.status_product);
    if (inventory.status_product) {
      let data = {
        user_id: user._id,
        id_product: inventory._id,
        user_name: user.user_name,
        price_rent: inventory.price_product * dayforrent + 600 + 600,
        time_rent: dayforrent,
      };
      Axios({
        method: "post",
        url: "http://localhost:5000/checkandrentproduct",
        data,
      })
        .then((datapost) => {
          console.log(datapost);
          if(datapost.data.code === 100){
            alert('ทำการเช่าสำเร็จแล้ว')
            router.push('/page.shop')
          } else {
            alert('ไม่สามารถเช่าได้เนื่องจากถูกเช่าไปแล้ว')
            router.push('/page.shop')
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("ไม่พร้อมให้เช่า");
      router.push('/page.shop')
    }
  };

  const deleteProductInventory = (value) => {
    setfetchLoading(true);
    let data = {
      id_product_inven: value,
    };
    Axios({
      method: "post",
      url: "https://tranquil-beach-43094.herokuapp.com/deleteproductinventory",
      data,
    })
      .then((res) => {
        setfetchLoading(false);
        console.log("ลบสำเร็จแล้ว", res);
        location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const RenderDataRent = () => {
    return (
      <FormItem style={{ margin: "0px" }}>
        <LoadingComponent type={"fetchloading"} status={fetchLoading} />
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
            <CardShowProduct data={inventory} />;
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
                    ยอดการเช่า ( x{dayforrent} days )
                  </h3>
                  <h3 style={{ color: "black" }}>
                    {inventory.price_product * dayforrent} THB
                  </h3>
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
              <h2 style={{ color: "black", margin: "10px" }}>ยอดชำระทั้งหมด</h2>
              <h2 style={{ color: "red", margin: "10px" }}>
                {inventory.price_product * dayforrent + 600 + 600} THB.
              </h2>
              <Button
                className="pm-footer-btn"
                onClick={() => postRentProduct()}
              >
                ทำรายการเช่า
              </Button>
            </div>
          </div>
        </div>
      </FormItem>
    );
  };

  if (!isLoading) {
    return <LoadingComponent type={"pageloading"} status={true} />;
  } else {
    if (type === "Rent") {
      return <RenderDataRent />;
    } else {
      console.log(inventory);
      if (inventory.length <= 0) {
        return (
          <FormItem style={{ margin: "0px" }}>
            <LoadingComponent type={"fetchloading"} status={fetchLoading} />
            <div className="br">
              <div className="br-header">
                <h1>Header</h1>
              </div>
              <div className="pm-body">
                <div className="pm-back">
                  <Button onClick={() => router.push("/page.shop")}>
                    Back
                  </Button>
                  <h2 style={{ color: "black" }}>PAYMENT SELL</h2>
                  <a style={{ color: "black" }}>Edit</a>
                </div>
                <div className="pm-address" style={{ textAlign: "center" }}>
                  <h1 style={{ color: "black" }}>ตระกร้าของคุณไม่มีสินค้า</h1>
                </div>
              </div>
            </div>
          </FormItem>
        );
      } else {
        return (
          <FormItem style={{ margin: "0px" }}>
            <LoadingComponent type={"fetchloading"} status={fetchLoading} />
            <div className="br">
              <div className="br-header">
                <h1>Header</h1>
              </div>
              <div className="pm-body">
                <div className="pm-back">
                  <Button onClick={() => router.push("/page.shop")}>
                    Back
                  </Button>
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
                    <h3 style={{ color: "black" }}>
                      โมจิ กิ้นกิ้น 096-0000000
                    </h3>
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
                  <Button
                    className="pm-footer-btn"
                    onClick={() => postBuyProduct()}
                  >
                    ทำรายการซื้อ
                  </Button>
                </div>
              </div>
            </div>
          </FormItem>
        );
      }
    }
  }
}

export default PaymentPage;
