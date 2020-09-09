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
        </div>
      );
    } else {
      return (
        <div style={{ padding: "19px 22px", height: "100%" }}>
          <h1 className="des-res-text">
            CPU : INTEL I7 - 8700K
          </h1>
          <h1 className="des-res-text">
            MAINBOARD : B450 PRO
          </h1>
          <h1 className="des-res-text">
            RAM : BUS 2666 8 GB
          </h1>
          <h1 className="des-res-text">
            HARDDISK : 1000 GB
          </h1>
          <h1 className="des-res-text">
            VGA CARD : RTX 2060 8GB
          </h1>
          <h1 className="des-res-text">
            SSD : ไม่มี
          </h1>
          <h1 className="des-res-text">
            MONITOR : IPS 144 HZ
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
        { props.type === "Shop"  ? 
        <h2 className="des-res-price" style={{ color: "#62646A" }}>
          THB
        </h2>
        :
        <h2 className="des-res-price" style={{ color: "#62646A" }}>
           PER / DAY
        </h2>
        }
      </div>
    </div>
  );
}
