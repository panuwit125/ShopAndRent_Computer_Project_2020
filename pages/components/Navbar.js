import React, { useEffect, useState } from "react";
import { Layout, Menu, Button } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import router from "next/router";
import { updateNavbar, updateTypeBland } from "../../store/actions/postAction";
import { useSelector, useDispatch } from "react-redux";
const { Header, Content, Footer, Sider } = Layout;

function NavbarComponent(props) {
  const dispatch = useDispatch();
  const { Navbar } = useSelector((state) => state.post);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    if (props) {
      setisLoading(true);
    }
  }, []);

  if (!isLoading) {
    return null;
  } else {
    return (
      <div className="navbar" style={{ width: props.show }}>
        <div style={{ textAlign: "end", marginRight: "15px" }}>
          <CloseOutlined
            style={{ color: "white" }}
            onClick={() => props.setshow(0)}
          />
        </div>
        <a href="/page.shop">
          <i class="fa fa-fw fa-home">Home</i>
        </a>
        {props.status ? (
          <a href="#">
            <i class="fa fa-fw fa-wrench">ID : {props.user}</i>
          </a>
        ) : (
          <a href="/page.login">
            <i class="fa fa-fw fa-wrench">Login</i>
          </a>
        )}
        {props.status ? (
          <a href="/page.payment">
            <i class="fa fa-fw fa-user">Inventory</i>
          </a>
        ) : null}
      </div>
    );
  }
}

export default NavbarComponent;
