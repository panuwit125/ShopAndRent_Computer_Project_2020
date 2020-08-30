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

let type
function NavbarComponent(props) {
  const dispatch = useDispatch();
  const { Navbar } = useSelector((state) => state.post);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    type = localStorage.getItem("type");
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
          <a onClick={()=>{localStorage.setItem('type',"Rent");router.push('/page.shop');location.reload();}}>
            <i className="fa fa-fw fa-wrench" >Go Rent</i>
          </a>
        ) : (
          <a onClick={()=>{localStorage.setItem('type',"Shop");router.push('/page.shop');location.reload();}} >
            <i className="fa fa-fw fa-wrench">Go Shop</i>
          </a>
        )}
        {props.status && props.type === "Shop" ? (
          <a href="/page.payment">
            <i className="fa fa-fw fa-user">Inventory</i>
          </a>
        ) : null}
        {props.status && props.type === "Rent" ? (
          <a onClick={()=>{props.setshow(0);props.click("block")}}>
            <i className="fa fa-fw fa-user">ShowList</i>
          </a>
        ) : null}
        {props.status ? (
          <a onClick={()=>{localStorage.clear();router.push("/page.home")}}>
            <i className="fa fa-fw fa-user">LogOut</i>
          </a>
        ) : null}
      </div>
    );
  }
}

export default NavbarComponent;
