import { Form, Button, Input} from "antd";
const FormItem = Form.Item;
import React, { useState } from "react";
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
