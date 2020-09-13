import React, { useState } from "react";

export default function DescriptionProduct(props) {
  const [swipht, setSwipht] = useState(true);

  const ShowButton = () => {
    if (swipht) {
      return (
        <div className="des-res-br">
          <div
            className="des-div "
            style={{ borderRight: "1px solid #DADBDD" }}
          >
            <button
              className="des-btn"
              style={{
                color: "#FFC700",
                borderBottom: "2px solid #ffc700",
                background: "none",
              }}
              onClick={() => setSwipht(true)}
            >
              Description
            </button>
          </div>
          <div className="des-div">
            <button className="des-btn" onClick={() => setSwipht(false)}>
              Spec
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="des-res-br">
          <div
            className="des-div "
            style={{ borderRight: "1px solid #DADBDD" }}
          >
            <button className="des-btn" onClick={() => setSwipht(true)}>
              Description
            </button>
          </div>
          <div className="des-div">
            <button
              className="des-btn"
              style={{
                color: "#FFC700",
                borderBottom: "2px solid #ffc700",
                background: "none",
              }}
              onClick={() => setSwipht(false)}
            >
              Spec
            </button>
          </div>
        </div>
      );
    }
  };

  const ShowDes = () => {
    if (swipht) {
      return (
        <div style={{ padding: "19px 22px" }}>
          <h1 className="des-res-text">{props.description}</h1>
          {props.type === "Rent" ? (
            <>
              {props.product.status_product ? (
                <h2 className="des-res-text">สถานะสินค้า : พร้อมให้เช่า</h2>
              ) : (
                <h2 className="des-res-text">สถานะสินค้า : ไม่พร้อมให้เช่า</h2>
              )}
            </>
          ) : null}
        </div>
      );
    } else {
      return (
        <div style={{ padding: "19px 22px", height: "100%" }}>
          <h1 className="des-res-text">CPU : {props.product.cpu_product}</h1>
          <h1 className="des-res-text">
            MAINBOARD : {props.product.mainboard_product}
          </h1>
          <h1 className="des-res-text">RAM : {props.product.ram_product}</h1>
          <h1 className="des-res-text">
            HARDDISK : {props.product.harddisk_product}
          </h1>
          <h1 className="des-res-text">
            VGA CARD : {props.product.vgacard_product}
          </h1>
          <h1 className="des-res-text">SSD : {props.product.ssd_product}</h1>
          <h1 className="des-res-text">
            MONITOR : {props.product.monitor_product}
          </h1>
        </div>
      );
    }
  };

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <ShowButton />
      <ShowDes />
      <div className="des-res-br des-res-price-layout">
        <h2 className="des-res-price" style={{ color: "#62646A" }}>
          PRICE :{" "}
        </h2>
        <h2 className="des-res-price" style={{ color: "#FFC700" }}>
          {props.price}
        </h2>
        {props.type === "Shop" ? (
          <h2 className="des-res-price" style={{ color: "#62646A" }}>
            THB
          </h2>
        ) : (
          <h2 className="des-res-price" style={{ color: "#62646A" }}>
            PER / DAY
          </h2>
        )}
      </div>
    </div>
  );
}
