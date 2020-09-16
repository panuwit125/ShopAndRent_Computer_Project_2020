import { Form, Button, Input ,message } from "antd";
const FormItem = Form.Item;
import React, { useState, useEffect } from "react";
import NavbarManage from "./componentManage/NavbarManage";
import HeaderManage from "./componentManage/HeaderManage";
import Axios from "axios";
import router from "next/router";
import LoadingComponent from "../../components/component.loading"

function InsertBland() {
  const [blandProduct, setBlandProduct] = useState("");
  const [show, setShow] = useState(0);
  const [token, setToken] = useState("");
  const [user, setUser] = useState();
  const [isLoading, setisLoading] = useState(false);

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
  }, []);

  const postDataAddBland = async () => {
    setisLoading(false);
    let data = { name_bland: blandProduct };
    Axios({
      method: "post",
      url: "https://tranquil-beach-43094.herokuapp.com/insertbland",
      headers: { Authorization: `Bearer ${token}` },
      data,
    })
      .then((response) => {
        console.log(response);
        successMessage();
        router.push("/shop/homemanage");
      })
      .catch((error) => {
        console.log(error.response);
        setisLoading(true);
        errorMessage();
      });
  };

  const successMessage = () => {
    message.success('เพิ่มข้อมูลสำเร็จแล้ว');
  };
  
  const errorMessage = () => {
    message.error('เกิดข้อผิดพลาด');
  };
  
  const warningMessage = () => {
    message.warning('This is a warning message');
  };

  if (isLoading) {
    return (
      <FormItem style={{ margin: "0px" }}>
        <div className="br">
          <NavbarManage show={show} setShow={setShow} />
          <HeaderManage setShow={setShow} user={user} />
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
  } else {
    return <LoadingComponent />;
  }
}

export default InsertBland;
