import { Form, Button, Input,Layout } from "antd";
const { Header, Sider, Content } = Layout;
const FormItem = Form.Item;
import React, { useEffect, useState } from "react";

function LoginSeller() {

  return (
    <FormItem style={{ margin: "0px" }}>
      <div className="lg">
        <div className="lg-card">
          <div>
          <h2>Login For Seller</h2>
          <h3>Username</h3>
          <Input />
          <h3>Password</h3>
          <Input />
          <Button style={{marginTop:"20px"}} type="primary">เข้าสู่การจัดการ</Button>
          </div>
        </div>
      </div>
    </FormItem>
  );
}

export default LoginSeller;
