import { Form, Button, Input } from "antd";
const FormItem = Form.Item;
import React, { useState, useEffect } from "react";
import NavbarManage from "./componentManage/NavbarManage";
import HeaderManage from "./componentManage/HeaderManage";
import Axios from "axios";
import router from "next/router"

function InsertBland() {
  const [blandProduct, setBlandProduct] = useState("");
  const [show, setShow] = useState(0);
  const [token, setToken] = useState("");
  const [user, setUser] = useState();

  useEffect(() => {
    if (
      localStorage.getItem("tokenmanage") &&
      JSON.parse(localStorage.getItem("usermanage"))
    ) {
      setToken(localStorage.getItem("tokenmanage"));
      setUser(JSON.parse(localStorage.getItem("usermanage")));
    } else {
      router.push("/shop/loginSeller");
    }
  }, []);

  const postDataAddBland = async () => {
    let data = { name_bland: blandProduct };
    Axios({
      method: "post",
      url: "https://tranquil-beach-43094.herokuapp.com/insertbland",
      headers: { Authorization: `Bearer ${token}` },
      data,
    })
      .then((response) => {
        console.log(response);
        alert("เพิ่มข้อมูลสำเร็จแล้ว")
        router.push("/shop/homemanage")
      })
      .catch((error) => {
        console.log(error.response);
        alert(error.response.data.Error)
      });
  };

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
            onClick={() => postDataAddBland()}
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
