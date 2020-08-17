import { Form, Button, Card } from "antd";
const FormItem = Form.Item;
import React, { useEffect } from "react";
import router from "next/router";

function home() {
  const nexthandle = (type) => {
    localStorage.setItem("type", type);
    router.push("/page.shop");
    return null;
  };

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <FormItem style={{ margin: "0px" }}>
      <Card style={{ width: 300,border:"1px solid black" ,background:"black" }}>
        <a href="/shop/page.insertproduct">เพิ่มสินค้า</a><br />
        <a>แก้ไขสินค้า</a><br />
      </Card>
      ,
    </FormItem>
  );
}

export default home;
