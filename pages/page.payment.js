import { Form, Button, Select, InputNumber, Upload, message } from "antd";
const FormItem = Form.Item;
import React, { useState, useEffect } from "react";
import { EnvironmentOutlined, UploadOutlined } from "@ant-design/icons";
const { Option } = Select;
import router from "next/router";
import Axios from "axios";
import LoadingComponent from "./components/component.loading";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import HeaderNavbar from "./components/HeaderNavbar";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

function PaymentPage() {
  const [user, setUser] = useState();
  const [token, setToken] = useState("");
  const [inventory, setInventory] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [fetchLoading, setfetchLoading] = useState(false);
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const matches = useMediaQuery("(min-width:600px)");
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
        getProductInventory(user, typePage);
      } else {
        router.push("/page.login");
      }
    }
  }, []);

  const getProductInventory = (user, type) => {
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
              {/*type === "Shop" ? (
                <Button
                  onClick={() => {
                    deleteProductInventory(props.data._id);
                  }}
                >
                  เอาออกจากตระกร้า
                </Button>
                ) : null*/}
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

  const CardShowProductRes = (props) => {
    console.log("DAY", dayforrent);
    if (type === "Shop") {
      return (
        <div className="pm-product">
          <img className="pm-product-img" src={props.data.image_product} />
          <div className="pm-product-des">
            <h2
              style={{
                color: "black",
                fontSize: "16px",
                marginLeft: "8px",
                marginBottom: "0px",
              }}
            >
              {props.data.name_product}
            </h2>
            <div className="pm-product-des-1">
              <div>
                <h3
                  style={{ color: "red", marginLeft: "8px", fontSize: "14px" }}
                >
                  {props.data.price_product} THB
                </h3>
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
                {/*type === "Shop" ? (
                  <Button
                    onClick={() => {
                      deleteProductInventory(props.data._id);
                    }}
                  >
                    เอาออกจากตระกร้า
                  </Button>
                  ) : null*/}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="pm-product">
          <img className="pm-product-img" src={props.data.image_product} />
          <div className="pm-product-des">
            <h2 style={{ color: "black" }}>{props.data.name_product}</h2>
            <div className="pm-product-des-1">
              <div>
                <h3 style={{ color: "red" }}>
                  ราคา {props.data.price_product}
                </h3>
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
                {/*type === "Shop" ? (
                <Button
                  onClick={() => {
                    deleteProductInventory(props.data._id);
                  }}
                >
                  เอาออกจากตระกร้า
                </Button>
                ) : null*/}
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
    }
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
          if (datapost.data.code === 100) {
            alert("ทำการเช่าสำเร็จแล้ว");
            router.push("/page.shop");
          } else {
            alert("ไม่สามารถเช่าได้เนื่องจากถูกเช่าไปแล้ว");
            router.push("/page.shop");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("ไม่พร้อมให้เช่า");
      router.push("/page.shop");
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
      if (matches) {
        console.log(inventory);
        if (inventory.length <= 0) {
          return (
            <FormItem style={{ margin: "0px" }}>
              <LoadingComponent type={"fetchloading"} status={fetchLoading} />
              <div className="br">
                <HeaderNavbar />
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
      } else {
        console.log(inventory);
        if (inventory.length <= 0) {
          return (
            <FormItem style={{ margin: "0px" }}>
              <LoadingComponent type={"fetchloading"} status={fetchLoading} />
              <div className="br">
                <HeaderNavbar />
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
                <HeaderNavbar page={"Payment"} />
                <div className="pm-body">
                  <div className="pm-back pay-font-hd">
                    <a
                      onClick={() => router.push("/page.shop")}
                      style={{ color: "#AFAFAF", margin: "0px" }}
                    >
                      Back
                    </a>
                    <h2
                      style={{
                        color: "black",
                        fontSize: "18px",
                        margin: "0px",
                      }}
                    >
                      PAYMENT
                    </h2>
                    <a style={{ color: "#AFAFAF", margin: "0px" }}>Edit</a>
                  </div>
                  <div className="pm-address pay-font-hd">
                    <EnvironmentOutlined
                      style={{
                        color: "black",
                        fontSize: "37px",
                        marginTop: "5px",
                      }}
                    />
                    <div className="pm-address-2">
                      <h2
                        style={{
                          color: "black",
                          textDecorationLine: "underline",
                          fontSize: "16px",
                        }}
                      >
                        ที่อยู่ในการจัดส่ง
                      </h2>
                      <h3 style={{ color: "black", fontSize: "16px" }}>
                        โมจิ เอนยูสแคว์ซอย 3 ม.1 ต.ท่าโพธิ์ อ.เมือง จ.พิษณุโลก
                        65000
                      </h3>
                    </div>
                  </div>
                  {inventory.map((data) => {
                    return <CardShowProductRes data={data} />;
                  })}
                  <div className="pm-option pay-font-hd">
                    <h3
                      style={{
                        color: "black",
                        marginBottom: 0,
                        fontSize: "16px",
                        textDecorationLine: "underline",
                      }}
                    >
                      ตัวเลือกการจัดส่ง
                    </h3>
                    <Select
                      defaultValue="lucy"
                      style={{ width: "auto" }}
                      //onChange={handleChange}
                    >
                      <Option value="jack">Thai Express</Option>
                      <Option value="lucy">Kerry Express</Option>
                      <Option value="disabled" disabled>
                        Disabled
                      </Option>
                    </Select>
                  </div>
                  <div className="pm-payment pay-font-hd">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "11px 26px 5px 26px",
                      }}
                    >
                      <h3 style={{ fontSize: "16px" }}>รูปบัตรประชาชน</h3>
                      <Upload {...props}>
                        <Button>
                          <UploadOutlined /> Click to Upload
                        </Button>
                      </Upload>
                    </div>
                    <div className="pm-payment-body1">
                      <div className="pm-payment-body2">
                        <MonetizationOnIcon style={{ fontSize: "34px" }} />
                      </div>
                      <div className="pm-payment-body3">
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
                        <div className="pm-payment-body-1">
                          <h3 style={{ color: "black", margin: "0px" }}>
                            รวมการสั่งซื้อ
                          </h3>
                          <h3 style={{ color: "black", margin: "0px" }}>
                            {price} THB
                          </h3>
                        </div>
                        <div className="pm-payment-body-1">
                          <h3 style={{ color: "black", margin: "0px" }}>
                            การจัดส่ง
                          </h3>
                          <h3 style={{ color: "black", margin: "0px" }}>
                            600 THB
                          </h3>
                        </div>
                        <div className="pm-payment-body-1">
                          <h3 style={{ color: "black", margin: "0px" }}>
                            ยอดชำระทั้งหมด
                          </h3>
                          <h3 style={{ color: "black", margin: "0px" }}>
                            600 THB
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pm-footer">
                    <div style={{width:"100%",display:"flex",flexDirection:"row",padding:"15px 14px"}}>
                      <h2 style={{ color: "black",fontSize:"18px",marginBottom:0,marginRight:5}}>
                        ยอดชำระทั้งหมด
                      </h2>
                      <h2 style={{ color: "red",fontSize:"18px",margin:0 }}>
                        {price + 600 + 600} THB
                      </h2>
                    </div>
                    <div>
                      <button
                        className="btn-res-pm" 
                        onClick={() => postBuyProduct()}
                      >
                        สั่งซื้อสินค้า
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </FormItem>
          );
        }
      }
    }
  }
}

export default PaymentPage;
