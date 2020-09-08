import { Form, Card } from "antd";
const FormItem = Form.Item;
import React, { useState, useEffect } from "react";
import NavbarManage from "./componentManage/NavbarManage";
import HeaderManage from "./componentManage/HeaderManage";
import router from "next/router";

function homeSeller() {
  const [show, setShow] = useState(0);
  const [isLoading, setisLoading] = useState(false);
  const [user, setUser] = useState();
  const [token, setToken] = useState();

  useEffect(() => {
    if (
      localStorage.getItem("tokenmanage") &&
      JSON.parse(localStorage.getItem("usermanage"))
    ) {
      setToken(localStorage.getItem("tokenmanage"));
      setUser(JSON.parse(localStorage.getItem("usermanage")));
      setisLoading(true);
    } else {
      router.push("/shop/loginSeller");
    }
  },[]);

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
              20 ชิ้น (ข้อมูลจำลอง)
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
