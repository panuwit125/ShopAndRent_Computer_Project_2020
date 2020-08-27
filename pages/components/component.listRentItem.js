import React, { useState, useEffect } from "react";
import router from "next/router";
import { Button } from "antd";
import Axios from "axios";

const ListRentItem = (props) => {
  const [isLoading, setisLoading] = useState(false);
  const [productlist, setProductList] = useState([]);

  useEffect(() => {
    if (props) {
      Axios({
        method: "post",
        url: "https://tranquil-beach-43094.herokuapp.com/showitemlistrent",
        data: { user_id: props.user },
      })
        .then((data) => {
          console.log(data.data);
          setProductList(data.data.product);
          setisLoading(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  if (!isLoading) {
    return null;
  } else {
    return (
      <div style={{ display: props.check }} className="modal">
        <div className="modal-content">
          <div className="lri-card">
            <div className="lri-header">
              <h2 style={{ color: "black" }}>รายการยืมสินค้า</h2>
              <Button onClick={()=>props.click("none")} >ย้อนกลับ</Button>
            </div>
            <div className="lri-body">
              {productlist.map((data, index) => {
                return (
                  <div className="lri-black">
                    <h2 style={{ color: "black" }}>
                      {index + 1}. {data.name_product}
                    </h2>
                    <h2 style={{ color: "black" }}>
                      สถานะ :{" "}
                      {data.status_rent ? "คืนสินค้าแล้ว" : "ยังไม่ได้คืน"}
                    </h2>
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

export default ListRentItem;
