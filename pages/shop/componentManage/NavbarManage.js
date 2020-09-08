import React, { useEffect, useState } from "react";
import { Layout, Menu, Button } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import router from "next/router";

let type;
function NavbarComponent(props) {
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(false);
    type = localStorage.getItem("type");
    if (props) {
      setisLoading(true);
    }
  }, [props.res]);

  if (!isLoading) {
    return null;
  } else {
    return (
      <div className="navbar" style={{ width: props.show }}>
        <div style={{ textAlign: "end", marginRight: "15px" }}>
          <CloseOutlined
            style={{ color: "white" }}
            onClick={() => props.setShow(0)}
          />
        </div>
        <a href="/shop/homemanage">
          <i className="fa fa-fw fa-home">Home</i>
        </a>
        <a href="/shop/showproduct">
          <i className="fa fa-fw fa-home">ShowProduct</i>
        </a>
        <a href="/shop/insertproduct">
          <i className="fa fa-fw fa-home">AddProductForBuy</i>
        </a>
        <a href="/shop/insertProductForRent">
          <i className="fa fa-fw fa-home">AddProductForRent</i>
        </a>
        <a href="#">
          <i className="fa fa-fw fa-home">AddListBland</i>
        </a>
        <a href="/shop/loginSeller">
          <i className="fa fa-fw fa-home">LogOut</i>
        </a>
      </div>
    );
  }
}

export default NavbarComponent;
