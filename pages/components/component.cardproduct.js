import { Card } from "antd";
const { Meta } = Card;
import React, { useState, useEffect } from "react";
import router from "next/router";

const CardProductComponent = (props) => {
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    if (props) {
      setisLoading(true);
    }
  }, []);

  const StatusShow = () => {
    if(props.page === "Shop"){
      return null
    } else {
      if(props.data.status_product){
        return <Meta description={"สถานะ : พร้อมให้เช่า"} />
      } else {
        return <Meta description={"สถานะ : ไม่พร้อมให้เช่า"} />
      }
    }
  }

  if (!isLoading) {
    return null;
  } else {
    return (
      <Card
        hoverable
        style={{ width: 240, overflowY: "hidden", overflowX: "hidden" }}
        cover={
          <img
            alt="example"
            style={{ height: 200 }}
            src={props.data.image_product}
          />
        }
        className="sp-card"
        onClick={() => router.push("/shop/description?id=" + props.data._id)}
      >
        <h3 style={{ color: "black" }}>{props.data.name_product}</h3>
        <div
          style={{
            height: "50px",
            overflowY: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          <h3 style={{ color: "black" }}>{props.data.description_product}</h3>
        </div>
        <StatusShow />
        {props.page === "Shop" ? (
          <Meta description={"ราคา " + props.data.price_product + " บาท "} />
        ) : (
          <Meta description={"ราคาเช่า " + props.data.price_product + " บาทต่อวัน "} />
        )}
      </Card>
    );
  }
};

export default CardProductComponent;
