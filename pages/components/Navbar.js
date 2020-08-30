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
  let type = localStorage.getItem("type");

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
          <i className="fa fa-fw fa-home">Home</i>
        </a>
        {props.status ? (
          <a href="#">
            <i className="fa fa-fw fa-wrench">ID : {props.user}</i>
          </a>
        ) : (
          <a href="/page.login">
            <i className="fa fa-fw fa-wrench">Login</i>
          </a>
        )}
        {type === "Shop" ? (
          <a onClick={()=>{localStorage.setItem('type',"Rent");location.reload();}}>
            <i className="fa fa-fw fa-wrench" >Go Rent</i>
          </a>
        ) : (
          <a onClick={()=>{localStorage.setItem('type',"Shop");location.reload();}} >
            <i className="fa fa-fw fa-wrench">Go Shop</i>
          </a>
        )}
        {props.status ? (
          <a href="/page.payment">
            <i className="fa fa-fw fa-user">Inventory</i>
          </a>
        ) : null}
      </div>
    );
  }
}

export default NavbarComponent;
