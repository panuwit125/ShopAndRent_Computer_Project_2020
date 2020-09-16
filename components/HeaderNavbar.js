import React, { useState, useEffect } from "react";
import router from "next/router";
import { ShoppingCartOutlined } from "@ant-design/icons";
import DehazeIcon from "@material-ui/icons/Dehaze";

const HeaderComponent = (props) => {
  const [isLoading, setisLoading] = useState(false);
  const [type, setType] = useState("");
  useEffect(() => {
    if (props) {
      setType(localStorage.getItem("type"));
      setisLoading(true);
    }
  }, []);

  if (!isLoading) {
    return null;
  } else {
    if (props.page === "Payment") {
      return (
        <div className="br-header" style={{ padding: "15px 10px 15px 10px", height: "auto",marginBottom:0 }}>
          <div
            style={{
              margin: "auto 0",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <DehazeIcon
              style={{ color: "white" }}
              onClick={() => props.setshow(160)}
            />
          </div>
          <div style={{ margin: "auto 0" }}>
            <h1 style={{ marginBottom: 0 }} className="br-header-font">
              SECONDHAND
              <br />
              NOTEBOOK
            </h1>
          </div>
          <div
            style={{
              margin: "auto 0",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {props.page === "Home" ? (
              <ShoppingCartOutlined
                style={{ color: "white", fontSize: "22px", opacity: 0 }}
              />
            ) : (
              <>
                {props.status && props.type === "Shop" ? (
                  <ShoppingCartOutlined
                    style={{ color: "white", fontSize: "22px" }}
                    onClick={() => router.push("/payment")}
                  />
                ) : (
                  <ShoppingCartOutlined
                    style={{ color: "white", fontSize: "22px", opacity: 0 }}
                  />
                )}
              </>
            )}
          </div>
        </div>
      );
    } else {
      return (
        <div
          className="br-header"
          style={{ padding: "15px 10px 15px 10px", height: "auto" }}
        >
          <div
            style={{
              margin: "auto 0",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {props.page === "Home" ? (
              <DehazeIcon
                style={{ color: "white", opacity: "0" }}
                onClick={() => props.setshow(160)}
              />
            ) : (
              <DehazeIcon
                style={{ color: "white" }}
                onClick={() => props.setshow("100%")}
              />
            )}
          </div>
          <div style={{ margin: "auto 0" }}>
            <h1 onClick={()=>router.push("/")} style={{ marginBottom: 0,cursor:"pointer" }} className="br-header-font">
              SECONDHAND
              <br />
              NOTEBOOK
            </h1>
          </div>
          <div
            style={{
              margin: "auto 0",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {props.page === "Home" ? (
              <ShoppingCartOutlined
                style={{ color: "white", fontSize: "22px", opacity: 0 }}
              />
            ) : (
              <>
                {props.status && props.type === "Shop" ? (
                  <ShoppingCartOutlined
                    style={{ color: "white", fontSize: "22px" }}
                    onClick={() => router.push("/payment")}
                  />
                ) : (
                  <ShoppingCartOutlined
                    style={{ color: "white", fontSize: "22px", opacity: 0 }}
                  />
                )}
              </>
            )}
          </div>
        </div>
      );
    }
  }
};

export default HeaderComponent;
