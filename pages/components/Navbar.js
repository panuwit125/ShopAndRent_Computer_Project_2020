import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
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
      <div className="navbar">
        <a href="#home">
          <i class="fa fa-fw fa-home"></i> Home
        </a>
        <a href="#services">
          <i class="fa fa-fw fa-wrench"></i> Services
        </a>
        <a href="#clients">
          <i class="fa fa-fw fa-user"></i> Clients
        </a>
        <a href="#contact">
          <i class="fa fa-fw fa-envelope"></i> Contact
        </a>
      </div>
    );
  }
}

export default NavbarComponent;
