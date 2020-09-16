import React, { useEffect, useState } from "react";
import {
  CloseOutlined,
  UserOutlined,
  HomeOutlined,
  ShopOutlined,
  AppstoreOutlined,
  LoginOutlined,
  LogoutOutlined,
  UnorderedListOutlined,
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
          <i className="fa fa-fw fa-home">
            <HomeOutlined style={{ marginRight: 10 }} /> Home
          </i>
        </a>
        <a href="/compare">
          <i className="fa fa-fw fa-home">
            <AppstoreOutlined style={{ marginRight: 10 }} /> Compare
          </i>
        </a>
        {props.status ? (
          <a href="#">
            <i className="fa fa-fw fa-wrench">
              <UserOutlined style={{ marginRight: 10 }} /> {props.user}
            </i>
          </a>
        ) : (
          <a href="/signin">
            <i className="fa fa-fw fa-wrench">
              <LoginOutlined style={{ marginRight: 10 }} /> Login
            </i>
          </a>
        )}
        {props.shop ? (
          <>
            {type === "Shop" ? (
              <a
                onClick={() => {
                  localStorage.setItem("type", "Rent");
                  router.push("/shop");
                  location.reload();
                }}
              >
                <i className="fa fa-fw fa-wrench">
                  <ShopOutlined style={{ marginRight: 10 }} />
                  Go Rent
                </i>
              </a>
            ) : (
              <a
                onClick={() => {
                  localStorage.setItem("type", "Shop");
                  router.push("/shop");
                  location.reload();
                }}
              >
                <i className="fa fa-fw fa-wrench">
                  <ShopOutlined style={{ marginRight: 10 }} />
                  Go Shop
                </i>
              </a>
            )}
          </>
        ) : null}
        <a>
          <i className="fa fa-fw fa-user">{props.type}</i>
        </a>
        {props.shop ? (
          <>
            {props.status ? (
              <a
                onClick={() => {
                  props.setshow(0);
                  props.click("block");
                }}
              >
                <i className="fa fa-fw fa-user">
                  <UnorderedListOutlined style={{ marginRight: 10 }} />
                  ShowList
                </i>
              </a>
            ) : null}
          </>
        ) : null}

        {props.status ? (
          <a
            onClick={() => {
              localStorage.clear();
              router.push("/");
            }}
          >
            <i className="fa fa-fw fa-user">
              <LogoutOutlined style={{ marginRight: 10 }} /> LogOut
            </i>
          </a>
        ) : null}
      </div>
    );
  }
}

export default NavbarComponent;
