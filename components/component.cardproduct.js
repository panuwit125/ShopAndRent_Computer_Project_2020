import { Card } from "antd";
const { Meta } = Card;
import React, { useState, useEffect } from "react";
import router from "next/router";
import NumberFormat from "react-number-format";

const CardProductComponent = (props) => {
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    if (props) {
      setisLoading(true);
    }
  }, []);

  const StatusShow = () => {
    if (props.page === "Shop") {
      return null;
    } else {
      if (props.data.status_product) {
        return <Meta description={"สถานะ : พร้อมให้เช่า"} />;
      } else {
        return <Meta description={"สถานะ : ไม่พร้อมให้เช่า"} />;
      }
    }
  };

  if (!isLoading) {
    return null;
  } else {
    return (
      <>
        <Card
          hoverable
          style={{
            width: "240px",
            minWidth: "240px",
            overflowY: "hidden",
            overflowX: "hidden",
          }}
          cover={
            <img
              alt="example"
              style={{ height: "152px", width: "242px", background: "white" }}
              src={props.data.image_product}
            />
          }
          className="sp-card"
          onClick={() => router.push("/description?id=" + props.data._id)}
        >
          <h3 style={{ color: "black" }}>{props.data.name_product}</h3>
          <StatusShow />
          {props.page === "Shop" ? (
            <NumberFormat
              value={props.data.price_product}
              displayType={"text"}
              thousandSeparator={true}
              renderText={(value) => (
                <Meta
                  className="sp-meta-font"
                  description={"Price " + value + " THB. "}
                />
              )}
            />
          ) : (
            <NumberFormat
              value={props.data.price_product}
              displayType={"text"}
              thousandSeparator={true}
              renderText={(value) => (
                <Meta description={"ราคาเช่า " + value + " บาทต่อวัน "} />
              )}
            />
          )}
        </Card>
      </>
    );
  }
};

export default CardProductComponent;
