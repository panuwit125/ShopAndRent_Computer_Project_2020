import React, { useState, useEffect } from "react";
import { Button, Upload, message, Input } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const ListRentItem = ({
  UploadBillShow,
  setUploadBillShow,
  postBuyProduct,
  type,
  postRentProduct,
}) => {
  const [isLoading, setisLoading] = useState(true);
  const [imageBill, setImageBill] = useState();
  const [textalerg, setTextAlerg] = useState("กรุณาอัพโหลดใบเสร็จ");

  const props = (e) => {
    console.log(e);
    setImageBill(e);
    setUploadBillShow("block");
  };

  const checkImage = () => {
    if (imageBill) {
      if (type === "Shop") {
        setUploadBillShow("none")
        postBuyProduct();
      } else if (type === "Rent") {
        setUploadBillShow("none")
        postRentProduct();
      }
    } else {
      alert("ยังไม่ได้อัพโหลด");
    }
  };

  if (!isLoading) {
    return null;
  } else {
    return (
      <div
        style={{ display: UploadBillShow }}
        className="modal md-bg"
      >
        <div className="modal-content">
          <div className="lri-card" style={{minWidth:"300px",maxWidth:"500px"}}>
            <div className="lri-header">
              <h2 style={{ color: "black" }}>กระบวนการจ่ายเงิน</h2>
              <Button onClick={() => setUploadBillShow("none")}>
                ย้อนกลับ
              </Button>
            </div>
            <div
              className="lri-body"
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <div style={{ flexBasis: "auto", display: "flex" }}>
                <img
                  src={"/unnamed.png"}
                  style={{ width: "100%", marginBottom: 10 }}
                />
              </div>
              <div
                style={{
                  height: "100%",
                  flexBasis: "auto",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Upload
                  onChange={(e) => {
                    props(e);
                  }}
                >
                  <Button icon={<UploadOutlined />}>
                    Click to Upload Bill
                  </Button>
                </Upload>
              </div>
              <div
                style={{
                  height: "100%",
                  flexBasis: "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                {imageBill ? (
                  <Button
                    onClick={() => {
                      checkImage();
                    }}
                  >
                    ทำรายการจ่ายเงิน
                  </Button>
                ) : (
                  <>
                    <p style={{ color: "red" }}>{textalerg}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ListRentItem;
