import React, { useEffect, useState } from "react";
import { Layout} from "antd";
import router from "next/router";
import { useSelector, useDispatch } from "react-redux";

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
        <div className="show-res-navbar-header">
          SECONDHAND
          <br />
          NOTEBOOK
        </div>
        <li className="show-res-navbar-li show-res-li-border">
          <a className="show-res-navbar-li" href="/shop">
            Home
          </a>
        </li>
        {props.status ? (
          <li className="show-res-navbar-li show-res-li-border">
            <a className="show-res-navbar-li">ID : {props.user}</a>
          </li>
        ) : (
          <li className="show-res-navbar-li show-res-li-border">
            <a className="show-res-navbar-li" href="/signin">
              Login
            </a>
          </li>
        )}
        {type === "Shop" ? (
          <li
            className="show-res-navbar-li show-res-li-border"
            onClick={() => {
              localStorage.setItem("type", "Rent");
              router.push("/shop");
              location.reload();
            }}
          >
            <a className="show-res-navbar-li" href="#">
              GoRent
            </a>
          </li>
        ) : (
          <li
            className="show-res-navbar-li show-res-li-border"
            onClick={() => {
              localStorage.setItem("type", "Shop");
              router.push("/shop");
              location.reload();
            }}
          >
            <a className="show-res-navbar-li" href="#">
              GoShop
            </a>
          </li>
        )}
        {props.status && props.type === "Shop" ? (
          <li className="show-res-navbar-li show-res-li-border">
            <a className="show-res-navbar-li" href="/payment">
              Inventory
            </a>
          </li>
        ) : null}
        {props.status && props.type === "Rent" ? (
          <li
            className="show-res-navbar-li show-res-li-border"
            onClick={() => {
              props.setshow(0);
              props.click("block");
            }}
          >
            <a className="show-res-navbar-li">ShowList</a>
          </li>
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
              LogOut
            </a>
          </li>
        ) : null}
      </ul>
    );
  }
}

export default NavbarComponent;
