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
            ออกแบบมาให้สะดวกพกพาได้ทั้งวัน ทั้งใช้ทำงานและเพื่อความบันเทิง Swift
            5 จึงเป็นโน้ตบุ๊กฝาพับขนาด 14 นิ้วที่เบาที่สุด7 โดยมีน้ำหนักเพียง
            990 กรัม และมีการ์ดกราฟิก NVIDIA® อันทรงพลัง พร้อมทั้ง CPU Intel®
            Core™ รุ่นล่าสุด ในความบางเพียง 14.95 มม.
            คุณจึงมั่นใจได้ถึงการออกแบบที่ทรงพลัง
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
        <h2 className="des-res-price" style={{ color: "#62646A" }}>
          THB
        </h2>
      </div>
    </div>
  );
}
