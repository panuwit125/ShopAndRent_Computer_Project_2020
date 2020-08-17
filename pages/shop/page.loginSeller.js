import { Form, Button,Input } from "antd";
const FormItem = Form.Item;
import React, { useEffect } from "react";
import router from "next/router";

function LoginSeller() {
  const nexthandle = (type) => {
    localStorage.setItem("type", type);
    router.push("/page.shop");
    return null;
  };

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <FormItem style={{ margin: "0px"}}>
      <h3 style={{color:"black"}}>Username</h3>
      <Input />
      <h3 style={{color:"black"}}>Password</h3>
      <Input />
      <Button>เข้าสู่การจัดการ</Button>
    </FormItem>
  );
}

export default LoginSeller;
