import {
  Form,
  Card,
} from "antd";
const FormItem = Form.Item;
import React, { useState } from "react";
import NavbarManage from './componentManage/NavbarManage'
import HeaderManage from './componentManage/HeaderManage'

function homeSeller() {
  const [show,setShow] = useState(0)

  return (
    <FormItem style={{ margin: "0px" }}>
      <div className="mg-container">
        <NavbarManage setShow={setShow} show={show} />
        <div className="mg-navbar">
          <HeaderManage setShow={setShow} />
        </div>
        <div className="mg-body">
          <Card title="จำนวนสินค้าทั้งหมด" className="mg-card" bordered={true}>
            20 ชิ้น
          </Card>
          <Card title="รายได้ทั้งหมด" className="mg-card" bordered={true}>
            200,000 บาท
          </Card>
        </div>
      </div>
    </FormItem>
  );
}

export default homeSeller;
