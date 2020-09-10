import React, { useEffect, useState } from "react";
import {
  CloseOutlined,
} from "@ant-design/icons";
import router from "next/router";
import { useSelector, useDispatch } from "react-redux";

let type;
function NavbarComponent(props) {
  const dispatch = useDispatch();
  const { Navbar } = useSelector((state) => state.post);
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
            onClick={() => props.setshow(0)}
          />
        </div>
        <a href="/shop">
          <i className="fa fa-fw fa-home">Home</i>
        </a>
        <a href="/compare">
          <i className="fa fa-fw fa-home">Compare</i>
        </a>
        {props.status ? (
          <a href="#">
            <i className="fa fa-fw fa-wrench">ID : {props.user}</i>
          </a>
        ) : (
          <a href="/signin">
            <i className="fa fa-fw fa-wrench">Login</i>
          </a>
        )}
        {type === "Shop" ? (
          <a
            onClick={() => {
              localStorage.setItem("type", "Rent");
              router.push("/shop");
              location.reload();
            }}
          >
            <i className="fa fa-fw fa-wrench">Go Rent</i>
          </a>
        ) : (
          <a
            onClick={() => {
              localStorage.setItem("type", "Shop");
              router.push("/shop");
              location.reload();
            }}
          >
            <i className="fa fa-fw fa-wrench">Go Shop</i>
          </a>
        )}
        {props.status && props.type === "Shop" ? (
          <a href="/payment">
            <i className="fa fa-fw fa-user">Inventory</i>
          </a>
        ) : null}
        {props.status && props.type === "Rent" ? (
          <a
            onClick={() => {
              props.setshow(0);
              props.click("block");
            }}
          >
            <i className="fa fa-fw fa-user">ShowList</i>
          </a>
        ) : null}
        {props.status ? (
          <a
            onClick={() => {
              localStorage.clear();
              router.push("/");
            }}
          >
            <i className="fa fa-fw fa-user">LogOut</i>
          </a>
        ) : null}
      </div>
    );
  }
}

export default NavbarComponent;
