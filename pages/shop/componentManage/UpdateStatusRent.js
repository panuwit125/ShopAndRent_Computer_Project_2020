import React, { useState, useEffect } from "react";
import router from "next/router";
import { Button, Input } from "antd";
import Axios from "axios";

const UpdateStatusRent = ({
  check,
  click,
  trackid,
  setTrackid,
  token
}) => {
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
  }, []);

  const postDataStatus = () => {
    let data = { status_rent: true, id_solditem: trackid };
    console.log(data);
    Axios({
      method: "put",
      url: "http://localhost:5000/listrentupdatestatus",
      headers: { Authorization: `Bearer ${token}` },
      data,
    })
      .then((response) => {
        console.log(response);
        alert(response.data.message);
        setTrackid();
        click("none");
        location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (!isLoading) {
    return null;
  } else {
    return (
      <div style={{ display: check }} className="modal md-bg">
        <div className="modal-content">
          <div
            className="mg-update-track-card"
            style={{ padding: "20px 20px 10px 20px" }}
          >
            <h2 style={{ color: "black", textAlign: "center" }}>
              เปลี่ยนสถานะเป็นคืนสินค้าแล้ว
            </h2>
            <div className="lri-body" style={{ textAlign: "right" }}>
              <Button
                onClick={() => {
                  setTrackid();
                  click("none");
                }}
              >
                ไม่ใช่
              </Button>
              <Button
                style={{ marginLeft: 10 }}
                type="primary"
                onClick={() => {
                  postDataStatus();
                }}
              >
                ใช่
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default UpdateStatusRent;
