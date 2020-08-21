import { Form, Button, Input,Layout, Menu,Cards } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
const FormItem = Form.Item;
import React, { useEffect,useState } from "react";
import router from "next/router";
const { Header, Sider, Content } = Layout;
import Navbar from "../components/component.navbar";
import CardProduct from "../components/component.cardproduct";

function homeSeller() {
  const [collapsed,setCollapsed] = useState(false);
  const [checkLogin, setCheckLogin] = useState(false);
  const [user,setUser] = useState('');

  return (
    <FormItem style={{ margin: "0px" }}>
        <div className="sp">
          <div className="br-header">
            <h1>Manage</h1>
          </div>
          <div className="br-body">
            <div className="sp-body-1">
              <Navbar page={"Manage"} status={checkLogin} user={user} />
            </div>
            <div className="sp-body-2">
              <div className="sp-body-2-header">
              </div>
              <div className="sp-body-2-body">
              </div>
            </div>
          </div>
        </div>
      </FormItem>
  );
}

export default homeSeller;
