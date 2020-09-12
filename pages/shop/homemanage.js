import { Form, Card } from "antd";
const FormItem = Form.Item;
import React, { useState, useEffect } from "react";
import NavbarManage from "./componentManage/NavbarManage";
import HeaderManage from "./componentManage/HeaderManage";
import router from "next/router";
import Axios from "axios"

function homeSeller() {
  const [show, setShow] = useState(0);
  const [isLoading, setisLoading] = useState(false);
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const [productShop, setProductShop] = useState();
  const [productRent, setProductRent] = useState();

  useEffect(() => {
    if (
      localStorage.getItem("tokenmanage") &&
      JSON.parse(localStorage.getItem("usermanage"))
    ) {
      setToken(localStorage.getItem("tokenmanage"));
      setUser(JSON.parse(localStorage.getItem("usermanage")));
      postDataProduct(JSON.parse(localStorage.getItem("usermanage")));
    } else {
      router.push("/shop/loginSeller");
    }
  },[]);

  const postDataProduct = (user) => {
    let body = { owner_product: user };
    Axios.post("http://localhost:5000/showproductbyuser", body)
      .then((response) => {
        console.log(response);
        setProductShop(response.data);
        postDataProductRent(user);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const postDataProductRent = (user) => {
    let body = { owner_product: user };
    Axios.post("http://localhost:5000/showproductrentbyuser", body)
      .then((response) => {
        console.log(response);
        setProductRent(response.data);
        setisLoading(true);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  if (!isLoading) {
    return null;
  } else {
    return (
      <FormItem style={{ margin: "0px" }}>
        <div className="mg-container">
          <NavbarManage setShow={setShow} show={show} />
          <div className="mg-navbar">
            <HeaderManage setShow={setShow} user={user} />
          </div>
          <div className="mg-body">
            <Card
              title="จำนวนสินค้าทั้งหมด"
              className="mg-card"
              bordered={true}
            >
              {productShop.length+productRent.length} ชิ้น 
            </Card>
            <Card
              title="จำนวนสินค้าสำหรับขาย"
              className="mg-card"
              bordered={true}
            >
              {productShop.length} ชิ้น 
            </Card>
            <Card
              title="จำนวนสินค้าสำหรับเช่า"
              className="mg-card"
              bordered={true}
            >
              {productRent.length} ชิ้น 
            </Card>
            <Card title="รายได้ทั้งหมด" className="mg-card" bordered={true}>
              200,000 บาท (ข้อมูลจำลอง)
            </Card>
          </div>
        </div>
      </FormItem>
    );
  }
}

export default homeSeller;
