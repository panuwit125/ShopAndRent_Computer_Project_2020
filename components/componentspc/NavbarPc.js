import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import router from "next/router";
import { useSelector, useDispatch } from "react-redux";
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

let type;
function NavbarComponent(props) {
  const { Navbar } = useSelector((state) => state.post);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(false);
    type = localStorage.getItem("type");
    if (props) {
      setisLoading(true);
    }
  }, []);

  if (!isLoading) {
    return null;
  } else {
    return (
      <ul className="show-res-navbar-ul">
        <div
          className="show-res-navbar-header"
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/")}
        >
          SECONDHAND
          <br />
          NOTEBOOK
        </div>
        <li className="show-res-navbar-li show-res-li-border">
          <a className="show-res-navbar-li" href="/">
          Home (เริ่มต้น)
          </a>
        </li>
        {props.status ? (
          <li className="show-res-navbar-li show-res-li-border">
            <a className="show-res-navbar-li"><UserOutlined style={{ marginRight: 10 }} /> {props.user}</a>
          </li>
        ) : (
          <li className="show-res-navbar-li show-res-li-border">
            <a className="show-res-navbar-li" href="/signin">
              Login (เข้าสู่ระบบ)
            </a>
          </li>
        )}
        {props.shop ? (
          <>
            {type === "Shop" ? (
              <li
                className="show-res-navbar-li show-res-li-border"
                onClick={() => {
                  localStorage.setItem("type", "Rent");
                  router.push("/");
                  location.reload();
                }}
              >
                <a className="show-res-navbar-li" href="#">
                  Rent (เช่า)
                </a>
              </li>
            ) : (
              <li
                className="show-res-navbar-li show-res-li-border"
                onClick={() => {
                  localStorage.setItem("type", "Shop");
                  router.push("/");
                  location.reload();
                }}
              >
                <a className="show-res-navbar-li" href="#">
                  Shop (ซื้อ)
                </a>
              </li>
            )}
          </>
        ) : null}

        {props.status && props.type === "Shop" ? (
          <li className="show-res-navbar-li show-res-li-border">
            <a className="show-res-navbar-li" href="/payment">
              Inventory (ตระกร้า)
            </a>
          </li>
        ) : null}
        {props.shop ? (
          <>
            {props.status ? (
              <li
                className="show-res-navbar-li show-res-li-border"
                onClick={() => {
                  props.setshow(0);
                  props.click("block");
                }}
              >
                <a className="show-res-navbar-li">
                  ShowList (รายการที่ทำสำเร็จ)
                </a>
              </li>
            ) : null}
          </>
        ) : null}

        {props.status ? (
          <li className="show-res-navbar-li show-res-li-border">
            <a
              className="show-res-navbar-li"
              onClick={() => {
                localStorage.clear();
                router.push("/");
              }}
            >
              LogOut (ออกจากระบบ)
            </a>
          </li>
        ) : null}
        <li className="show-res-navbar-li show-res-li-border">
          <a className="show-res-navbar-li" href="/compare">
            Compare (เปรียบเทียบสินค้า)
          </a>
        </li>
      </ul>
    );
  }
}

export default NavbarComponent;
