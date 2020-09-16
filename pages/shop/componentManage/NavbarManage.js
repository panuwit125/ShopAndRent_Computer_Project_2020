import React, { useEffect, useState } from "react";
import { Layout, Menu, Button } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  CloseOutlined,
  LogoutOutlined,
  HomeOutlined,
  AppstoreAddOutlined,
  UnorderedListOutlined,
  CodeSandboxOutlined,
  EditOutlined
} from "@ant-design/icons";
import router from "next/router";

let type;
function NavbarComponent(props) {
  const [isLoading, setisLoading] = useState(true);

  if (!isLoading) {
    return null;
  } else {
    return (
      <div className="navbar" style={{ width: props.show }}>
        <div style={{ textAlign: "end", marginRight: "15px" }}>
          <CloseOutlined
            style={{ color: "white" }}
            onClick={() => props.setShow(0)}
          />
        </div>
        <a href="/shop/homemanage" style={{ minWidth: 200 }}>
          <HomeOutlined style={{ marginRight: 10 }} />หน้าแรก
        </a>
        <a href="/shop/showproduct" style={{ minWidth: 200 }}>
          <CodeSandboxOutlined style={{ marginRight: 10 }} />สินค้าทั้งหมด
        </a>
        <a href="/shop/listsolditem" style={{ minWidth: 200 }}>
          <UnorderedListOutlined style={{ marginRight: 10 }} />รายการขาย
        </a>
        <a href="/shop/insertproduct" style={{ minWidth: 200 }}>
          <AppstoreAddOutlined style={{ marginRight: 10 }} />เพิ่มสินค้าขาย
        </a>
        <a href="/shop/insertProductForRent" style={{ minWidth: 200 }}>
          <AppstoreAddOutlined style={{ marginRight: 10 }} />เพิ่มสินค้าเช่า
        </a>
        <a href="/shop/addbland" style={{ minWidth: 200 }}>
          <AppstoreAddOutlined style={{ marginRight: 10 }} />เพิ่มยี่ห้อสินค้า
        </a>
        <a href="/shop/updatepicturebill" style={{ minWidth: 200 }}>
          <EditOutlined style={{ marginRight: 10 }} />เลขบัญชีธนาคาร
        </a>
        <a href="/shop/loginSeller" style={{ minWidth: 200 }}>
          <LogoutOutlined style={{ marginRight: 10 }} />ออกจากระบบ
        </a>
      </div>
    );
  }
}

export default NavbarComponent;
