import React, { useState, useEffect } from "react";
import router from "next/router";
import { Button, Input } from "antd";
import Axios from "axios";

const ListRentItem = ({
  check,
  click,
  trackNumber,
  setTrackNumber,
  trackid,
  setTrackid,
  token,
  value,
}) => {
  const [isLoading, setisLoading] = useState(false);
  const [track, setTrack] = useState("");

  useEffect(() => {
    console.log(trackNumber);
    setTrack(trackNumber);
    setisLoading(true);
  }, [trackNumber]);

  useEffect(() => {
    console.log(track);
  }, [track]);

  const postDataTrack = () => {
    let data = { track_product: track, id_solditem: trackid };
    console.log(data);
    if (value === 0) {
      Axios({
        method: "put",
        url: "https://tranquil-beach-43094.herokuapp.com/solditemupdatetrack",
        headers: { Authorization: `Bearer ${token}` },
        data,
      })
        .then((response) => {
          console.log(response);
          alert(response.data.message);
          setTrackid();
          setTrackNumber("");
          click("none");
          location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (value === 1) {
      Axios({
        method: "put",
        url: "https://tranquil-beach-43094.herokuapp.com/listrentupdatetrack",
        headers: { Authorization: `Bearer ${token}` },
        data,
      })
        .then((response) => {
          console.log(response);
          alert(response.data.message);
          setTrackid();
          setTrackNumber("");
          click("none");
          location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("Error");
    }
  };

  if (!isLoading) {
    return null;
  } else {
    return (
      <div style={{ display: check }} className="modal md-bg">
        <div className="modal-content">
          <div className="mg-update-track-card">
            <div className="mg-update-track-header ">
              <h2 style={{ color: "black", marginRight: "40px" }}>
                Update EMSTrack
              </h2>
              <Button
                onClick={() => {
                  setTrackid();
                  setTrackNumber("");
                  click("none");
                }}
              >
                ย้อนกลับ
              </Button>
            </div>
            <div className="lri-body">
              <Input
                placeholder="EMS Track"
                value={track}
                onChange={(e) => setTrack(e.target.value)}
              />
              <Button
                type="primary"
                className="mg-btn-update"
                onClick={() => {
                  postDataTrack();
                }}
              >
                อัพเดทข้อมูล
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ListRentItem;
