import {
  Form,
  Button,
  Input,
  Layout,
  Menu,
  Card,
  Col,
  Row,
  Avatar,
  Select
} from "antd";
const FormItem = Form.Item;
import React, { useEffect, useState } from "react";
import router from "next/router";
import DehazeIcon from "@material-ui/icons/Dehaze";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import NavbarManage from './componentManage/NavbarManage'
import HeaderManage from './componentManage/HeaderManage'
const Meta = Card;

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
