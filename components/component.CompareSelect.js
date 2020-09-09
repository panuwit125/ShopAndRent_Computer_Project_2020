import React, { useState, useEffect } from "react";
import { Button, Upload, message, Input } from "antd";

const CompareSelectShow = ({
  UploadBillShow,
  setUploadBillShow,
  postBuyProduct,
  type,
  postRentProduct,
  setCompareSelectShow,
  compareSelectShow,
  productAll,
  setSelectCompare,
  SelectProduct,
}) => {
  const [isLoading, setisLoading] = useState(true);

  if (!isLoading) {
    return null;
  } else {
    console.log(productAll);
    return (
      <div style={{ display: compareSelectShow }} className="modal md-bg">
        <div className="modal-content">
          <div
            className="lri-card"
            style={{ minWidth: "300px", maxWidth: "500px", overflow: "auto" }}
          >
            <div className="lri-header">
              <h2 style={{ color: "black" }}>เลือกสินค้า</h2>
              <Button
                onClick={() => {
                  setSelectCompare("");
                  setCompareSelectShow("none");
                }}
              >
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
              {productAll.map((product, index) => {
                return (
                  <div
                    className="lri-black"
                    style={{
                      border: "1px solid black",
                      padding: "10px",
                      margin: "10px",
                      cursor: "pointer",
                    }}
                    key={index}
                    onClick={() => {
                      setCompareSelectShow("none");
                      SelectProduct(product);
                    }}
                  >
                    <h4 style={{ color: "black" }}>
                      {index + 1}. {product.name_product}
                    </h4>
                    <h4 style={{ color: "black" }}>{product.bland_product}</h4>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default CompareSelectShow;
