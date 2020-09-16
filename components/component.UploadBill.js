import React, { useState, useEffect } from "react";
import { Button, Upload, message, Input } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Axios from "axios"

const ListRentItem = ({
  UploadBillShow,
  setUploadBillShow,
  postBuyProduct,
  type,
  postRentProduct,
  inventory
}) => {
  const [isLoading, setisLoading] = useState(true);
  const [imageBill, setImageBill] = useState();
  const [textalerg, setTextAlerg] = useState("กรุณาอัพโหลดใบเสร็จ");
  const [image,setImage] = useState();

  useEffect(()=>{
    console.log(inventory)
    let data = { id_seller: inventory[0].owner_product};
    Axios({
      method: "post",
      url: "https://tranquil-beach-43094.herokuapp.com/showrate",
      data,
    })
      .then((data) => {
        console.log(data);
        console.log(data.data.data[0].image_bill)
        setImage(data.data.data[0].image_bill);
        setisLoading(true);
      })
      .catch((err) => {
        console.log(err.response);
      });
  })

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
                  src={image}
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
