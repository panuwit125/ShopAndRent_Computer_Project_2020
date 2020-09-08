import { Form, Button, Select, InputNumber, message } from "antd";
const FormItem = Form.Item;
import React, { useState, useEffect } from "react";
import { DeleteOutlined } from "@ant-design/icons";
const { Option } = Select;
import router from "next/router";
import Axios from "axios";
import LoadingComponent from "../components/component.loading";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import HeaderNavbar from "../components/HeaderNavbar";

//import page -> start
import PaymentMobile from "../components/pages/mobiles/payment";
import PaymentPC from "../components/pages/computer/paymentPC";
//import page -> end

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
  const [inventory, setInventory] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [fetchLoading, setfetchLoading] = useState(false);
  const [checkLogin , setCheckLogin] = useState(false);
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const matches = useMediaQuery("(min-width:600px)");
  const [dayforrent, setDayForRent] = useState(7);
  const [UploadBillShow , setUploadBillShow] = useState("none")

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
        setCheckLogin(true);
      } else {
        router.push("/signin");
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
        url: "https://tranquil-beach-43094.herokuapp.com/productrentbyid",
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
              <h3 style={{ color: "black" }}>
                สถานะ :{" "}
                {inventory.status_product ? "พร้อมให้เช่า" : "ไม่พร้อมให้เช่า"}
              </h3>
            </div>
            <div style={{ textAlign: "center" }}>
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
              <div style={{ textAlign: "center" }}></div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <DeleteOutlined
              onClick={() => deleteProductInventory(props.data._id)}
            />
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
      url: "http://localhost:5000/soldproduct",
      data,
    })
      .then((data) => {
        console.log(data.data.code);
        if (data.data.code === 100) {
          setfetchLoading(false);
          console.log("ทำการซื้อสำเร็จแล้ว", data);
          alert("ทำรายการซื้อสำเร็จแล้ว");
          router.push("/shop");
        } else if (data.data.code === 101) {
          setfetchLoading(false);
          console.log("รายการของถูกซื้อไปแล้ว", data.data.product);
          alert(
            `รายการ ${data.data.product} ถูกซื้อไปแล้วกรุณาลบออกและทำรายการใหม่`
          );
        }
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
        url: "https://tranquil-beach-43094.herokuapp.com/checkandrentproduct",
        data,
      })
        .then((datapost) => {
          console.log(datapost);
          if (datapost.data.code === 100) {
            alert("ทำการเช่าสำเร็จแล้ว");
            router.push("/shop");
          } else {
            alert("ไม่สามารถเช่าได้เนื่องจากถูกเช่าไปแล้ว");
            router.push("/shop");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("ไม่พร้อมให้เช่า");
      router.push("/shop");
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

  if (!isLoading) {
    return <LoadingComponent type={"pageloading"} status={true} />;
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
                  <Button onClick={() => router.push("/shop")}>
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
          <PaymentPC
            fetchLoading={fetchLoading}
            inventory={inventory}
            price={price}
            postBuyProduct={postBuyProduct}
            type={type}
            CardShowProduct={CardShowProduct}
            CardShowProductRes={CardShowProductRes}
            dayforrent={dayforrent}
            postRentProduct={postRentProduct}
            status={status}
            checkLogin={checkLogin}
            user={user}
            UploadBillShow={UploadBillShow}
            setUploadBillShow={setUploadBillShow}
          />
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
          <PaymentMobile
            fetchLoading={fetchLoading}
            inventory={inventory}
            price={price}
            postBuyProduct={postBuyProduct}
            type={type}
            CardShowProduct={CardShowProduct}
            CardShowProductRes={CardShowProductRes}
            dayforrent={dayforrent}
            postRentProduct={postRentProduct}
            UploadBillShow={UploadBillShow}
            setUploadBillShow={setUploadBillShow}
          />
        );
      }
    }
  }
}
//}

export default PaymentPage;
