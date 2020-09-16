import React, { useState, useEffect } from "react";
import router from "next/router";
import { Button, Rate, Tag } from "antd";
import Axios from "axios";
import { CheckCircleTwoTone, CloseCircleTwoTone } from "@ant-design/icons";

const ListRentItem = ({
  user,
  check,
  click,
  type,
  setCheckShowRate,
  setIdRate,
  setIdProduct,
}) => {
  const [isLoading, setisLoading] = useState(false);
  const [productlist, setProductList] = useState([]);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (type === "Rent") {
      Axios({
        method: "post",
        url: "https://tranquil-beach-43094.herokuapp.com/showitemlistrent",
        data: { user_id: user },
      })
        .then((data) => {
          console.log(data.data);
          setProductList(data.data.product);
          setisLoading(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (type === "Shop") {
      Axios({
        method: "post",
        url: "https://tranquil-beach-43094.herokuapp.com/showsolditem",
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((result) => {
          console.log(result);
          setProductList(result.data.data);
          setisLoading(true);
        })
        .catch((error) => {
          console.log(error.response);
        });
    } else {
      console.log("Error");
    }
  }, []);

  if (!isLoading) {
    return null;
  } else {
    console.log(productlist);
    if (type === "Rent") {
      return (
        <div
          style={{ display: check }}
          className="modal md-bg"
          onClick={() => click("none")}
        >
          <div className="modal-content">
            <div className="lri-card" style={{ minWidth: "300px", maxWidth: "500px", overflow: "auto" }}>
              <div className="lri-header">
                <h2 style={{ color: "black" }}>รายการยืมสินค้า</h2>
                <Button onClick={() => click("none")}>ย้อนกลับ</Button>
              </div>
              <div
                className="lri-body"
                style={{
                  overflow: "auto",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                {productlist.map((data, index) => {
                  return (
                    <div
                      className="lri-black"
                      key={index}
                      style={{
                        flexDirection: "column",
                        borderBottom: "1px solid #c7c7c7",
                      }}
                    >
                      <h4 style={{ color: "black" }}>
                        {index + 1}. {data.name_product}{" "}
                      </h4>
                      <h4 style={{ color: "black" }}>
                        {data.status_rent ? (
                          <Tag color="green">ให้คะแนนแล้ว</Tag>
                        ) : (
                          <Tag
                            color="blue"
                            onClick={() => {
                              setIdProduct(data._id);
                              setIdRate(data.owner_product);
                              setCheckShowRate("block");
                            }}
                          >
                            ยังไม่ได้ให้คะแนนร้านค้า
                          </Tag>
                        )}
                      </h4>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <h4 style={{ color: "black" }}>
                          EMS Tracking :{" "}
                          {data.track_product
                            ? `${data.track_product}`
                            : "ยังไม่ได้ระบุ"}
                        </h4>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <h4 style={{ color: "black" }}>
                          สถานะ :{" "}
                          {data.status_rent ? (
                            <>
                              <CheckCircleTwoTone twoToneColor="#52c41a" />{" "}
                              คืนสินค้าแล้ว
                            </>
                          ) : (
                            <>
                              <CloseCircleTwoTone twoToneColor="#eb2f96" />{" "}
                              ยังไม่ได้คืน
                            </>
                          )}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    } else if (type === "Shop") {
      return (
        <div
          style={{ display: check }}
          className="modal md-bg"
          onClick={() => click("none")}
        >
          <div className="modal-content">
            <div
              className="lri-card"
              style={{ minWidth: "300px", maxWidth: "500px", overflow: "auto" }}
            >
              <div className="lri-header">
                <h2 style={{ color: "black" }}>รายการของที่ซื้อ</h2>
                <Button onClick={() => click("none")}>ย้อนกลับ</Button>
              </div>
              <div
                className="lri-body"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  overflow: "auto",
                }}
              >
                {productlist.map((data, index) => {
                  return (
                    <div
                      className="lri-black"
                      style={{
                        flexDirection: "column",
                        borderBottom: "1px solid #c7c7c7",
                      }}
                      key={index}
                    >
                      <h4 style={{ color: "black" }}>
                        {index + 1}. {data.name_product}
                      </h4>
                      <h4 style={{ color: "black" }}>
                        {data.status_rent ? (
                          <Tag color="green">ให้คะแนนแล้ว</Tag>
                        ) : (
                          <Tag
                            color="blue"
                            onClick={() => {
                              setIdProduct(data._id);
                              setIdRate(data.owner_product);
                              setCheckShowRate("block");
                            }}
                          >
                            ยังไม่ได้ให้คะแนนร้านค้า
                          </Tag>
                        )}
                      </h4>
                      <h4 style={{ color: "black" }}>
                        EMS Tracking :{" "}
                        {data.track_product
                          ? `${data.track_product}`
                          : "ยังไม่ได้ระบุ"}
                      </h4>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
};

export default ListRentItem;
