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
        <a href="/" style={{ minWidth: 500 }}>
          <HomeOutlined style={{ marginRight: 10 }} />Home (เริ่มต้น)
        </a>
        {props.status ? (
          <a href="#" style={{ minWidth: 500 }}>
            <UserOutlined style={{ marginRight: 10 }} />{props.user}
          </a>
        ) : (
          <a href="/signin" style={{ minWidth: 500 }}>
            <LoginOutlined style={{ marginRight: 10 }} />Login (เข้าสู่ระบบ)
          </a>
        )}
        {props.shop ? (
          <>
            {type === "Shop" ? (
              <a
                onClick={() => {
                  localStorage.setItem("type", "Rent");
                  router.push("/");
                  location.reload();
                }}
                style={{ minWidth: 500 }}
              >
                <ShopOutlined style={{ marginRight: 10 }} />Rent (เช่า)
              </a>
            ) : (
              <a
                onClick={() => {
                  localStorage.setItem("type", "Shop");
                  router.push("/");
                  location.reload();
                }}
                style={{ minWidth: 500 }}
              >
                <ShopOutlined style={{ marginRight: 10 }} />Shop (ซื้อ)
              </a>
            )}
          </>
        ) : null}
        {props.shop ? (
          <>
            {props.status ? (
              <a
                onClick={() => {
                  props.setshow(0);
                  props.click("block");
                }}
                style={{ minWidth: 500 }}
              >
                <UnorderedListOutlined style={{ marginRight: 10 }} />ShowList (รายการที่ทำสำเร็จ)
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
            style={{ minWidth: 500 }}
          >
            <LogoutOutlined style={{ marginRight: 10 }} />LogOut (ออกจากระบบ)
          </a>
        ) : null}
        <a href="/compare" style={{ minWidth: 500 }}>
          <AppstoreOutlined style={{ marginRight: 10 }} />Compare
          (เปรียบเทียบสินค้า)
        </a>
        {/*<a style={{ textAlign: "center", minWidth: 160 }}>{props.type}</a>*/}
      </div>
    );
  }
}

export default NavbarComponent;
