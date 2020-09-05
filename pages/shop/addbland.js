import { Form, Button, Input, Upload, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";
const FormItem = Form.Item;
const { Option } = Select;
import React, { useState, useEffect } from "react";
import router from "next/router";
import Header from "../components/component.header";
import axios from "axios";
import { name } from "file-loader";
import NavbarManage from "./componentManage/NavbarManage";
import HeaderManage from "./componentManage/HeaderManage";

function InsertBland() {
  const [blandProduct, setBlandProduct] = useState("");

  const [show, setShow] = useState(0);

  return (
    <FormItem style={{ margin: "0px" }}>
      <div className="br">
        <NavbarManage show={show} setShow={setShow} />
        <HeaderManage setShow={setShow} />
        <div style={{ padding: "20px 50px" }}>
          <h2 style={{ color: "black" }}>ชื่อผลิตภัณฑ์</h2>
          <Input
            className="ip-iuput"
            value={blandProduct}
            onChange={(e) => setBlandProduct(e.target.value)}
          />
          <Button
            onClick={() => postproduct()}
            type="primary"
            style={{ marginTop: "20px" }}
          >
            เพิ่มข้อมูล
          </Button>
        </div>
      </div>
    </FormItem>
  );
}

export default InsertBland;
